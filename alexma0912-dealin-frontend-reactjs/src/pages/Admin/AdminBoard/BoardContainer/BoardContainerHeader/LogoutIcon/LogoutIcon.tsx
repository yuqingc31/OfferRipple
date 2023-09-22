import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { Div } from './styledLogoutIcon';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../../../../../reducers/tokenReducer';

const LogoutIcon = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(LOGOUT());
  };

  return (
    <Div
      onClick={() => {
        handleLogout();
        navigate('/admin/login');
      }}
    >
      <FontAwesomeIcon icon={faSignOut} />
    </Div>
  );
};

export default LogoutIcon;
