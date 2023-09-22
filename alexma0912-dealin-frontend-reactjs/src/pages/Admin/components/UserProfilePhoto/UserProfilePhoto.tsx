import { Div } from './styledUserProfilePhoto';
import userphoto from '../../../../assets/images/userphoto.png';
export interface UserProfilePhotoProps {
  avatar?: string;
  className: string;
}

const UserProfilePhoto = ({ className, avatar }: UserProfilePhotoProps) => {
  return (
    <Div className={className}>
      <img src={avatar ? avatar : userphoto} alt="user avatar" />
    </Div>
  );
};

export default UserProfilePhoto;
