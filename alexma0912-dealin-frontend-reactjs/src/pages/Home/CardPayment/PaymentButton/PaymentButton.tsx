import { StyledButton } from './styledPaymentButton';

type PayNowProps = {
  text: string;
};
const PaymentButton = ({ text }: PayNowProps) => {
  return <StyledButton type="submit">{text}</StyledButton>;
};

export default PaymentButton;
