import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { NotificationBadge, NotificationsIconWrapper } from './styledNotification';

interface NotificationProps {
  NotificationCount?: number;
}

const Notification: React.FC<NotificationProps> = ({ NotificationCount }) => {
  return (
    <>
      <NotificationBadge badgeContent={NotificationCount} color="primary">
        <NotificationsIconWrapper>
          <NotificationsNoneIcon sx={{ color: '#f85c70' }} />
        </NotificationsIconWrapper>
      </NotificationBadge>
    </>
  );
};

export default Notification;
