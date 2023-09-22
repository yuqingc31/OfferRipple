/* eslint-disable @typescript-eslint/no-unused-vars */
import { LocationOn } from '@mui/icons-material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PlaceIcon from '@mui/icons-material/Place';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Img from 'react-cool-img';
import userPhoto from '../../../../../../../assets/images/userphoto.png';
import {
  ListItemContainer,
  ImageContainer,
  DeadLineContainer,
  DeadLineSpan,
  DeadLine,
  ContentContainer,
  CategoryContainer,
  NameSpan,
  Title,
  Location,
  LocationContainer,
  TimeContainer,
  TimeStamp,
  TagsContainer,
  AuthorSpan,
  Tag,
} from '../Lists.styles';

export interface PostListProps {
  item: {
    id: string;
    imageSrc: string;
    tags: string;
    deadline: string;
    author_photo: string;
    author_name: string;
    title: string;
    content: string | null;
    location: string;
    timestamp: string;
    category: string;
  };
}

const PostList = ({ item }: PostListProps) => {
  const id = item.id;
  const navigate = useNavigate();

  const mediaQueryMobile = '@media (maxWidth: 768px)';
  const mediaQueryTablet = '@media (minWidth: 768px) and (maxWidth: 1023px)';
  const styles = {
    container: {
      width: '100%',
      height: '250px',
      objectFit: 'cover',
      borderRadius: '20px 20px 0 0',
      backgroundColor: 'gainsboro',
      [mediaQueryMobile]: {
        width: '340px',
      },
      [mediaQueryTablet]: {
        width: '340px',
      },
    },
  };

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  const [userName, setUserName] = useState<string>('Default User');
  const [Avatar, setAvatar] = useState<string>('avatar');
  const [postPhoto, setPostphoto] = useState<string>('photo');
  const DEADLINE = item.deadline;
  const Deadline = DEADLINE.substring(0, 10);
  const TIMESTAMP = item.timestamp;
  const Timestamp = TIMESTAMP.substring(0, 10);
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'https://dev-api.offerripple.com';

  const fetchUser = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/v1/users/${item.author_name}`);
      const user = response.data;
      const username = user ? user.username : 'User name';
      const avatar = user ? user.avatar : 'avatar';
      setUserName(username);
      setAvatar(avatar);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchPost = async () => {
    try {
      const response2 = await axios.get(`${BACKEND_URL}/api/v1/posts/photo/${id}`);
      const postphoto = response2.data;
      setPostphoto(postphoto);
      console.log(postphoto);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const handlePostClick = (id: string | number) => {
    navigate(`/postdetail/${id}`);
    setTimeout(scrollToTop, 100);
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
      const secondCommaIndex = address.indexOf(',');
      result = address.substring(0, secondCommaIndex);
      return result;
    }
  };

  return (
    <ListItemContainer key={id} onClick={() => handlePostClick(id)}>
      <ImageContainer>
        <Img
          src={postPhoto.replace('/raw/', '/image/') + '?w=400&h=400'}
          alt="Product Image"
          style={styles.container}
        />
        <Tag>{item.tags}% off</Tag>
        <DeadLineContainer>
          <DeadLineSpan>
            Expire: <DeadLine>{Deadline}</DeadLine>
          </DeadLineSpan>
        </DeadLineContainer>
      </ImageContainer>
      <ContentContainer>
        <CategoryContainer>
          <LocalOfferIcon
            sx={{
              fontSize: '18px',
              color: '#f85c70',
              paddingLeft: 0,
              marginLeft: '2rem',
              marginRight: '5px',
            }}
          />
          {item.category}
        </CategoryContainer>
        <Title>{item.title}</Title>
        <TagsContainer>
          <AuthorSpan>
            <Img
              src={Avatar ? Avatar : userPhoto}
              alt={item.author_name}
              style={{ objectFit: 'cover' }}
            />
            <NameSpan>{userName}</NameSpan>
          </AuthorSpan>
        </TagsContainer>
        <LocationContainer>
          <LocationOn sx={{ fontSize: 20, color: '#808080', paddingLeft: 3.5 }} />
          <Location>
            <PlaceIcon sx={{ fontSize: 20, color: 'rgb(248, 92, 112)', marginRight: '5px' }} />
            {suburbAbstract(item.location)}
          </Location>
        </LocationContainer>
        <TimeContainer>
          <AccessTimeIcon sx={{ fontSize: 20, color: '#808080', paddingLeft: 3.5 }} />
          <TimeStamp>
            <AccessTimeIcon sx={{ fontSize: 20, color: 'rgb(248, 92, 112)', marginRight: '5px' }} />
            {Timestamp}
          </TimeStamp>
        </TimeContainer>
      </ContentContainer>
    </ListItemContainer>
  );
};

export default PostList;
