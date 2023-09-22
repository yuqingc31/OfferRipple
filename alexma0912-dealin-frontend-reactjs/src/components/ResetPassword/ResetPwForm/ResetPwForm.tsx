import { FormEvent, useState, CSSProperties } from 'react';
import Password from '../../Login/LoginForm/components/Password';
import TextInput from '../../Login/LoginForm/components/TextInput';
import SubmitButton from '../../Login/LoginForm/components/SubmitButtonReset';
import Question from './components/Question';
import { AxiosError } from 'axios';
import axios from '../../../utils/axios';
import { useNavigate } from 'react-router-dom';
import { Card, InputSection, TitleText } from './styledCard';

const ResetPwForm = () => {
  const [displayEmail, setDisplayEmail] = useState(true);
  const [displayQuestion, setDisplayQuestion] = useState(false);
  const [displayPwInput, setDisplayPwInput] = useState(false);
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [oldPw, setOldPw] = useState('');
  const [newPw, setNewPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [emailPlaceholder, setEmailPlaceholder] = useState('Email');
  const [answerPlaceholder, setAnswerPlaceholder] = useState('Answer');
  const [newPwPlaceholder, setNewPwPlaceholder] = useState('New Password');
  const [confirmPwPlaceholder, setConfirmPwPlaceholder] = useState('Confirm Password');
  const [emphasized, setEmphasized] = useState<CSSProperties>({});
  const navigate = useNavigate();
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'https://dev-api.offerripple.com';
  interface ErrMsg {
    message: string;
  }

  const SubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (displayEmail) {
      try {
        const res = await axios.get(`${BACKEND_URL}/api/v1/users/reset/${email}`);
        const { personal_question, password } = res.data;
        setOldPw(password);
        setQuestion(personal_question);
        setEmphasized({} as CSSProperties);
        setDisplayEmail(false);
        setDisplayQuestion(true);
        setDisplayPwInput(false);
      } catch (err) {
        const Err = err as AxiosError;
        if (Err.response) {
          const [status, data] = [Err.response.status as number, Err.response.data as ErrMsg];
          if (status === 404) {
            setEmailPlaceholder(data.message);
          } else {
            setEmailPlaceholder('Something went wrong');
          }
        } else {
          setEmailPlaceholder('Something went wrong');
        }
        setEmail('');
        setEmphasized({ borderColor: 'red' } as CSSProperties);
        return;
      }
    } else if (displayQuestion) {
      try {
        const formData = new FormData();
        formData.append('email', email);
        formData.append('security_answer', answer);
        await axios.post(`${BACKEND_URL}/api/v1/users/reset/verification`, formData);
        setEmphasized({} as CSSProperties);
        setDisplayEmail(false);
        setDisplayQuestion(false);
        setDisplayPwInput(true);
        return;
      } catch (err) {
        const Err = err as AxiosError;
        if (Err.response) {
          const [status, data] = [Err.response.status as number, Err.response.data as ErrMsg];
          if (status === 401) {
            setAnswerPlaceholder(data.message);
          } else {
            setAnswerPlaceholder('Something went wrong');
          }
        } else {
          setAnswerPlaceholder('Something went wrong');
        }
        setAnswer('');
        setEmphasized({ borderColor: 'red' } as CSSProperties);
        return;
      }
    } else if (displayPwInput) {
      if (newPw === oldPw) {
        setNewPwPlaceholder('Please pick a new password');
        setConfirmPwPlaceholder('This password can not be used');
        setNewPw('');
        setConfirmPw('');
        setEmphasized({ borderColor: 'red' } as CSSProperties);
        return;
      }
      if (newPw !== confirmPw) {
        setNewPwPlaceholder('Passwords did not match');
        setConfirmPwPlaceholder('Passwords did not match');
        setNewPw('');
        setConfirmPw('');
        setEmphasized({ borderColor: 'red' } as CSSProperties);
        return;
      }
      try {
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', newPw);
        await axios.put(`${BACKEND_URL}/api/v1/users/update-pwd`, formData);
        navigate('/login');
      } catch (err) {
        const Err = err as AxiosError;
        if (Err.response) {
          const [status, data] = [Err.response.status as number, Err.response.data as ErrMsg];
          if (status === 404) {
            setNewPwPlaceholder(data.message);
          }
        } else {
          setNewPwPlaceholder('Something went wrong');
        }
        setNewPw('');
        setConfirmPw('');
        setEmphasized({ borderColor: 'red' } as CSSProperties);
        return;
      }
      setEmphasized({} as CSSProperties);
    }
  };

  return (
    <Card>
      <form onSubmit={(event) => SubmitHandler(event)}>
        {displayEmail && (
          <>
            <InputSection>
              <TitleText className="headTitle">First Up, We need your registered Email</TitleText>
            </InputSection>
            <TitleText>Email:</TitleText>
            <TextInput
              id="username"
              placeholder={emailPlaceholder}
              value={email}
              required={true}
              onchange={setEmail}
              styles={emphasized}
            />
          </>
        )}
        {displayQuestion && (
          <>
            <InputSection>
              <TitleText className="headTitle">
                You made the question, you know the answer
              </TitleText>
            </InputSection>
            <TitleText>Security Question: </TitleText>
            <Question id="question" value={question} />
            <TitleText>Your Answer: </TitleText>
            <TextInput
              id="answer"
              placeholder={answerPlaceholder}
              value={answer}
              required={true}
              onchange={setAnswer}
              styles={emphasized}
            />
          </>
        )}
        {displayPwInput && (
          <>
            <InputSection>
              <TitleText className="headTitle">Time to be creative, pick a NEW password</TitleText>
            </InputSection>
            <TitleText>New Password: </TitleText>
            <Password
              id="newPw"
              placeholder={newPwPlaceholder}
              value={newPw}
              onchange={setNewPw}
              styles={emphasized}
            />

            <TitleText>Comfirm Password: </TitleText>
            <Password
              id="confirmPw"
              placeholder={confirmPwPlaceholder}
              value={confirmPw}
              onchange={setConfirmPw}
              styles={emphasized}
            />
          </>
        )}
        <SubmitButton text="Submit" />
      </form>
    </Card>
  );
};

export default ResetPwForm;
