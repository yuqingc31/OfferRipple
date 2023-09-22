import ABNContainer from './ABNContainer/ABNContainer';
import ABNLeftText from './ABNContainer/components/ABNLeftText/ABNLeftText';
import ABNRightForm from './ABNContainer/components/ABNRightForm/ABNRightForm';
import ABNTitle from './ABNTitle/ABNTitle';
import ABNPage from './ABNPage/ABNPage';
import PageHeader from '../../../components/PageHeader';
import { Container } from './styledBusinessApplication';
import { useState } from 'react';
import axios from 'axios';
import { FormEvent, ChangeEvent } from 'react';
import Alert from './Alert';

const BusinessApplication = () => {
  const [abnNumber, setAbnNumber] = useState({ abn: '' });
  const [invalidInput, setInvalidInput] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const SubmitHandler = async (
    event: FormEvent<HTMLFormElement>,
    target: string,
    method: string
  ) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    formElement.target = target;
    formElement.method = method;
    const token = localStorage.getItem('token');
    const userID = localStorage.getItem('id');
    if (!userID || !token) {
      setMessage('Please login first');
      setOpen(true);
    }
    const instance2 = axios.create({
      baseURL: 'http://127.0.0.1:8080',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    instance2.defaults.headers.common['Content-Type'] = 'application/json';
    try {
      const res = await instance2.put(`/api/v1/users/${userID}/abn`, JSON.stringify(abnNumber));
      console.log(res.data);
      setMessage(res.data.message);
      setOpen(true);
    } catch (error: any) {
      if (error.response) {
        if ((await error.response.status) === 422 || (await error.response.status) === 404) {
          const responseData = await error.response.data;
          setMessage(responseData.message);
          setOpen(true);
          console.log(responseData);
        }
      } else {
        console.log(error.message);
      }
    }
  };
  const abnHandleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAbnNumber({ abn: `${event.target.value}` });
    const value = event.target.value;
    console.log(value);

    const hasNonNumeric = /[^0-9]/.test(value);
    if (hasNonNumeric) {
      setInvalidInput(true);
    }
    if (!hasNonNumeric) {
      setInvalidInput(false);
    }
    if (value.length >= 12) {
      setInvalidInput(true);
    }
    const newValue = value.replace(/[^0-9]/g, '');

    setAbnNumber({ abn: `${newValue}` });
  };
  const handleOnClick = () => {
    setOpen(false);
  };
  const style = {
    display: open ? 'block' : 'none',
  };
  return (
    <div>
      <PageHeader />
      <Container>
        <Alert style={style} handleOnClick={handleOnClick} message={message} />
        <ABNPage>
          <ABNTitle title="New Business Application" />
          <ABNContainer>
            <ABNLeftText text="ABN:" />
            <ABNRightForm
              target="_blank"
              method="put"
              SubmitHandler={SubmitHandler}
              abnHandleOnChange={abnHandleOnChange}
              invalidInput={invalidInput}
              abnNumber={abnNumber}
            />
          </ABNContainer>
        </ABNPage>
      </Container>
    </div>
  );
};

export default BusinessApplication;
