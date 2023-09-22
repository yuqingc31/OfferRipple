import {
  StyledFormLine,
  StyledUsernameInput,
} from '../../../Login/LoginForm/components/styledLoginForm';

type TextInputProps = {
  id: string;
  value: string;
};

const Question = ({ id, value }: TextInputProps) => {
  return (
    <StyledFormLine>
      <StyledUsernameInput type="text" id={id} value={value} disabled readOnly />
    </StyledFormLine>
  );
};

export default Question;
