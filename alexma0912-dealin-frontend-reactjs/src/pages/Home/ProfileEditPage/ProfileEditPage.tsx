import React from 'react';
import ProfileEditPageChild from './ProfileEditPageChild';
import { SelectedImageProvider } from './UploadPhoto/SelectedImageContext';

const ProfileEditPage: React.FC = () => {
  return (
    <SelectedImageProvider>
      <ProfileEditPageChild />
    </SelectedImageProvider>
  );
};

export default ProfileEditPage;
