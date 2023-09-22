import React from 'react';
import PageHeader from '../../../components/PageHeader';
import userPhoto from '../../../assets/images/userphoto.png';
import MyProfile from './EditProfile/EditProfile';
import UploadPhoto from './UploadPhoto/UploadPhoto';
import { UserPhoto, UserName, Div, TopContainer } from './ProfileEditPageStyles';
import { useSelectedImage } from './UploadPhoto/SelectedImageContext';

const ProfileEditPageChild: React.FC = () => {
  const { selectedImage } = useSelectedImage();

  return (
    <div>
      <PageHeader />
      <TopContainer>
        <Div>
          <UserPhoto
            src={selectedImage ? URL.createObjectURL(selectedImage) : userPhoto}
            alt="User Photo"
          />
          <UploadPhoto />
          <UserName>Jennifer Doe</UserName>
          <MyProfile></MyProfile>
        </Div>
      </TopContainer>
    </div>
  );
};

export default ProfileEditPageChild;
