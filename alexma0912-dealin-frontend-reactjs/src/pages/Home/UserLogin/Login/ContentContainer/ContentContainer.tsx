import {
  Div,
  Form,
  PasswordBox,
  InputSection,
  TitleText,
  ForgetPassword,
} from './styledContentContainer';
import EmailInput from '../../../../../components/EmailInput';
import PasswordInput from '../../../../../components/PasswordInput';
import LoginBtn from '../../../../../components/LoginBtn/LoginBtn';
import { Dispatch, SetStateAction, useState, CSSProperties, FormEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LOGIN, AuthState } from '../../../../../reducers/tokenReducer';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { GoogleLogin } from '@react-oauth/google';
import AlertMessage from '../../../../../components/Login/LoginForm/components/AlertMessage';

interface ContentContainerProps {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}
export interface JwtPayload {
  name: string;
  email: string;
  picture: string;
  iat: number;
}
export interface ErrorState {
  response: {
    data: {
      error: string;
    };
    status: number;
    error: string;
  };
}

const ContentContainer = ({ setIsLogin }: ContentContainerProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emphasized, setEmphasized] = useState({} as CSSProperties);
  const [error, setError] = useState<ErrorState>({
    response: { status: 0, data: { error: '' }, error: '' },
  });
  const navigate = useNavigate();
  const token = useSelector((state: AuthState) => state.auth.token);
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'https://dev-api.offerripple.com';
  const dispatch = useDispatch();
  const handleLogin = (id: string, token: string) => {
    dispatch(LOGIN({ id, token }));
  };
  const handleForgetPassword = () => {
    navigate('/reset-password');
  };

  const SubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post(
        `${BACKEND_URL}/api/v1/users/login`,
        {
          email: email,
          password: password,
        },
        { headers: headers }
      )
      .then((res) => {
        handleLogin(res.data.id, res.data.token);
        navigate('/');
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
    <Div>
      <Form onSubmit={(event) => SubmitHandler(event)}>
        <InputSection>
          <TitleText className="headTitle">Login</TitleText>
        </InputSection>
        <InputSection>
          <TitleText>Email:</TitleText>
          <EmailInput
            value={email}
            required={true}
            setEmail={setEmail}
            styles={error.response.data.error === 'Invalid email' ? emphasized : {}}
          />
        </InputSection>
        <InputSection>
          <PasswordBox>
            <TitleText>Password:</TitleText>
            <ForgetPassword onClick={handleForgetPassword}>Forget Password?</ForgetPassword>
          </PasswordBox>
          <PasswordInput
            placeholder="Password"
            value={password}
            required={true}
            setPassword={setPassword}
            styles={error.response.data.error === 'Invalid password' ? emphasized : {}}
          />
        </InputSection>
        <LoginBtn btnText={'Login'} />
        <GoogleLogin
          onSuccess={(credentialResponse: any) => {
            try {
              const decodedToken = jwtDecode<JwtPayload>(credentialResponse.credential);
              const { email, name, picture, iat } = decodedToken;
              const personal_question = 'What city you live in?';
              const personal_answer = 'unset';
              const userData = {
                email: email,
                username: name,
                avatar: picture,
                password: iat,
                personal_question: personal_question,
                personal_answer: personal_answer,
              };
              axios
                .post(`${BACKEND_URL}/api/v1/users/login/third-party`, userData)
                .then((res) => {
                  handleLogin(res.data.id, res.data.token);
                  navigate('/');
                })
                .catch((err: ErrorState) => {
                  setError?.(err);
                  navigate('/login');
                });
              // Continue with any other actions you need to perform
            } catch (error) {
              console.error('Error decoding token:', error);
            }
          }}
          onError={() => {
            console.log('Login Failed');
          }}
          size={'large'}
        />
        <InputSection className="toggleMessage">
          No account yet? &nbsp;
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsLogin(false);
            }}
          >
            Register Now
          </button>
        </InputSection>
        <AlertMessage errorMsg={error.response.data.error} />
      </Form>
    </Div>
  );
};

export default ContentContainer;
