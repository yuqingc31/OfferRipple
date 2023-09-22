import BoardContainerHeader from './BoardContainerHeader';
import UserContent from './UserContent';
import PostContent from './PostContent';
import OrderContent from './OrderContent';
import { Div } from './styledBoardContainer';
import { Dispatch, SetStateAction } from 'react';

export interface BoardContainerProps {
  userClickCount: number;
  postClickCount: number;
  orderClickCount: number;
  handleUserClick?: () => void;
  handlePostClick?: () => void;
  handleOrderClick?: () => void;
  pageTitle: string;
  contentType?: string;
  adminName: string;
  setUserClickCount: Dispatch<SetStateAction<number>>;
  setPostClickCount: Dispatch<SetStateAction<number>>;
  setOrderClickCount: Dispatch<SetStateAction<number>>;
}

const BoardContainer = ({
  contentType,
  pageTitle,
  userClickCount,
  postClickCount,
  orderClickCount,
  adminName,
  setUserClickCount,
  setPostClickCount,
  setOrderClickCount,
}: BoardContainerProps) => {
  return (
    <Div>
      <BoardContainerHeader pageTitle={pageTitle} adminName={adminName} />
      {contentType === 'user' && (
        <UserContent
          userClickCount={userClickCount}
          postClickCount={postClickCount}
          orderClickCount={orderClickCount}
          setUserClickCount={setUserClickCount}
          setPostClickCount={setPostClickCount}
          setOrderClickCount={setOrderClickCount}
          pageTitle={pageTitle}
          adminName={adminName}
        />
      )}
      {contentType === 'post' && (
        <PostContent
          userClickCount={userClickCount}
          postClickCount={postClickCount}
          orderClickCount={orderClickCount}
          setUserClickCount={setUserClickCount}
          setPostClickCount={setPostClickCount}
          setOrderClickCount={setOrderClickCount}
          pageTitle={pageTitle}
          adminName={adminName}
        />
      )}
      {contentType === 'order' && (
        <OrderContent
          userClickCount={userClickCount}
          postClickCount={postClickCount}
          orderClickCount={orderClickCount}
          setUserClickCount={setUserClickCount}
          setPostClickCount={setPostClickCount}
          setOrderClickCount={setOrderClickCount}
          pageTitle={pageTitle}
          adminName={adminName}
        />
      )}
    </Div>
  );
};

export default BoardContainer;
