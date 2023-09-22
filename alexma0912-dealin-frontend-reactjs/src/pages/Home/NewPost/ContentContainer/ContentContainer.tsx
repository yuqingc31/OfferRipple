import { Div } from './styledContentContainer';
import ImageUploadArea from './ImageUploadArea';
import VideoURLInput from './VideoURLInput';
import PostTitleInput from './PostTitleInput';
import PostContentInput from './PostContentInput';
import TagInput from './TagInput';
import DateSelect from './DateSelect';
import CategorySelect from './CategorySelect';
import AddressSelect from './AddressSelect';
import PostSubmit from './PostSubmit';
import PageTopImage from '../../../../components/PageTopImage';
import { useState } from 'react';
import instance from '../../../../utils/axios';
import Alert from './Alert';
import { useNavigate } from 'react-router';

const ContentContainer = () => {
  const navigate = useNavigate();
  const storedTitleInput = localStorage.getItem('titleInput')
    ? localStorage.getItem('titleInput')
    : '';
  const [titleValue, setTitleValue] = useState(`${storedTitleInput}`);
  const contentInput2 = localStorage.getItem('contentInput')
    ? localStorage.getItem('contentInput')
    : '';
  const [contentValue, setContentValue] = useState(`${contentInput2}`);
  const [imageValue, setImageValue] = useState<any[]>([]);
  const [videoURL, setVideoURL] = useState<string>('');
  const [discountValue, setDiscountValue] = useState(0);
  const [dateValue, setDateValue] = useState<Date | null>(null);
  const [categoryValue, setCategoryValue] = useState('Food and Beverage');
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [addressValue, setAddressValue] = useState<string | null>('');
  const handletitleInputData = (inputData: string) => {
    setTitleValue(inputData);
  };
  const handleContentData = (inputData: string) => {
    setContentValue(inputData);
  };
  const handleImageData = (inputData: Array<any>) => {
    setImageValue(inputData);
  };
  const handleVideoUrl = (inputData: string) => {
    setVideoURL(inputData);
  };
  const handleDiscountData = (inputData: number) => {
    setDiscountValue(inputData);
  };
  const handleDateData = (inputData: Date | null) => {
    setDateValue(inputData);
  };
  const handleCategoryData = (inputData: string) => {
    setCategoryValue(inputData);
  };
  const handleAddressData = (inputData: string | null) => {
    setAddressValue(inputData);
  };
  if (localStorage.getItem('id') === null || localStorage.getItem('token') === null) {
    navigate(`/login`);
  }
  const author = localStorage.getItem('id');
  const imageUrls = imageValue.map((image) => image.fileUrl);
  const postContent = {
    author: author,
    title: titleValue,
    content: contentValue,
    image: imageUrls,
    videoURL: videoURL,
    discount: discountValue,
    promotion_end_date: dateValue,
    category: categoryValue,
    business_address: addressValue,
  };
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
      const post = await instanceWithToken.post('/posts', postContent);
      // console.log(post.data._id);
      setMessage('Your post has been created successfully!');
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 3000);
      localStorage.removeItem('contentInput');
      localStorage.removeItem('titleInput');
      navigate(`/postdetail/${post.data._id}`);
    } catch (error: any) {
      if (error.response) {
        if ((await error.response.status) === 422 || (await error.response.status) === 404) {
          const responseData = await error.response.data;
          setMessage(responseData.error);
          setOpen(true);
          setTimeout(() => {
            setOpen(false);
            if (responseData.code === 9) {
              navigate(`/recharge`);
            }
          }, 5000);
        }
        if ((await error.response.status) === 400) {
          setOpen(true);
          setMessage('Something went wrong');
          setTimeout(() => {
            setOpen(false);
          }, 3000);
        }
      } else {
        setOpen(true);
        setMessage('Something went wrong');
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
        <PostTitleInput titleInputData={handletitleInputData} />
        <PostContentInput contentInputData={handleContentData} />
        <ImageUploadArea imageData={handleImageData} />
        <VideoURLInput handleVideoUrl={handleVideoUrl} videoURL={videoURL} />
        <TagInput discountData={handleDiscountData} />
        <DateSelect dateData={handleDateData} />
        <CategorySelect categoryData={handleCategoryData} />
        <AddressSelect addressData={handleAddressData} />
        <PostSubmit submitOnclick={handleSubmit} />
      </Div>
    </Div>
  );
};

export default ContentContainer;
