import UserProfilePhoto from '../../../../components/UserProfilePhoto';
import UserNickName from '../../../../components/UserNickName';
import Email from '../../../../../../components/Email';
import Dcoins from '../../../../components/Dcoins';
import CreateDate from '../../../../components/CreateDate';
import ActionButton from '../../../../components/ActionButton';
import { Div } from '../../../../components/styledContentList/styledContentList';
import { UserType } from '../UserContent';
import { Dispatch, SetStateAction } from 'react';

export interface UserContentListProps {
  user: UserType;
  userClickCount: number;
  setUserClickCount: Dispatch<SetStateAction<number>>;
}

const UserContentList = ({ user, setUserClickCount, userClickCount }: UserContentListProps) => {
  const {
    id,
    avatar,
    created_at,
    dcoin,
    email,
    is_deactivate,
    // updated_at,
    username,
    // phone_number,
  } = user;
  return (
    <Div className="listContainer">
      {/* <ID /> */}
      <Div className="userMeta">
        <UserProfilePhoto className="user" avatar={avatar} />
        <UserNickName className="user" username={username} />
      </Div>
      <Email email={email} />
      <Dcoins dcoin={dcoin} />
      {/* <ABN /> */}
      <CreateDate created_at={created_at} />
      <ActionButton
        is_deactivate={is_deactivate}
        id={id}
        userClickCount={userClickCount}
        setUserClickCount={setUserClickCount}
      />
    </Div>
  );
};

export default UserContentList;
