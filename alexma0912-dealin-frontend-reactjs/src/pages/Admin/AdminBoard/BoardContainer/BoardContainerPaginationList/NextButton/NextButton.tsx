import { Div } from './styledNextButton';
import { BoardContainerPaginationListProps } from '../BoardContainerPaginationList';

const NextButton = ({ page, setPage, totalPages }: BoardContainerPaginationListProps) => {
  return (
    <Div
      onClick={() => {
        setPage(page + 1);
      }}
      className={page === totalPages ? 'deactive' : ''}
    >
      Next
    </Div>
  );
};

export default NextButton;
