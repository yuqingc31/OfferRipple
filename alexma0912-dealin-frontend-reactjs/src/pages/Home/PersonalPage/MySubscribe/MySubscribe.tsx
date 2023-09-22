/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import {
  SubscribeItem,
  Div,
  SubscribeContainer,
  SubscribeImage,
  SubscribeDetails,
  Title,
  Phone,
  SubscribeButton,
  HeadTitle,
  BusinessProfileContainer,
} from './MySubscribleStyles';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import axios from 'axios';
import userPhoto from '../../../../assets/images/userphoto.png';

interface Subscription {
  id: number;
  title: string;
  phone: string | null;
  subscribed: boolean;
  imageSrc: string;
}

interface ContentProps {
  following?: string[] | undefined;
  userid?: string;
  unsubsribeCount: number;
  setUnsubscribeCount: Dispatch<SetStateAction<number>>;
}

const MySubscribe = ({ following, userid, unsubsribeCount, setUnsubscribeCount }: ContentProps) => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const BACKEND_URL = process.env.BACKEND_URL || 'https://dev-api.offerripple.com';

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        setLoading(true);
        setError(null);
        if (following && following.length > 0) {
          const userPromises = following.map((userId) =>
            axios.get(`${BACKEND_URL}/api/v1/users/${userId}`)
          );
          const usersResponse = await Promise.all(userPromises);
          const usersData = usersResponse.map((response) => response.data);
          const subscriptionsData: Subscription[] = usersData.map((user) => ({
            id: user.id,
            title: user.username,
            phone: user.phone_number,
            subscribed: true,
            imageSrc: user.avatar,
          }));
          setSubscriptions(subscriptionsData);
        } else {
          setLoading(false);
        }
      } catch (error) {
        setError('Error fetching subscriptions.');
      } finally {
        setLoading(false);
      }
    };

    fetchSubscriptions();
  }, [following]);

  const handleSubscribe = async (id: number) => {
    const unsubscribeConfirmed = true;
    if (unsubscribeConfirmed) {
      try {
        await axios.delete(`${BACKEND_URL}/api/v1/users/${userid}/unsubscribe/${id}`);
        setSubscriptions((prevSubscriptions) =>
          prevSubscriptions.map((subscription) =>
            subscription.id === id ? { ...subscription, subscribed: false } : subscription
          )
        );
        setUnsubscribeCount(unsubsribeCount + 1);
      } catch (error) {
        console.error('Error unsubscribing:', error);
        setError('Error unsubscribing. Please try again later.');
      }
    }
  };

  const subscribedItems = subscriptions.filter((subscription) => subscription.subscribed);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Div>
      <div>
        <SubscribeContainer>
          <HeadTitle>My Subscription</HeadTitle>
          <ul style={{ width: '100%' }}>
            {subscribedItems.map((subscription) => (
              <SubscribeItem key={subscription.id}>
                <BusinessProfileContainer>
                  <SubscribeImage
                    src={subscription.imageSrc ? subscription.imageSrc : userPhoto}
                    alt="Business LOGO"
                  />
                  <SubscribeDetails>
                    <Title>{subscription.title}</Title>
                    <Phone>
                      <PhoneAndroidIcon
                        sx={{ fontSize: '16px', color: 'rgb(248, 92, 112)', marginRight: '4px' }}
                      />
                      {subscription.phone ? subscription.phone : 'Not Provided'}
                    </Phone>
                  </SubscribeDetails>
                </BusinessProfileContainer>
                <SubscribeButton
                  subscribed={subscription.subscribed}
                  onClick={() => handleSubscribe(subscription.id)} // Pass the subscription.id here
                >
                  {subscription.subscribed ? 'Unsubscribe' : null}
                </SubscribeButton>
              </SubscribeItem>
            ))}
          </ul>
        </SubscribeContainer>
      </div>
    </Div>
  );
};

export default MySubscribe;
