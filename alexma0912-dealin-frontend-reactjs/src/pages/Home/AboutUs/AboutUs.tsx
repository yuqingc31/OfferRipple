import { Div } from './styledAboutUs';
import PageHeader from '../../../components/PageHeader';
import AboutTopImage from '../../../components/AboutTopImage/AboutTopImage';
import PageFooter from '../../../components/PageFooter';
import UserTermContent from './Content';
import FootPageScroll from '../../../components/FootPageScroll';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

const AboutUs = () => {
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
        <title>About Us</title>
        <meta name="description" content="OfferRipple about our team" />
        <meta name="keywords" content="Page keywords goes here" />
        <meta property="og:type" content="about us" />
        <meta property="og:title" content="OfferRipple Login" />
        <meta property="og:author" content="OfferRipple Team" />
        <meta property="og:url" content="https://www.offerripple.com/aboutus" />
        <meta property="og:category" content="about us" />
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
      <AboutTopImage lgText={'About Us'} smText={'Our team and goals'} />
      <UserTermContent />
      {isVisible && <FootPageScroll />}
      <PageFooter />
    </Div>
  );
};

export default AboutUs;
