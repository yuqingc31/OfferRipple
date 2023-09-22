import { Div } from './styledPostTitle';

export interface PostTitleProps {
  title: string;
}

const PostTitle = ({ title }: PostTitleProps) => {
  return <Div>{title}</Div>;
};

export default PostTitle;
