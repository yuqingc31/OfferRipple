import PrevButton from './PrevButton';
import NextButton from './NextButton';
import { Div } from './styledBoardContainerPaginationList';
import { Dispatch, SetStateAction } from 'react';

export interface BoardContainerPaginationListProps {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  totalPages: number;
}

const BoardContainerPaginationList = ({
  page,
  setPage,
  totalPages,
}: BoardContainerPaginationListProps) => {
  return (
    <Div>
      <PrevButton page={page} setPage={setPage} totalPages={totalPages} />
      <span>page {page}</span>
      <NextButton page={page} setPage={setPage} totalPages={totalPages} />
    </Div>
  );
};

export default BoardContainerPaginationList;
