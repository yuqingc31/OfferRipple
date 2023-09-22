import { useEffect, useState } from 'react';
import WebsiteTitle from './components/LogoBox';
import axios from 'axios';
import CoinsBalance from './components/Coins';
import NewAds from './components/NewAds';
import MyComponent from './components/Avatar';
import LoginBtn from './components/LoginBtn';
import DrawerComp from './components/DrawerComp';
import { useNavigate } from 'react-router-dom';
import { PageHeaderContainer, LeftContainer, RightContainer } from './StyledPageHeader';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from '@mui/material';
import { AuthState } from '../../reducers/tokenReducer';
import { LOGOUT } from '../../reducers/tokenReducer';

interface UserNavInfo {
  username: string;
  avatar: string;
}

interface PageHeaderProp {
  headRelodCount?: number;
}

const PageHeader = ({ headRelodCount }: PageHeaderProp) => {
  const uid = localStorage.getItem('id');
  const token = localStorage.getItem('token');
  const [userInfo, setUserInfo] = useState<UserNavInfo>({
    username: '',
    avatar: '',
  });
  const [coins, setCoins] = useState<number>(0);
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    Boolean(useSelector((state: AuthState) => state.auth.token))
  );
  const navigate = useNavigate();
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'https://dev-api.offerripple.com';

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    if (isLoggedIn) {
      try {
        axios
          .get(`${BACKEND_URL}/api/v1/users/me/${uid}`, {
            headers: headers,
          })
          .then((res) => {
            const data = res.data;
            setUserInfo({
              username: data.username,
              avatar: data.avatar,
            });
            setCoins(data.dcoin);
            setIsLoggedIn(true);
          });
      } catch (err) {
        console.log(err);
        setIsLoggedIn(false);
        setUserInfo({ username: '', avatar: '' });
        setCoins(0);
      }
    }
    return;
  }, [isLoggedIn, headRelodCount]);

  const isMobile = useMediaQuery('(max-width: 767px)');

  const handlePostAdClick = () => {
    navigate('/newpost');
  };

  const handleCoinsClick = () => {
    navigate('/recharge');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLogoutClick = () => {
    dispatch({ type: LOGOUT });
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <PageHeaderContainer isLoggedIn={isLoggedIn}>
      <LeftContainer isLoggedIn={isLoggedIn}>
        <WebsiteTitle />
      </LeftContainer>
      <RightContainer>
        {isLoggedIn ? (
          <>
            {isMobile ? (
              <>
                <NewAds onPostAdClick={handlePostAdClick} />
                <DrawerComp coins={coins} onLogoutClick={handleLogoutClick} />
              </>
            ) : (
              <>
                <NewAds onPostAdClick={handlePostAdClick} />
                <CoinsBalance coins={coins} onCoinsClick={handleCoinsClick} />
                <MyComponent userInfo={userInfo} onLogoutClick={handleLogoutClick} />
              </>
            )}
          </>
        ) : (
          <LoginBtn onLoginClick={handleLoginClick} />
        )}
      </RightContainer>
    </PageHeaderContainer>
  );
};

export default PageHeader;
