import { Div } from './styledContentContainer';
import VideoURLInput from './VideoURLInput';
import PostTitleInput from './PostTitleInput/PostTitleInput';
import PostContentInput from './PostContentInput';
import PostSubmit from './PostSubmit/PostSubmit';
import PageTopImage from '../../../components/PageTopImage';
import { useState, useEffect } from 'react';
import instance from '../../../utils/axios';
import Alert from './Alert';
import { useNavigate } from 'react-router';
import axios from 'axios';

interface ContentProps {
  postId?: string | undefined;
}

const ContentUpdateContainer = ({ postId }: ContentProps) => {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'https://dev-api.offerripple.com';
  const navigate = useNavigate();
  const [titleValue, setTitleValue] = useState<string>('');
  const [contentValue, setContentValue] = useState<string>('');
  const [videoURL, setVideoURL] = useState<string>('');
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const handletitleInputData = (inputData: string) => {
    setTitleValue(inputData);
  };
  const handleContentData = (inputData: string) => {
    setContentValue(inputData);
  };
  const handleVideoUrl = (inputData: string) => {
    setVideoURL(inputData);
  };
  if (localStorage.getItem('id') === null || localStorage.getItem('token') === null) {
    navigate(`/login`);
  }
  const postContent = {
    title: titleValue,
    content: contentValue,
    videoURL: videoURL,
  };

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/posts/details/${postId}`)
      .then((res) => {
        const { title, content, videoURL } = res.data;
        setTitleValue(title);
        setContentValue(content);
        setVideoURL(videoURL);
      })
      .catch((err) => {
        console.log(err);
        navigate('/login');
      });
  }, []);
  localStorage.setItem('titleInput', titleValue);
  localStorage.setItem('contentInput', contentValue);

  const handleSubmit = async () => {
    if (titleValue.length < 2 || contentValue.length < 2) {
      setOpen(true);
      setMessage('Title and content must be at least 2 characters long');
      return;
    }
    const token = localStorage.getItem('token');
    const instanceWithToken = instance;
    instanceWithToken.defaults.headers.common['Content-Type'] = 'application/json';
    instanceWithToken.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    try {
      await instanceWithToken.put(`${BACKEND_URL}/api/v1/posts/update/${postId}`, postContent);
      setMessage('Your post has been created successfully!');
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 3000);
      localStorage.removeItem('contentInput');
      localStorage.removeItem('titleInput');
      navigate(`/postdetail/${postId}`);
    } catch (error: any) {
      if (error.response) {
        if ((await error.response.status) === 422 || (await error.response.status) === 404) {
          const responseData = await error.response.data;
          setMessage(responseData.error);
          setOpen(true);
        }
        if ((await error.response.status) === 400) {
          setOpen(true);
          setMessage('Something went wrong 400');
          setTimeout(() => {
            setOpen(false);
          }, 3000);
        }
      } else {
        setOpen(true);
        setMessage('Something went wrong else?');
        setTimeout(() => {
          setOpen(false);
        }, 3000);
      }
    }
  };
  const handleOnClick = () => {
    setOpen(false);
  };
  const style = {
    display: open ? 'block' : 'none',
  };
  return (
    <Div>
      <PageTopImage />
      <Div className="contentBox">
        <Alert style={style} handleOnClick={handleOnClick} message={message} />
        <PostTitleInput titleInputData={handletitleInputData} titleValue={titleValue} />
        <PostContentInput contentInputData={handleContentData} contentValue={contentValue} />
        <VideoURLInput handleVideoUrl={handleVideoUrl} videoURL={videoURL} />
        <PostSubmit submitOnclick={handleSubmit} />
      </Div>
    </Div>
  );
};

export default ContentUpdateContainer;
