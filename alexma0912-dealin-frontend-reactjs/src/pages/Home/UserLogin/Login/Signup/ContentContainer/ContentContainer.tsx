import { Div, Form, InputSection, TitleText } from './styledContentContainer';
import EmailInput from '../../../../../../components/EmailInput';
import PasswordInput from '../../../../../../components/PasswordInput';
import AnswerInput from '../../../../../../components/AnswerInput/AnswerInput';
import LoginBtn from '../../../../../../components/LoginBtn/LoginBtn';
import { ContentContainerProps } from '../Signup';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { useState, useEffect, CSSProperties, FormEvent } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LOGIN } from '../../../../../../reducers/tokenReducer';
import AlertMessage from '../../../../../../components/Login/LoginForm/components/AlertMessage';

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
  const Personal_Question_List = [
    'What city you live in?',
    'What the name of your pet?',
    'What is your name?',
    'The name of your favorite song?',
  ];
  const [questionSelect, setQuestionSelect] = useState<string>('What city you live in?');
  const [width, setWidth] = useState('30vw');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [personalAnswer, setPersonalAnswer] = useState('');
  const [emphasized, setEmphasized] = useState({
    backgroundColor: 'pink',
    borderRadius: '15px',
  } as CSSProperties);
  const [error, setError] = useState<ErrorState>({
    response: { status: 0, data: { error: '' }, error: '' },
  });
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'https://dev-api.offerripple.com';
  const styles = password !== confirmPassword && confirmPassword !== '' ? emphasized : {};
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = (id: string, token: string) => {
    dispatch(LOGIN({ id, token }));
  };

  const handleSelect = (event: any) => {
    setQuestionSelect(event.target.value);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 767) {
        setWidth('300px');
      } else if (window.innerWidth < 1024) {
        setWidth('300px');
      } else {
        setWidth('300px');
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const SubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    if (password !== confirmPassword) {
      event.preventDefault();
      setError({ response: { data: { error: 'Passwords do not match' }, status: 400, error: '' } });
      return;
    }
    const userData = {
      email: email,
      password: password,
      personal_question: questionSelect,
      personal_answer: personalAnswer,
    };

    event.preventDefault();
    axios
      .post(`${BACKEND_URL}/api/v1/users`, userData)
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
      <Form onSubmit={SubmitHandler}>
        <InputSection>
          <TitleText className="headTitle">Signup</TitleText>
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
          <TitleText>Password:</TitleText>
          <PasswordInput
            placeholder="Password"
            value={password}
            required={true}
            setPassword={setPassword}
            styles={error.response.data.error === 'Invalid password' ? emphasized : {}}
          />
        </InputSection>
        <InputSection>
          <TitleText>Confirm Password:</TitleText>
          <PasswordInput
            placeholder="Confirm Password"
            value={confirmPassword}
            required={true}
            setPassword={setConfirmPassword}
            styles={styles}
          />
        </InputSection>
        <InputSection>
          <TitleText>Personal Question:</TitleText>
          <Select
            style={{
              color: '#808080',
              opacity: '1',
              appearance: 'none',
              borderColor: '#e0e0e0',
              borderRadius: '15px',
              width: width,
              height: '3.5rem',
            }}
            MenuProps={{
              disableScrollLock: true,
              style: {
                maxHeight: 300,
              },
            }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={questionSelect}
            onChange={handleSelect}
          >
            {Personal_Question_List.map((data) => {
              return (
                <MenuItem key={data} value={data}>
                  {data}
                </MenuItem>
              );
            })}
          </Select>
        </InputSection>
        <InputSection>
          <TitleText>Answer To Personal Question:</TitleText>
          <AnswerInput
            value={personalAnswer}
            required={true}
            setPersonalAnswer={setPersonalAnswer}
            styles={error.response.data.error === 'Invalid answer' ? emphasized : {}}
          />
        </InputSection>
        <LoginBtn btnText={'Signup'} />
        <InputSection className="toggleMessage">
          Already have an account? &nbsp;
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsLogin(true);
            }}
          >
            Sign in
          </button>
        </InputSection>
        <AlertMessage errorMsg={error.response.data.error} />
      </Form>
    </Div>
  );
};

export default ContentContainer;
