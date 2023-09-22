import NotesIcon from '@mui/icons-material/Notes';
import InfoIcon from '@mui/icons-material/Info';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { useNavigate } from 'react-router-dom';

import { Div, InfoSection } from './styledPageFooter';
const PageFooter = () => {
  const navigate = useNavigate();

  const handleUserTermClick = () => {
    navigate('/userterms');
  };

  const handleAboutUsClick = () => {
    navigate('/aboutus');
  };

  const handleContactUsClick = () => {
    navigate('/contactus');
  };

  return (
    <Div>
      <InfoSection onClick={handleUserTermClick}>
        <NotesIcon />
        User Terms
      </InfoSection>
      <InfoSection onClick={handleAboutUsClick}>
        <InfoIcon />
        About Us
      </InfoSection>
      <InfoSection onClick={handleContactUsClick}>
        <ContactSupportIcon />
        Contact Us
      </InfoSection>
    </Div>
  );
};

export default PageFooter;
