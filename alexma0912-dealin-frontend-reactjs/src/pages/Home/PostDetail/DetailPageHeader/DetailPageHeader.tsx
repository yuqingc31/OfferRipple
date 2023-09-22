import { PostTitle, UserDetail, Div } from './styledDetailPageHeader';
import Img from 'react-cool-img';
import userphoto from '../../../../assets/images/userphoto.png';
interface contentProps {
  currentUserId: string;
  title?: string;
  userName?: string;
  image: string[];
  userAvatar?: string;
}

const DetailPageHeader = ({ title, userName, userAvatar, image }: contentProps) => {
  return (
    <div>
      <Div className="headImg" backgroundImage={image[0]}>
        <PostTitle>
          <h1 className="Nunito-title">{title}</h1>
        </PostTitle>
        <UserDetail>
          <Img src={userAvatar ? userAvatar : userphoto} alt="User Avatar" />
          <h3 className="Nunito-title">{userName}</h3>
        </UserDetail>
      </Div>
    </div>
  );
};

export default DetailPageHeader;
