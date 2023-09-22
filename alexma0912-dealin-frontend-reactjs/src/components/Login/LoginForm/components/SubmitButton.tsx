import { StyledButtonLine, StyledButton } from './styledLoginForm';
import { ErrorState } from '../LoginForm';
import { Dispatch, SetStateAction, CSSProperties } from 'react';

type SubmitButtonProps = {
  text: string;
  email?: string;
  password?: string;
  setError?: Dispatch<SetStateAction<ErrorState>>;
  setEmphasized?: Dispatch<SetStateAction<CSSProperties>>;
};

const SubmitButton = ({ text }: SubmitButtonProps) => {
  return (
    <StyledButtonLine>
      <StyledButton type="submit">{text}</StyledButton>
    </StyledButtonLine>
  );
};

export default SubmitButton;
