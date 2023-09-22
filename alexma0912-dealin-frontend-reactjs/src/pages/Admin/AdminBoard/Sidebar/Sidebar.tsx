import { Div, Button } from './styledSidebar';
import Logo from './Logo';
import SideBarList from './SideBarList';
import { faUser, faList, faCommentDollar } from '@fortawesome/free-solid-svg-icons';
import { Dispatch, SetStateAction } from 'react';

export interface SidebarListProps {
  handleUserClick: () => void;
  handlePostClick: () => void;
  handleOrderClick: () => void;
  setPageTitle: Dispatch<SetStateAction<string>>;
}

const Sidebar = ({
  handleUserClick,
  handlePostClick,
  handleOrderClick,
  setPageTitle,
}: SidebarListProps) => {
  return (
    <Div>
      <Logo />
      <Button
        onClick={() => {
          handleUserClick();
          setPageTitle?.('User List');
        }}
      >
        <SideBarList text="User List" icon={faUser} />
      </Button>
      <Button
        onClick={() => {
          handlePostClick();
          setPageTitle?.('Post List');
        }}
      >
        <SideBarList text="Post List" icon={faList} />
      </Button>
      <Button
        onClick={() => {
          handleOrderClick();
          setPageTitle?.('Order List');
        }}
      >
        <SideBarList text="Order List" icon={faCommentDollar} />
      </Button>
    </Div>
  );
};

export default Sidebar;
