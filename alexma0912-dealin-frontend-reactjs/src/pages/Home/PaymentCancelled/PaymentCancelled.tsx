import { Div } from './styledPaymentCancelled';
import PageHeader from '../../../components/PageHeader';
import AboutTopImage from '../../../components/AboutTopImage/AboutTopImage';

const PaymentCancelled = () => {
  return (
    <Div>
      <PageHeader />
      <AboutTopImage
        lgText={'Cancelled'}
        smText={'Payment has been cancelled! You are not charged.'}
      />
    </Div>
  );
};

export default PaymentCancelled;
