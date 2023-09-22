import { Div } from './styledPaymentSuccess';
import PageHeader from '../../../components/PageHeader';
import AboutTopImage from '../../../components/AboutTopImage/AboutTopImage';

const PaymentSuccess = () => {
  return (
    <Div>
      <PageHeader />
      <AboutTopImage lgText={'Success'} smText={'Thanks for your order!'} />
    </Div>
  );
};

export default PaymentSuccess;
