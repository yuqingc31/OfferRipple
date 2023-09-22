import Lists from './Lists';
import { Div, NoResult } from './styledContent';
import { ListProps } from './Lists/Lists';
import Pagination from '@mui/material/Pagination';
import { useState, useEffect, ChangeEvent } from 'react';
import no_result from '../../../assets/images/no_result.png';
import Img from 'react-cool-img';

const Content = ({ postList, totalPages, page, setPage }: ListProps) => {
  const [width, setWidth] = useState('600px');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 767) {
        setWidth('330px');
      } else if (window.innerWidth < 1024) {
        setWidth('600px');
      } else {
        setWidth('600px');
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePageChange = (event: ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  return (
    <Div>
      {postList.length !== 0 ? (
        <Lists postList={postList} totalPages={totalPages} page={page} setPage={setPage} />
      ) : (
        <NoResult>
          <Img src={no_result} alt="No Result Found" />
          Sorry, No Result Found
        </NoResult>
      )}
      <Pagination
        count={totalPages}
        size="large"
        siblingCount={0}
        style={{ width: width, height: '50px', margin: '20px 0 150px 0' }}
        page={page} // 设置当前选中页码
        onChange={handlePageChange} // 设置页码改变的回调函数
      />
    </Div>
  );
};

export default Content;
