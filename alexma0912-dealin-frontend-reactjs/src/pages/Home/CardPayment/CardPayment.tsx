import { Div, PaymentForm } from './styledCardPayment';
import PaymentInputRow from './PaymentInputRow/PaymentInputRow';
import CountryDropDown from './CountryDropDown/CountryDropDown';
import PaymentButton from './PaymentButton/PaymentButton';
import PageHeader from '../../../components/PageHeader';

const CardPayment = () => {
  return (
    <Div className="pageContainer">
      <PageHeader />
      <Div className="formContainer">
        <PaymentForm>
          <PaymentInputRow />
          <CountryDropDown />
          <PaymentButton text={'Pay Now'} />
        </PaymentForm>
      </Div>
    </Div>
  );
};
export default CardPayment;
