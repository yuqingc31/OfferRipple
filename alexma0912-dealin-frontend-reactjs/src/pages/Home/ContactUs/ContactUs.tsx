import { Div } from './styledContactUs';
import PageHeader from '../../../components/PageHeader';
import AboutTopImage from '../../../components/AboutTopImage/AboutTopImage';
import PageFooter from '../../../components/PageFooter';
import UserTermContent from './Content';
import FootPageScroll from '../../../components/FootPageScroll';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

const ContactUs = () => {
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
        <title>Contact Us</title>
        <meta name="description" content="Contact Us" />
        <meta name="keywords" content="Contact Us" />
        <meta property="og:type" content="contact us" />
        <meta property="og:title" content="OfferRipple Contact Us" />
        <meta property="og:author" content="OfferRipple Team" />
        <meta property="og:url" content="https://www.offerripple.com/contactus" />
        <meta property="og:category" content="contact us" />
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
      <AboutTopImage lgText={'Contact Us'} smText={'Reach us for any questions'} />
      <UserTermContent />
      {isVisible && <FootPageScroll />}
      <PageFooter />
    </Div>
  );
};

export default ContactUs;
