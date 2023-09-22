import { useState, useEffect } from 'react';
import { ListItem } from './ListTypes';
import { ListContainer } from './Lists.styles';
import PostList from './PostList';
import Pagination from '@mui/material/Pagination';
export interface ListProps {
  postLists: ListItem[];
}

const Lists = ({ postLists }: ListProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setCount] = useState(10);
  const [width, setWidth] = useState('600px');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 767) {
        setCount(4);
        setWidth('300px');
      } else if (window.innerWidth < 1024) {
        setCount(8);
        setWidth('600px');
      } else {
        setCount(10);
        setWidth('600px');
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = postLists.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, [postLists]);

  return (
    <>
      <ListContainer>
        {currentItems.map((item) => (
          <PostList key={item.id} item={item} />
        ))}
      </ListContainer>
      <Pagination
        count={Math.ceil(postLists.length / itemsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        size="large"
        style={{ width: width, height: '50px', margin: '20px 0 150px 0' }}
      />
    </>
  );
};

export default Lists;
