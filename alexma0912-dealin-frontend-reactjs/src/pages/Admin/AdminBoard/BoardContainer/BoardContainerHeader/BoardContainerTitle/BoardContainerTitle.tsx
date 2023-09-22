import { Div } from './styledBoardContainerTitle';
export interface BoardContainerTitleProps {
  pageTitle: string;
}

const BoardContainerTitle = ({ pageTitle }: BoardContainerTitleProps) => {
  return <Div>{pageTitle}</Div>;
};

export default BoardContainerTitle;
