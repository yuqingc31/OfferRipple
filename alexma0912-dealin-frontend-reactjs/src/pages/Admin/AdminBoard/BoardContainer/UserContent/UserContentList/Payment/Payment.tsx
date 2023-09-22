import { Div, Span } from './styledPayment';

interface PaymentProps {
  payment_amount?: number;
}

const Payment = ({ payment_amount }: PaymentProps) => {
  return (
    <Div>
      <Span>${payment_amount}</Span>
    </Div>
  );
};

export default Payment;
