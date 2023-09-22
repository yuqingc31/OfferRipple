import React from 'react';
import { ExpandMore } from '@mui/icons-material';
import { UserButton, UserName, UserAvatar, StyledMenu, StyledMenuItem } from './StyledAvatar';
import { useNavigate } from 'react-router-dom';
import ListItemIcon from '@mui/material/ListItemIcon';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import userPhoto from '../../../../assets/images/userphoto.png';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import { useSelector } from 'react-redux';
import { AuthState } from '../../../../reducers/tokenReducer';

interface MyComponentProps {
  userInfo: {
    username: string;
    avatar: string;
  };
  onLogoutClick?: () => void;
}

const MyComponent: React.FC<MyComponentProps> = ({ userInfo, onLogoutClick }) => {
  const navigate = useNavigate();
  const uid = useSelector((state: AuthState) => state.auth.id);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <UserButton aria-controls="user-menu" aria-haspopup="true" onClick={handleClick}>
        <UserAvatar alt={userInfo.username} src={userInfo.avatar ? userInfo.avatar : userPhoto} />
        <UserName>{userInfo.username}</UserName>
        <ExpandMore />
      </UserButton>
      <StyledMenu
        disableScrollLock={true}
        id="user-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <StyledMenuItem
          onClick={() => {
            navigate(`/users/me/${uid}`);
          }}
        >
          <ListItemIcon>
            <PermContactCalendarIcon fontSize="small" />
          </ListItemIcon>
          My Profile
        </StyledMenuItem>
        <StyledMenuItem
          onClick={() => {
            navigate('/me/profile-setting');
          }}
        >
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          User Settings
        </StyledMenuItem>
        <StyledMenuItem onClick={onLogoutClick}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </StyledMenuItem>
      </StyledMenu>
    </>
  );
};

export default MyComponent;
