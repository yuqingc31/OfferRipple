import {
  UserCard,
  UserPhoto,
  UserName,
  TextLink,
  Container1,
  UserDetails,
  Container2,
  EditButton,
} from './ProfileCardStyles';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { useNavigate } from 'react-router';
import userphoto from '../../../../assets/images/userphoto.png';

interface contentProps {
  userName?: string;
  email?: string;
  phoneNumber?: string;
  avatar?: string;
}

const ProfileCard = ({ userName, email, phoneNumber, avatar }: contentProps) => {
  const navigate = useNavigate();

  const redirectToAnotherPage = () => {
    navigate('/me/profile-setting');
  };
  return (
    <UserCard>
      <Container1>
        <UserPhoto src={avatar ? avatar : userphoto} alt="User Photo" />
        <UserName>{userName}</UserName>
      </Container1>
      <Container2>
        <UserDetails>
          <EmailIcon sx={{ color: '#f85c70' }} />
          Email: <TextLink href={`mailto:${email}`}>{email}</TextLink>
        </UserDetails>
        <UserDetails>
          <PhoneIcon sx={{ color: '#f85c70' }} />
          Phone: <TextLink href={`tel:${phoneNumber}`}>{phoneNumber}</TextLink>
        </UserDetails>
      </Container2>
      <EditButton onClick={redirectToAnotherPage}>Edit Profile</EditButton>
    </UserCard>
  );
};

export default ProfileCard;
