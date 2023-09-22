import { StyledButton } from './ABNRightForm/styledABNRightForm';

type SubmitButtonProps = {
  text: string;
  invalidInput: boolean;
};

const SubmitButton = ({ text, invalidInput }: SubmitButtonProps) => {
  return (
    <StyledButton type="submit" disabled={invalidInput}>
      {text}
    </StyledButton>
  );
};

export default SubmitButton;
