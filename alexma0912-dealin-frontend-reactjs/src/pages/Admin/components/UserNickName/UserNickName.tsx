import { Div } from './styledUserNickName';
export interface UserNickNameProps {
  className: string;
  adminName?: string;
  username?: string;
}

const UserNickName = ({ className, adminName, username }: UserNickNameProps) => {
  return (
    <>
      {className == 'user' ? (
        <Div className={className}>{username}</Div>
      ) : (
        <Div className={className}>{adminName}</Div>
      )}
    </>
  );
};

export default UserNickName;
