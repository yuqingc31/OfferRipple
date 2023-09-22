import PageHeader from '../../../components/PageHeader';
import {
  SettingContainer,
  PageContainer,
  CustomTextField,
  TextDiv,
  CustomButton,
  NameDiv,
  Form,
  UserPhoto,
} from './styledPersonalSetting';
import UploadButton from './UserUpload/UploadPhoto';
import PageFooter from '../../../components/PageFooter/PageFooter';
import SubpageTopImage from '../../../components/SubpageTopImage';
import { useState, useEffect, CSSProperties, FormEvent } from 'react';
import PageScrollButton from '../../../components/PageScrollButton';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useSelectedImage } from './UserUpload/SelectedImageContext';
import userPhoto from '../../../assets/images/userphoto.png';
import { AuthState } from '../../../reducers/tokenReducer';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Alert from './Alert';

const PersonalSettingChild = () => {
  const Personal_Question_List = [
    'What city do you live in',
    'What is the name of your pet?',
    'What is your name?',
    'What is your username?',
    'What is the name of your favorite song?',
    'What is your favorite book?',
    'What is your favorite food?',
    'What is your favorite color?',
    'What is your favorite animal?',
  ];
  const [width, setWidth] = useState('30vw');
  const [isVisible, setIsVisible] = useState(false);
  const { selectedImage, setSelectedImage } = useSelectedImage();
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [personalQuestion, setPersonalQuestion] = useState<string>('');
  const [personalAnswer, setPersonalAnswer] = useState<string>('');
  const [avatarUrl, setAvatarUrl] = useState<string>('');
  const [originAvatarUrl, setOriginAvatarUrl] = useState<string>('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);
  const [tempUrl, setTempUrl] = useState<string>('');
  const [emphasized] = useState({
    backgroundColor: 'pink',
    borderRadius: '15px',
  } as CSSProperties);
  const [headRelodCount, setHeadReloadCount] = useState<number>(0);
  const navigate = useNavigate();
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'https://dev-api.offerripple.com';
  const styles = password !== confirmPassword && confirmPassword !== '' ? emphasized : {};
  const token = useSelector((state: AuthState) => state.auth.token);
  const userId = useSelector((state: AuthState) => state.auth.id);
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 767) {
        setWidth('19rem');
      } else if (window.innerWidth < 1024) {
        setWidth('28rem');
      } else {
        setWidth('28rem');
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition < 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/users/${userId}`, { headers: headers })
      .then((res) => {
        const { avatar, email, phone_number, username, personal_question, personal_answer } =
          res.data;
        setAvatarUrl(avatar);
        setOriginAvatarUrl(avatar);
        setEmail(email);
        setPhoneNumber(phone_number);
        setUsername(username);
        setPersonalAnswer(personal_answer);
        setPersonalQuestion(personal_question);
      })
      .catch((err) => {
        console.log(err);
        navigate('/login');
      });
  }, []);

  const handleUsernameChange = (value: string) => {
    setUsername(value);
  };

  const handlePhoneChange = (value: string) => {
    setPhoneNumber(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
  };

  const handleQuestionChange = (event: any) => {
    setPersonalQuestion(event.target.value);
  };

  const handleAnswerChange = (value: string) => {
    setPersonalAnswer(value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (username.length < 3 || username == 'New User') {
      setOpen(true);
      setMessage('Please set up username');
      return;
    }
    if (password !== confirmPassword) {
      setOpen(true);
      setMessage('The passwords you input are different, please check');
      return;
    }
    if (personalAnswer.length < 1 || personalAnswer == 'unset') {
      setOpen(true);
      setMessage('Please set up your answer of personal question');
      return;
    }
    axios
      .put(
        `${BACKEND_URL}/api/v1/users/update`,
        {
          _id: userId,
          //avatar: avatarUrl,
          username: username,
          phone_number: phoneNumber,
          password: password,
          personal_question: personalQuestion,
          personal_answer: personalAnswer,
        },
        { headers: headers }
      )
      .then(() => {
        setOpen(true);
        setMessage('Update Successfully');
        setHeadReloadCount(headRelodCount + 1);
        navigate(0);
      })
      .catch((err) => {
        console.log(err);
        if (err.response && err.response.status === 401) {
          navigate('/login');
        }
      });
  };
  const handleOnClick = () => {
    setOpen(false);
  };
  const style = {
    display: open ? 'block' : 'none',
  };

  console.log('196: ', avatarUrl);
  return (
    <div>
      <PageHeader headRelodCount={headRelodCount} />
      <SubpageTopImage lgText={'Personal Settting'} smText={'update your information here'} />
      <PageContainer>
        <Alert style={style} handleOnClick={handleOnClick} message={message} />
        <SettingContainer>
          <Form onSubmit={handleSubmit}>
            <UserPhoto
              src={avatarUrl ? avatarUrl : tempUrl ? tempUrl : userPhoto}
              alt="User Photo"
            />
            <UploadButton
              setAvatarUrl={setAvatarUrl}
              setTempUrl={setTempUrl}
              originAvatarUrl={originAvatarUrl}
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
              data={{
                _id: userId,
                // avatar: avatarUrl,
                username: username,
                phone_number: phoneNumber,
                password: password,
                personal_question: personalQuestion,
                personal_answer: personalAnswer,
              }}
            />
            <NameDiv>{username}</NameDiv>
            <TextDiv>Email:</TextDiv>
            <CustomTextField
              value={email}
              onChange={(e) => {
                e.preventDefault();
              }}
              disabled
            />
            <TextDiv>Username:</TextDiv>
            <CustomTextField
              value={username}
              onChange={(e) => handleUsernameChange(e.target.value)}
            />
            <TextDiv>Phone Number:</TextDiv>
            <CustomTextField
              value={phoneNumber}
              onChange={(e) => handlePhoneChange(e.target.value)}
            />
            <TextDiv>New Password:</TextDiv>
            <CustomTextField
              type="password"
              onChange={(e) => handlePasswordChange(e.target.value)}
              placeholder="your new password"
            />
            <TextDiv>Confirm New Password:</TextDiv>
            <CustomTextField
              type="password"
              onChange={(e) => handleConfirmPasswordChange(e.target.value)}
              style={styles}
              placeholder="confirm your new password"
            />
            <TextDiv>Personal Question:</TextDiv>
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
              value={personalQuestion}
              onChange={handleQuestionChange}
            >
              {Personal_Question_List.map((data) => {
                return (
                  <MenuItem
                    key={data}
                    value={data}
                    placeholder="set personal question for password reset"
                  >
                    {data}
                  </MenuItem>
                );
              })}
            </Select>
            <TextDiv>Answer To Personal Question:</TextDiv>
            <CustomTextField
              type="text"
              value={personalAnswer}
              onChange={(e) => handleAnswerChange(e.target.value)}
            />
            <CustomButton type="submit">Save</CustomButton>
          </Form>
        </SettingContainer>
      </PageContainer>
      {isVisible && <PageScrollButton />}
      <PageFooter />
    </div>
  );
};
export default PersonalSettingChild;
