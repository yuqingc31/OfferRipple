import styled from 'styled-components';
import Badge from '@mui/material/Badge';

export const NotificationBadge = styled(Badge)`
  margin-right: 2rem;
  cursor: pointer;
`;

export const NotificationsIconWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: transparent;
  border-radius: 100%;
  width: 2.4rem;
  height: 2.4rem;
  background: #ffffff;
  box-shadow: 0 0.1rem 0.38rem 0 rgba(0, 0, 0, 0.1);
  opacity: 1;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;
