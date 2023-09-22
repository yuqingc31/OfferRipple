import { Div } from './styledPrevButton';
import { BoardContainerPaginationListProps } from '../BoardContainerPaginationList';

const PrevButton = ({ page, setPage }: BoardContainerPaginationListProps) => {
  return (
    <Div
      onClick={() => {
        setPage(page - 1);
      }}
      className={page === 1 ? 'deactive' : ''}
    >
      Prev
    </Div>
  );
};

export default PrevButton;
