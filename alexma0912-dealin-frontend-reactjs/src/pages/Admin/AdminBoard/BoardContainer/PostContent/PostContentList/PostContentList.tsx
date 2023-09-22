import CreateDate from '../../../../components/CreateDate';
import PostActionButton from '../../../../components/PostActionButton';
import PostTitle from './PostTitle';
import Category from './Category';
import ExpireDate from './ExpireDate';
import { Div } from '../../../../components/styledContentList/styledContentList';
import { PostType } from '../PostContent';
import { Dispatch, SetStateAction } from 'react';

export interface PostContentListProps {
  post: PostType;
  postClickCount: number;
  setPostClickCount: Dispatch<SetStateAction<number>>;
}

const PostContentList = ({ post, postClickCount, setPostClickCount }: PostContentListProps) => {
  const { _id, title, created_at, promotion_end_date, category, banned } = post;

  return (
    <Div className="listContainer">
      <PostTitle title={title} />
      <Category category={category} />
      <CreateDate created_at={created_at} />
      <ExpireDate promotion_end_date={promotion_end_date} />
      <PostActionButton
        banned={banned}
        id={_id}
        postClickCount={postClickCount}
        setPostClickCount={setPostClickCount}
      />
    </Div>
  );
};

export default PostContentList;
