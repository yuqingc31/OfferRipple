import { useState, useEffect } from 'react';
import PageHeader from '../../../components/PageHeader';
import MySubscribe from './MySubscribe/MySubscribe';
import ProfileCard from './ProfileCard/ProfileCard';
import PageContent from './PageContent/PageContent';
import { Container, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import SubpageTopImage from '../../../components/SubpageTopImage';
import PageFooter from '../../../components/PageFooter/PageFooter';
import PageScrollButton from '../../../components/PageScrollButton';
import ContentLoading from '../../../components/ContentLoading/ContentLoading';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AuthState } from '../../../reducers/tokenReducer';
import { useNavigate } from 'react-router-dom';

const PersonalPage = () => {
  const { userid } = useParams();
  const [userName, setUserName] = useState<string>('Default User Name Testing');
  const [email, setEmail] = useState<string>('testemail@gmail.com');
  const [phoneNumber, setPhoneNumber] = useState<string>('0722722234');
  const [following, setFollowing] = useState<string[]>();
  const [Avatar, setAvatar] = useState<string>('avatar');
  const [unsubsribeCount, setUnsubscribeCount] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(false);
  const [loaded, setLoaded] = useState<boolean>(false);
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'https://dev-api.offerripple.com';
  const navigate = useNavigate();
  const token = useSelector((state: AuthState) => state.auth.token);
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const fetchPost = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/v1/users/me/${userid}`, {
        headers: headers,
      });
      const user = response.data;
      const phone_number = user ? user.phone_number : '88888888';
      const email = user ? user.email : '123456@gmail.com';
      const username = user ? user.username : 'User name';
      const avatar = user ? user.avatar : 'avator';
      const Following = user.following;
      setUserName(username);
      setEmail(email);
      setPhoneNumber(phone_number);
      setAvatar(avatar);
      setFollowing(Following);
      setLoaded(true);
    } catch (error) {
      console.error(error);
      navigate('/index');
    }
  };

  useEffect(() => {
    fetchPost();
  }, [unsubsribeCount]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition < 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0',
      }}
    >
      {loaded ? (
        <>
          <PageHeader />
          <SubpageTopImage lgText={'User Profile'} smText={'view digital footprint here'} />
          <Container maxWidth={'lg'}>
            <Grid marginTop={'0.2rem'} container spacing={4}>
              <Grid item xs={12} lg={4}>
                <Box>
                  <ProfileCard
                    phoneNumber={phoneNumber}
                    email={email}
                    userName={userName}
                    avatar={Avatar}
                  />
                </Box>
                <Box>
                  <MySubscribe
                    following={following}
                    userid={userid}
                    unsubsribeCount={unsubsribeCount}
                    setUnsubscribeCount={setUnsubscribeCount}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} lg={8}>
                <PageContent userid={userid} />
              </Grid>
            </Grid>
          </Container>
          {isVisible && <PageScrollButton />}
          <PageFooter />
        </>
      ) : (
        <ContentLoading />
      )}
    </Box>
  );
};

export default PersonalPage;
