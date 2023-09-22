import { StyledAlert } from './styledLoginForm';

interface AlertMessageProps {
  errorMsg: string;
}

const AlertMessage = ({ errorMsg }: AlertMessageProps) => {
  return <StyledAlert className={errorMsg ? 'alert' : ''}>{errorMsg}</StyledAlert>;
};

export default AlertMessage;
