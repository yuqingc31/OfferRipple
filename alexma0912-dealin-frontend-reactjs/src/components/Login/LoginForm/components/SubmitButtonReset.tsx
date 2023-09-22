import { StyledButtonLine, StyledButton } from './styledLoginForm';

type SubmitButtonProps = {
  text: string;
};

const SubmitButton = ({ text }: SubmitButtonProps) => {
  return (
    <StyledButtonLine>
      <StyledButton type="submit">{text}</StyledButton>
    </StyledButtonLine>
  );
};

export default SubmitButton;
