import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LOGIN, AuthState } from '../../../reducers/tokenReducer';
import { FormEvent, useState, CSSProperties } from 'react';
import axios from 'axios';
import Password from './components/Password';
import TextInput from './components/TextInput';
import SubmitButton from './components/SubmitButton';
import AlertMessage from './components/AlertMessage';

export interface ErrorState {
  response: {
    data: {
      error: string;
    };
    status: number;
    error: string;
  };
}

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailPlaceholder] = useState('Email');
  const [emphasized, setEmphasized] = useState({} as CSSProperties);
  const [error, setError] = useState<ErrorState>({
    response: { status: 0, data: { error: '' }, error: '' },
  });
  const token = useSelector((state: AuthState) => state.auth.token);
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = (id: string, token: string) => {
    dispatch(LOGIN({ id, token }));
  };
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'https://dev-api.offerripple.com';

  const SubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post(
        `${BACKEND_URL}/api/v1/admin/login`,
        {
          email: email,
          password: password,
        },
        { headers: headers }
      )
      .then((res) => {
        handleLogin(res.data.id, res.data.token);
        navigate('/admin');
      })
      .catch((err: ErrorState) => {
        setError?.(err);
        setEmphasized?.({ borderColor: 'red' });
      });
  };

  if (error && error.response) {
    console.log(error.response.data.error);
  }

  return (
    <form onSubmit={(event) => SubmitHandler(event)}>
      <TextInput
        id="username"
        placeholder={emailPlaceholder}
        value={email}
        required={true}
        onchange={setEmail}
        styles={error.response.data.error === 'Invalid email' ? emphasized : {}}
      />
      <Password
        id="password"
        placeholder="Password"
        value={password}
        onchange={setPassword}
        styles={error.response.data.error === 'Invalid password' ? emphasized : {}}
      />
      <SubmitButton
        text="Login"
        email={email}
        password={password}
        setError={setError}
        setEmphasized={setEmphasized}
      />
      <AlertMessage errorMsg={error.response.data.error} />
    </form>
  );
};

export default LoginForm;
