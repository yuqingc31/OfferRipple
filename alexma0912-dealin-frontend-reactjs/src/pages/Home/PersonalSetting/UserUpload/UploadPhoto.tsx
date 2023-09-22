import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { styles } from './styledUploadPhoto';
import { useSelector } from 'react-redux';
import { AuthState } from '../../../../reducers/tokenReducer';
import axios from '../../../../utils/axios';
import imageCompression from 'browser-image-compression';
import { useNavigate } from 'react-router-dom';

interface Data {
  _id: string;
  avatar?: string;
  username: string;
  phone_number: string;
  password: string;
  personal_question: string;
  personal_answer: string;
}

interface UploadPhotoProp {
  originAvatarUrl: string;
  setAvatarUrl: Dispatch<SetStateAction<string>>;
  setTempUrl: Dispatch<SetStateAction<string>>;
  selectedImage: File | null;
  setSelectedImage: Dispatch<SetStateAction<File | null>>;
  data: Data;
}

const UploadPhoto = ({
  originAvatarUrl,
  setAvatarUrl,
  setTempUrl,
  selectedImage,
  setSelectedImage,
  data,
}: UploadPhotoProp) => {
  const [active, setActive] = useState<boolean>(false);
  const navigate = useNavigate();
  const token = useSelector((state: AuthState) => state.auth.token);
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file: File | null = event.target.files?.[0] || null;

    if (file) {
      const options = {
        maxSizeMB: 0.1,
        maxWidthOrHeight: 300,
        useWebWorker: true,
      };
      const compressedFile = await imageCompression(file, options);
      setSelectedImage(compressedFile);
      setActive(true);
      const objectURL = URL.createObjectURL(compressedFile);
      setTempUrl(objectURL);
      setAvatarUrl('');
    }
  };

  const removeImage = (event: React.FormEvent): void => {
    event.preventDefault();
    setSelectedImage(null);
    setActive(false);
    setAvatarUrl(originAvatarUrl);
  };

  const addImage = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();
    setActive(true);
    try {
      const formData = new FormData();
      formData.append('file', selectedImage as Blob);
      const res = await axios.post(`/upload`, formData, { headers: headers });
      if (res.data.msg !== 'success') {
        throw new Error('Upload failed');
      }
      data.avatar = res.data.url;
      setTempUrl('');
      setAvatarUrl(data.avatar ? data.avatar : '');
      await axios.put(`/users/update`, data, { headers: headers });
      setActive(true);
      navigate(0);
    } catch (error) {
      throw new Error('Upload failed');
    }
  };

  return (
    <>
      <style>{styles}</style>
      <div className="upload-container">
        {selectedImage && (
          <div className="photo-review">
            <br />
            <p className="photo-text">Continuning uploading new photo?</p>
            <br />
            <button className="remove-button" onClick={removeImage}>
              Cancel
            </button>
            <button className="upload-button" onClick={addImage}>
              Confirm
            </button>
          </div>
        )}

        {!active && (
          <div>
            <label htmlFor="upload-input" className="upload-button">
              <DriveFolderUploadIcon></DriveFolderUploadIcon>
            </label>
            <input
              id="upload-input"
              className="upload-input"
              type="file"
              name="myImage"
              onChange={handleImageChange}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default UploadPhoto;
