import { useState } from 'react';
import { Drawer, IconButton, List, ListItemIcon } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router';
import { Div } from './StyledDrawerComp';
import { useSelector } from 'react-redux';
import { AuthState } from '../../../../reducers/tokenReducer';

interface DrawerCompProps {
  coins: number;
  onLogoutClick?: () => void;
}

const DrawerComp = ({ coins, onLogoutClick }: DrawerCompProps) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();
  const uid = useSelector((state: AuthState) => state.auth.id);

  return (
    <>
      <Drawer disableScrollLock={true} open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List sx={{ backgroundColor: '#061a3a', height: '100%' }}>
          <Div className="logo">OfferRipple</Div>
          <Div className="slogan">Know your local deals</Div>
          <ListItemButton onClick={() => navigate(`/users/me/${uid}`)}>
            <ListItemIcon>
              <ListItemText
                sx={{
                  width: '250px',
                  fontSize: '1rem',
                  paddingLeft: '1rem',
                  paddingTop: '0.5rem',
                  paddingBottom: '0.5rem',
                  color: 'white',
                  borderBottom: '1px solid #045a8b',
                }}
              >
                MY PROFILE
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
          {/* <ListItemButton>
            <ListItemIcon>
              <ListItemText
                sx={{
                  width: '250px',
                  fontSize: '1rem',
                  paddingLeft: '1rem',
                  paddingTop: '0.5rem',
                  paddingBottom: '0.5rem',
                  color: 'white',
                  borderBottom: '1px solid #045a8b',
                }}
              >
                NOTIFICATION
              </ListItemText>
            </ListItemIcon>
          </ListItemButton> */}
          <ListItemButton onClick={() => navigate('/recharge')}>
            <ListItemIcon>
              <ListItemText
                sx={{
                  width: '250px',
                  fontSize: '1rem',
                  paddingLeft: '1rem',
                  paddingTop: '0.5rem',
                  paddingBottom: '0.5rem',
                  color: 'white',
                  borderBottom: '1px solid #045a8b',
                }}
              >
                COINS: {coins}
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton onClick={() => navigate('/me/profile-setting')}>
            <ListItemIcon>
              <ListItemText
                sx={{
                  width: '250px',
                  fontSize: '1rem',
                  paddingLeft: '1rem',
                  paddingTop: '0.5rem',
                  paddingBottom: '0.5rem',
                  color: 'white',
                  borderBottom: '1px solid #045a8b',
                }}
              >
                USER SETTINGS
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton onClick={onLogoutClick}>
            <ListItemIcon>
              <ListItemText
                sx={{
                  width: '250px',
                  fontSize: '1rem',
                  paddingLeft: '1rem',
                  paddingTop: '0.5rem',
                  paddingBottom: '0.5rem',
                  color: 'white',
                  borderBottom: '1px solid #045a8b',
                }}
              >
                LOGOUT
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon fontSize="large" />
      </IconButton>
    </>
  );
};

export default DrawerComp;
