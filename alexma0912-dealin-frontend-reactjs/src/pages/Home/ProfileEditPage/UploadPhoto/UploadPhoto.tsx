import { ChangeEvent } from 'react';
import { useSelectedImage } from './SelectedImageContext';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

const UploadPhoto: React.FC = () => {
  const { selectedImage, setSelectedImage } = useSelectedImage();

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const file: File | null = event.target.files?.[0] || null;
    setSelectedImage(file);
  };

  const removeImage = (): void => {
    setSelectedImage(null);
  };

  const styles = `
    .upload-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      text-align: center;
      margin-left: 25%;
      margin-top: -3.8rem;
    }
    
    .upload-button {
      background-color: grey;
      color: white;
      border: none;
      padding: 8px 16px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      cursor: pointer;
      border-radius: 0.5rem;
    }
    
    .upload-button:hover {
      background-color: #f85c70;
    }
    
    .upload-button:focus {
      outline: none;
    }
    
    .upload-input {
      display: none;
    }

    .remove-button {
      background-color: #f44336;
      color: white;
      border: none;
      padding: 8px 16px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin-top: 16px;
      margin-right: 0.5rem;
      cursor: pointer;
      border-radius: 0.5rem;
    }
    
    .remove-button:hover {
      background-color: #d32f2f;
    }
    
    .remove-button:focus {
      outline: none;
    }

    .photo-review {
      margin-top: 20%;
      margin-left: -60%;
      border-radius: 2rem;
    }
    
    .photo-text {
      color: grey;
      margin-left: 1rem;
      margin-top: 5rem;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="upload-container">
        {selectedImage && (
          <div className="photo-review">
            <br />
            <text className="photo-text">Continuning uploading new photo?</text>
            <br />
            <button className="remove-button" onClick={removeImage}>
              Cancel
            </button>
            <button className="upload-button" onClick={removeImage}>
              Confirm
            </button>
          </div>
        )}

        {!selectedImage && (
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
