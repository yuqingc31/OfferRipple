import React from 'react';
import PersonalSettingChild from './PersonalSettingChild';
import { SelectedImageProvider } from './UserUpload/SelectedImageContext';

const ProfileEditPage: React.FC = () => {
  return (
    <SelectedImageProvider>
      <PersonalSettingChild />
    </SelectedImageProvider>
  );
};

export default ProfileEditPage;
