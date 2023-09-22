import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { Div } from './styledNotificationIcon';

const NotificationIcon = () => {
  return (
    <Div>
      <FontAwesomeIcon icon={faBell} />
    </Div>
  );
};

export default NotificationIcon;
