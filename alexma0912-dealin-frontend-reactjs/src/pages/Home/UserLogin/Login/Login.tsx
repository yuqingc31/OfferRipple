import { useState, useEffect } from 'react';
import LoginTopImage from '../../../../components/LoginTopImage';
import PageHeader from '../../../../components/PageHeader';
import ContentContainer from './ContentContainer';
import Signup from './Signup';
import { Div } from './styledLogin';
import PageFooter from '../../../../components/PageFooter';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { ArrowIcon } from './styledLogin';
import { Helmet } from 'react-helmet';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

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
    <Div>
      <Helmet>
        <title>User Login</title>
        <meta name="description" content="OfferRipple Login Page" />
        <meta name="keywords" content="OfferRipple User Login" />
        <meta property="og:type" content="login" />
        <meta property="og:title" content="OfferRipple User Login" />
        <meta property="og:author" content="OfferRipple Team" />
        <meta property="og:url" content="https://www.offerripple.com/login" />
        <meta property="og:category" content="User login" />
        <meta property="og:site_name" content="OfferRipple" />
        <meta
          property="og:tag"
          content="Australian local discount, promotion event and money saving information"
        />
        <meta property="og:description" content="OfferRipple User Login" />
      </Helmet>
      <PageHeader />
      <LoginTopImage lgText={'Everyday saving starts here'} smText={'Get your local deals'} />
      {isLogin ? <ContentContainer setIsLogin={setIsLogin} /> : <Signup setIsLogin={setIsLogin} />}
      {isVisible && (
        <ArrowIcon
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          }}
        >
          <ArrowUpwardIcon sx={{ fontSize: '32px' }} />
        </ArrowIcon>
      )}
      <PageFooter />
    </Div>
  );
};

export default Login;
