import { Div } from './styledUserTerm';
import PageHeader from '../../../components/PageHeader';
import AboutTopImage from '../../../components/AboutTopImage/AboutTopImage';
import PageFooter from '../../../components/PageFooter';
import UserTermContent from './UserTermContent';
import FootPageScroll from '../../../components/FootPageScroll';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';

const UserTerm = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition < 200) {
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
        <title>Service & User Terms</title>
        <meta name="description" content="Service & User Terms" />
        <meta name="keywords" content="Service & User Terms" />
        <meta property="og:type" content="user terms" />
        <meta property="og:title" content="OfferRipple Service & User Terms" />
        <meta property="og:author" content="OfferRipple Team" />
        <meta property="og:url" content="https://www.offerripple.com/userterms" />
        <meta property="og:category" content="user terms" />
        <meta property="og:site_name" content="OfferRipple" />
        <meta
          property="og:tag"
          content="Australian local discount, promotion event and money saving information"
        />
        <meta
          property="og:description"
          content="Australian local discount, promotion event and money saving information"
        />
      </Helmet>
      <PageHeader />
      <AboutTopImage lgText={'User Terms'} smText={'Who we are and what you can do'} />
      <UserTermContent />
      {isVisible && <FootPageScroll />}
      <PageFooter />
    </Div>
  );
};

export default UserTerm;
