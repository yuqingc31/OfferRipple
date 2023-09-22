import React, { useEffect, useState } from 'react';
import { TextField, CircularProgress } from '@mui/material'; // Import CircularProgress from MUI
import { ProfileContainer, ProfileField, FieldTitle, EditButton } from './EditProfileStyles';
import UserProfile from './EditProfileTypes';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { useParams } from 'react-router-dom';
import axios from '../../../../utils/axios';

interface halfProfile {
  username: string;
  phone_number: string;
  email: string;
  password: string;
}
interface halfProfile2 {
  security_question: string;
  answer: string;
}

const EditProfile = ({ userProfile = {} as UserProfile }) => {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'https://dev-api.offerripple.com';

  const [editMode, setEditMode] = useState(false);
  const [editedUserProfile, setEditedUserProfile] = useState(userProfile);
  const [profileFirstPart, setProfileFirstPart] = useState<halfProfile>({
    username: '',
    phone_number: '',
    email: '',
    password: '',
  });
  const [profileSecondPart, setProfileSecondPart] = useState<halfProfile2>({
    security_question: '',
    answer: '',
  });

  const [isSaving, setIsSaving] = useState(false); // State for tracking saving process
  const { userid } = useParams<{ userid: string }>();
  const uid = userid as string;
  const getUserProfileFirstPart = async () => {
    try {
      const res = await axios.get(`${BACKEND_URL}/users/${uid}`);
      const data = res.data;
      setProfileFirstPart({
        username: data.username,
        phone_number: data.phone_number,
        email: data.email,
        password: data.password,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const getUserProfileSecondPart = async () => {
    try {
      const res = await axios.get(`${BACKEND_URL}/users/reset/${profileFirstPart.email}`);
      const data = res.data;
      setProfileSecondPart({
        security_question: data.security_question,
        answer: data.security_answer,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = async () => {
    setIsSaving(true); // Set isSaving to true when Save button is clicked
    setEditMode(false);
    userProfile = editedUserProfile;
    setIsSaving(false); // Set isSaving back to false after saving is completed
    try {
      const formData = new FormData();
      formData.append('username', userProfile.username);
      formData.append('phone_number', userProfile.phoneNumber);
      formData.append('email', userProfile.contactEmail);
      formData.append('password', userProfile.password);
      formData.append('security_question', userProfile.securityQuestion);
      formData.append('security_answer', userProfile.answer);
      await axios.put(`${BACKEND_URL}/users/update-credential`, formData);
      return;
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEditedUserProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  useEffect(() => {
    getUserProfileFirstPart();
  }, []);
  useEffect(() => {
    getUserProfileSecondPart();
  }, [profileFirstPart]);
  useEffect(() => {
    setEditedUserProfile({
      username: profileFirstPart.username,
      phoneNumber: profileFirstPart.phone_number,
      contactEmail: profileFirstPart.email,
      password: profileFirstPart.password,
      securityQuestion: profileSecondPart.security_question,
      answer: profileSecondPart.answer,
    });
  }, [profileSecondPart]);

  return (
    <ProfileContainer>
      <ProfileField>
        <FieldTitle>Username</FieldTitle>
        <TextField
          sx={{
            width: '100%',
            '& fieldset': {
              borderRadius: '40px',
            },
          }}
          name="username"
          value={editedUserProfile.username || ''}
          disabled={!editMode}
          onChange={handleChange}
        />
      </ProfileField>
      <ProfileField>
        <FieldTitle>Phone Number</FieldTitle>
        <TextField
          sx={{
            width: '100%',
            '& fieldset': {
              borderRadius: '40px',
            },
          }}
          name="phoneNumber"
          value={editedUserProfile.phoneNumber || ''}
          disabled={!editMode}
          onChange={handleChange}
        />
      </ProfileField>
      <ProfileField>
        <FieldTitle>Contact Email</FieldTitle>
        <TextField
          sx={{
            width: '100%',
            '& fieldset': {
              borderRadius: '40px',
            },
          }}
          name="contactEmail"
          value={editedUserProfile.contactEmail || ''}
          disabled
        />
      </ProfileField>
      <ProfileField>
        <FieldTitle>My Password</FieldTitle>
        <TextField
          sx={{
            width: '100%',
            '& fieldset': {
              borderRadius: '40px',
            },
          }}
          name="password"
          type="password"
          value={editedUserProfile.password || ''}
          disabled={!editMode}
          onChange={handleChange}
        />
      </ProfileField>
      <ProfileField>
        <FieldTitle>My Personal Security Question</FieldTitle>
        <TextField
          sx={{
            width: '100%',
            '& fieldset': {
              borderRadius: '40px',
            },
          }}
          name="securityQuestion"
          value={editedUserProfile.securityQuestion || ''}
          disabled={!editMode}
          onChange={handleChange}
        />
      </ProfileField>
      <ProfileField>
        <FieldTitle>Answer</FieldTitle>
        <TextField
          sx={{
            width: '100%',
            '& fieldset': {
              borderRadius: '40px',
            },
          }}
          name="answer"
          value={editedUserProfile.answer || ''}
          disabled={!editMode}
          onChange={handleChange}
        />
      </ProfileField>
      {!editMode && (
        <EditButton editMode={editMode} onClick={handleEditClick}>
          <EditIcon></EditIcon>
          Edit
        </EditButton>
      )}
      {editMode && (
        <EditButton editMode={editMode} onClick={handleSaveClick} disabled={isSaving}>
          {/* Conditional rendering for Save button */}
          {isSaving ? (
            <CircularProgress size={20} color="inherit" /> // Display circular progress when saving
          ) : (
            <>
              <SaveIcon />
              Save
            </>
          )}
        </EditButton>
      )}
    </ProfileContainer>
  );
};

export default EditProfile;
