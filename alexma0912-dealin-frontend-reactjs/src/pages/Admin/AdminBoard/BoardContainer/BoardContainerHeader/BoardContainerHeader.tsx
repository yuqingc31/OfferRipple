import BoardContainerTitle from './BoardContainerTitle';
import UserProfilePhoto from '../../../components/UserProfilePhoto';
import UserNickName from '../../../components/UserNickName';
import { Div, HeaderInfo, AdminInfo } from './styledBoardContainerHeader';
import LogoutIcon from './LogoutIcon';
export interface BoardContainerHeaderProps {
  pageTitle: string;
  adminName: string;
}

const BoardContainerHeader = ({ pageTitle, adminName }: BoardContainerHeaderProps) => {
  return (
    <Div>
      <BoardContainerTitle pageTitle={pageTitle} />
      <HeaderInfo className="headerInfo">
        <AdminInfo className="adminInfo">
          <UserProfilePhoto className="admin" />
          <UserNickName className="admin" adminName={adminName} />
        </AdminInfo>
        <LogoutIcon />
      </HeaderInfo>
    </Div>
  );
};

export default BoardContainerHeader;
