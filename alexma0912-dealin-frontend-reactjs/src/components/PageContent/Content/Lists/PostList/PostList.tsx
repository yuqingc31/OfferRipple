import { LocationOn } from '@mui/icons-material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PlaceIcon from '@mui/icons-material/Place';
import { useNavigate } from 'react-router';
import Img from 'react-cool-img';
import userphoto from '../../../../../assets/images/userphoto.png';
import {
  ListItemContainer,
  ImageContainer,
  // Image,
  DeadLineContainer,
  DeadLineSpan,
  DeadLine,
  ContentContainer,
  CategoryContainer,
  Title,
  Location,
  LocationContainer,
  TimeContainer,
  TimeStamp,
  AuthorContainer,
  AuthorSpan,
  Tag,
  NameSpan,
} from '../Lists.styles';

// import productImage1 from '../../../../../assets/images/product1.jpg';
// import productImage2 from '../../../../../assets/images/product2.jpg';
// import productImage3 from '../../../../../assets/images/product3.jpg';

export interface PostListProps {
  list: {
    _id: string;
    author: {
      _id: string;
      avatar: string;
      username: string;
    };
    image: string[];
    promotion_end_date: string;
    title: string;
    category: string;
    business_address: string;
    discount: number;
    content: string;
    created_at: string;
  };
  id: string;
}

const PostList = ({ list, id }: PostListProps) => {
  const navigate = useNavigate();

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

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

  const handlePostClick = () => {
    navigate(`/postdetail/${id}`);
    setTimeout(scrollToTop, 100);
  };

  const timeStampTransfer = (timeStamp: string) => {
    const slicedCreateDate = timeStamp?.slice(0, 10);
    return slicedCreateDate;
  };
  // Abstract Suburb and State from full address
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
    <ListItemContainer key={id} onClick={handlePostClick}>
      <ImageContainer>
        <Img
          src={list.image[0].replace('/raw/', '/image/') + '?w=400&h=400'}
          alt="product image"
          style={styles.container}
        />
        <Tag>{list.discount}% off</Tag>
        <DeadLineContainer>
          <DeadLineSpan>
            Expire: <DeadLine>{timeStampTransfer(list.promotion_end_date)}</DeadLine>
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
          {list.category}
        </CategoryContainer>
        <Title>{list.title}</Title>
        <AuthorContainer>
          <div>
            <AuthorSpan>
              <Img
                src={list.author.avatar ? list.author.avatar : userphoto}
                alt={list.author.username}
                style={{ objectFit: 'cover' }}
              />
              <NameSpan>{list.author.username}</NameSpan>
            </AuthorSpan>
          </div>
        </AuthorContainer>
        <LocationContainer>
          <LocationOn sx={{ fontSize: 20, color: '#808080', paddingLeft: 3.5 }} />
          <Location>
            <PlaceIcon sx={{ fontSize: 20, color: 'rgb(248, 92, 112)', marginRight: '5px' }} />
            {suburbAbstract(list.business_address)}
          </Location>
        </LocationContainer>
        <TimeContainer>
          <AccessTimeIcon sx={{ fontSize: 20, color: '#808080', paddingLeft: 3.5 }} />
          <TimeStamp>
            <AccessTimeIcon sx={{ fontSize: 20, color: 'rgb(248, 92, 112)', marginRight: '5px' }} />
            {timeStampTransfer(list.created_at)}
          </TimeStamp>
        </TimeContainer>
      </ContentContainer>
    </ListItemContainer>
  );
};

export default PostList;
