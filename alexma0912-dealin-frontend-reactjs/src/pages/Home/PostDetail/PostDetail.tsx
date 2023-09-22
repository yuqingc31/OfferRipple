import { useEffect, useState } from 'react';
import DetailPageContent from './DetailPageContent/DetailPageContent';
import DetailPageSidebar from './DetailPageSidebar/DetailPageSidebar';
import PageHeader from '../../../components/PageHeader/PageHeader';
import DetailPageHeader from './DetailPageHeader/DetailPageHeader';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import imageDefault from './DetailPageContent/images/post-detail-image6.jpeg';
import { PostDetailContainer, PostDetailContent } from './styledPostDetail';
import PageScrollButton from '../../../components/PageScrollButton';
import userPhoto from '../../../assets/images/userphoto.png';
import PageFooter from '../../../components/PageFooter';
import ContentLoading from '../../../components/ContentLoading/ContentLoading';
import { Helmet } from 'react-helmet';

const PostDetail = () => {
  const { postId } = useParams();
  const [content, setContent] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [promotionEnd, setPromotionEnd] = useState<string>('');
  const [publishDate, setPublishDate] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [userAvatar, setUserAvatar] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [signature, setSignature] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [image, setImage] = useState<string[]>([]);
  const [videoURL, setVideoURL] = useState<string>('');
  const [businessUserId, setBusinessUserId] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);
  const [loaded, setLoaded] = useState<boolean>(false);
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'https://dev-api.offerripple.com';
  const SeoUrl = 'https://www.offerripple.com/postdetail/' + postId;
  const [authorId, setAuthorId] = useState<string>('');

  const fetchPost = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/v1/posts/${postId}`);
      const post = response.data;
      const currentContent = post ? post.content : 'description here';
      const currentTitle = post ? post.title : 'Title here';
      const currentPromotionEnd = post ? post.promotion_end_date.slice(0, 10) : 'Not Valid';
      const currentPublishDate = post ? post.created_at.slice(0, 10) : 'Not Valid';
      const currentLocation = post ? post.business_address : 'Not Valid';
      const currentUser = post ? post.author : '';
      const currentPhoneNumber = currentUser ? currentUser.phone_number : 'Not Valid';
      const currentUserAvatar = currentUser ? currentUser.avatar : userPhoto;
      const currentEmail = currentUser ? currentUser.email : 'Not Valid';
      const currentSignature = currentUser ? currentUser.signature : 'Not Valid';
      const currentUserName = currentUser ? currentUser.username : 'Not Valid';
      const currentImage = post ? post.image : imageDefault;
      const CurrentVideoUrl = post ? post.videoURL : '';
      const currentUserId = currentUser ? currentUser.id : 'Not Valid';
      const currentAuthorId = post ? post.author.id : 'Not Valid';

      setBusinessUserId(currentUserId);
      setUserName(currentUserName);
      setSignature(currentSignature);
      setEmail(currentEmail);
      setContent(currentContent);
      setTitle(currentTitle);
      setPromotionEnd(currentPromotionEnd);
      setPublishDate(currentPublishDate);
      setLocation(currentLocation);
      setPhoneNumber(currentPhoneNumber);
      setUserAvatar(currentUserAvatar);
      setImage(currentImage);
      setVideoURL(CurrentVideoUrl);
      setLoaded(true);
      setAuthorId(currentAuthorId);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [businessUserId]);

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
    <PostDetailContainer>
      <Helmet>
        <title>Post Detail</title>
        <meta name="description" content={title} />
        <meta name="keywords" content={content} />
        <meta property="og:type" content="details" />
        <meta property="og:title" content={title} />
        <meta property="og:author" content="OfferRipple Team" />
        <meta property="og:url" content={SeoUrl} />
        <meta property="og:category" content="details" />
        <meta property="og:site_name" content="OfferRipple" />
        <meta property="og:tag" content={title} />
        <meta property="og:description" content={content} />
      </Helmet>
      {loaded ? (
        <>
          <PageHeader />
          <DetailPageHeader
            currentUserId={businessUserId}
            title={title}
            image={image}
            userName={userName}
            userAvatar={userAvatar}
          />
          <PostDetailContent>
            <DetailPageContent
              postId={postId}
              location={location}
              content={content}
              title={title}
              image={image}
              videoURL={videoURL}
              authorId={authorId}
            />
            <DetailPageSidebar
              promotionEnd={promotionEnd}
              publishDate={publishDate}
              location={location}
              userAvatar={userAvatar}
              phoneNumber={phoneNumber}
              email={email}
              signature={signature}
              userName={userName}
              businessUserId={businessUserId}
            />
          </PostDetailContent>
          {isVisible && <PageScrollButton />}
          <PageFooter />
        </>
      ) : (
        <ContentLoading />
      )}
    </PostDetailContainer>
  );
};

export default PostDetail;
