import React from 'react';
import PageHeader from '../../../components/PageHeader';
import ContentUpdateContainer from './ContentUpdateContainer';
import { Div } from '../NewPost/styledNewPost';
import { useState, useEffect } from 'react';
import PageScrollButton from '../../../components/PageScrollButton';
import PageFooter from '../../../components/PageFooter';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

const UpdatePost: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { postId } = useParams();

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
        <title>Publish New Post</title>
        <meta name="description" content="Publish New Post Page" />
        <meta
          name="keywords"
          content="Australian local discount, promotion event and money saving information, local advertising"
        />
        <meta property="og:type" content="post" />
        <meta property="og:title" content="OfferRipple Publish New Post" />
        <meta property="og:author" content="OfferRipple Team" />
        <meta property="og:url" content="https://www.offerripple.com/newpost" />
        <meta property="og:category" content="post" />
        <meta property="og:site_name" content="OfferRipple" />
        <meta
          property="og:tag"
          content="Australian local discount, promotion event and money saving information"
        />
        <meta property="og:description" content="OfferRipple publish new post" />
      </Helmet>
      <PageHeader />
      <ContentUpdateContainer postId={postId} />
      {isVisible && <PageScrollButton />}
      <PageFooter />
    </Div>
  );
};

export default UpdatePost;
