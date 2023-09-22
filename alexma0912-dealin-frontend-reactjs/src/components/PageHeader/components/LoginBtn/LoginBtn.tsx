import React from 'react';
import { LoginWrapper, LoginButton } from './StyledLoginBtn';
interface MyComponentProps {
  onLoginClick?: () => void;
}

const LoginBtn: React.FC<MyComponentProps> = ({ onLoginClick }) => {
  return (
    <LoginWrapper>
      <LoginButton className="loginBtn" onClick={onLoginClick}>
        Login
      </LoginButton>
    </LoginWrapper>
  );
};

export default LoginBtn;
