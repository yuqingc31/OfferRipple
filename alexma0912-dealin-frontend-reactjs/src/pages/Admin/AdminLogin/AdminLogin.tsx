import Title from '../../../components/Login/LoginTitle/Title';
import LoginCard from '../../../components/Login/LoginCard/LoginCard';
import LoginForm from '../../../components/Login/LoginForm/LoginForm';

const AdminLoginPage = () => (
  <div>
    <LoginCard>
      <Title title="Admin Login" />
      <LoginForm />
    </LoginCard>
  </div>
);

export default AdminLoginPage;
