import { LogoContainer, Logo } from './StyledLogoBox';
import { useNavigate } from 'react-router-dom';
import image from '../../images/logo.png';

const LogoBox = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <LogoContainer onClick={handleLogoClick}>
      <Logo src={image} alt="logo" />
    </LogoContainer>
  );
};

export default LogoBox;
