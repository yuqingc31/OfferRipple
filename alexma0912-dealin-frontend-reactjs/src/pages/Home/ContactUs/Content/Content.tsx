import { Div, InputSection, TitleText, ContentText } from './styledContent';
import EmailIcon from '@mui/icons-material/Email';

const UserTermContent = () => {
  return (
    <Div>
      <InputSection>
        <TitleText>
          <EmailIcon sx={{ color: 'rgb(248, 92, 112)', marginRight: '1rem', fontSize: '2rem' }} />
          Email
        </TitleText>
        <ContentText>OfferRipple@gmail.com</ContentText>
      </InputSection>
    </Div>
  );
};

export default UserTermContent;
