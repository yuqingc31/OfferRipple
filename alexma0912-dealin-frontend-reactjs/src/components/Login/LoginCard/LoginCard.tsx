import { StyledViewBody, StyledCardBody } from './styledCard';
import { ReactNode } from 'react';

type LoginCardProps = {
  children: ReactNode;
};

const LoginCard = ({ children }: LoginCardProps) => (
  <StyledViewBody>
    <StyledCardBody>{children}</StyledCardBody>
  </StyledViewBody>
);

export default LoginCard;
