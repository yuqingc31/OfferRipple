import { faCreditCardAlt } from '@fortawesome/free-solid-svg-icons';
import {
  StyledContainer,
  StyledLabel,
  StyledInput,
  SecurePayment,
  CreditCardRow,
  CardIcon,
  StyledCVCIcon,
} from './styledPaymentInputRow';

const PaymentInputRow = () => {
  return (
    <StyledContainer>
      <StyledLabel htmlFor="cardNumber">Card number</StyledLabel>
      <CreditCardRow>
        <StyledInput
          type="text"
          name="cardNumber"
          id="cardNumber"
          placeholder="1234 1234 1234 1234"
        />
        <CardIcon></CardIcon>
      </CreditCardRow>
      <SecurePayment>
        <StyledContainer>
          <StyledLabel htmlFor="ExpiryDate">Expiry</StyledLabel>
          <StyledInput type="text" name="ExpiryDate" id="ExpiryDate" placeholder="MM/YY" />
        </StyledContainer>
        <StyledContainer>
          <StyledLabel htmlFor="CVC">CVC</StyledLabel>
          <CreditCardRow>
            <StyledInput type="text" name="CVC" id="CVC" placeholder="CVC" />
            <StyledCVCIcon icon={faCreditCardAlt} />
          </CreditCardRow>
        </StyledContainer>
      </SecurePayment>
    </StyledContainer>
  );
};

export default PaymentInputRow;
