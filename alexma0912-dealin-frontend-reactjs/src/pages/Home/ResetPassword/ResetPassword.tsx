import PageHeader from '../../../components/PageHeader';
import LoginTopImage from '../../../components/LoginTopImage';
import { Body } from './styledResetPassword';
import ResetPwForm from '../../../components/ResetPassword/ResetPwForm/ResetPwForm';
import PageFooter from '../../../components/PageFooter';

const ResetPasswordPage = () => {
  return (
    <div>
      <PageHeader />
      <LoginTopImage lgText={'Forgot your password?'} smText={"No worries. We've got your back."} />
      <Body>
        <ResetPwForm />
      </Body>
      <PageFooter />
    </div>
  );
};

export default ResetPasswordPage;
