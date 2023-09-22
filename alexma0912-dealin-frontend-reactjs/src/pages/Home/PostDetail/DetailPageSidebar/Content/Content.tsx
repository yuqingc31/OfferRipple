/* eslint-disable jsx-a11y/anchor-is-valid */
import { StyledForm, StyledButton, TextLink } from './styledContent';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import HistoryIcon from '@mui/icons-material/History';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from 'react-router-dom';
import { AuthState } from '../../../../../reducers/tokenReducer';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

export interface contentProps {
  promotionEnd?: string;
  publishDate?: string;
  location: string;
  phoneNumber?: string;
  userAvatar?: string;
  email?: string;
  signature?: string;
  userName?: string;
  businessUserId?: string;
}

const Content = ({
  promotionEnd,
  publishDate,
  location,
  phoneNumber,
  email,
  businessUserId,
}: contentProps) => {
  const token = useSelector((state: AuthState) => state.auth.token);
  const userId = useSelector((state: AuthState) => state.auth.id);
  const navigate = useNavigate();
  const BACKEND_URL = process.env.BACKEND_URL || 'https://dev-api.offerripple.com';
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const fetchSubscriptionStatus = async () => {
      try {
        const response = await fetch(
          `${BACKEND_URL}/api/v1/users/${userId}/getSubscriptionStatus/${businessUserId}`
        );
        const data = await response.json();
        setSubscribed(data.subscribed);
      } catch (error) {
        console.error('subscription checking error!', error);
      }
    };

    if (userId && businessUserId) {
      fetchSubscriptionStatus();
    }
  }, [userId, businessUserId]);

  const handleSubscribe = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (!token) {
      return navigate('/login');
    } else {
      try {
        if (subscribed) {
          await fetch(`${BACKEND_URL}/api/v1/users/${userId}/unsubscribe/${businessUserId}`, {
            method: 'DELETE',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        } else {
          await fetch(`${BACKEND_URL}/api/v1/users/${userId}/subscribe/${businessUserId}`, {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        }
        const response = await fetch(
          `${BACKEND_URL}/api/v1/users/${userId}/getSubscriptionStatus/${businessUserId}`
        );
        const data = await response.json();
        setSubscribed(data.subscribed);
      } catch (error) {
        console.error('Subscription operation failed:', error);
      }
    }
  };

  const suburbAbstract = (address: string) => {
    const commaCount = address.split(',').length - 1;
    let result = '';
    if (commaCount === 2) {
      const firstCommaIndex = address.indexOf(',');
      const secondCommaIndex = address.indexOf(',', firstCommaIndex + 1);
      result = address.substring(firstCommaIndex + 1, secondCommaIndex);
      return result;
    } else if (commaCount >= 3) {
      const secondCommaIndex = address.indexOf(',', address.indexOf(',') + 1);
      const thirdCommaIndex = address.indexOf(',', secondCommaIndex + 1);
      result = address.substring(secondCommaIndex + 1, thirdCommaIndex);
      return result;
    } else {
      result = 'Not enough commas in the address.';
    }
  };

  return (
    <StyledForm>
      <h3 className="Nunito-title">
        Promotation ends by:{' '}
        <div className="Quicksand-content">
          <QueryBuilderIcon sx={{ color: 'rgb(248, 92, 112)', marginRight: '10px' }} />
          {promotionEnd}
        </div>
      </h3>
      <h3 className="Nunito-title">
        Publish on:{' '}
        <div className="Quicksand-content">
          <HistoryIcon sx={{ color: 'rgb(248, 92, 112)', marginRight: '10px' }} />
          {publishDate}
        </div>
      </h3>
      <h3 className="Nunito-title">
        Suburb:{' '}
        <div className="Quicksand-content">
          <LocationCityIcon sx={{ color: 'rgb(248, 92, 112)', marginRight: '10px' }} />
          {suburbAbstract(location)}
        </div>
      </h3>
      <h3 className="Nunito-title">
        Phone:{' '}
        <div className="Quicksand-content">
          <LocalPhoneIcon sx={{ color: 'rgb(248, 92, 112)', marginRight: '10px' }} />
          <TextLink href={`tel:${phoneNumber}`}>{phoneNumber}</TextLink>
        </div>
      </h3>
      <h3 className="Nunito-title">
        Email:{' '}
        <div className="Quicksand-content">
          <EmailIcon sx={{ color: 'rgb(248, 92, 112)', marginRight: '10px' }} />
          <TextLink href={`mailto:${email}`}>{email}</TextLink>
        </div>
      </h3>
      <StyledButton onClick={handleSubscribe}>
        {subscribed ? 'Unsubscribe' : 'Subscribe'}
      </StyledButton>
    </StyledForm>
  );
};
export default Content;
