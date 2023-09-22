import { useState, useEffect } from 'react';
import Content from './Content';
import { ArrowIcon } from './PageContent.styles';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { FilterBarProps } from './FilterBar/FilterBar';
import PageFooter from '../../components/PageFooter';
import ContentLoading from '../ContentLoading/ContentLoading';

const PageContent = ({
  loaded,
  setSearched,
  totalPages,
  postList,
  page,
  setPage,
}: FilterBarProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition < 200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div>
        {loaded ? (
          <Content totalPages={totalPages} page={page} setPage={setPage} postList={postList} />
        ) : (
          <ContentLoading />
        )}
        {isVisible && (
          <ArrowIcon
            onClick={() => {
              setSearched(false);
            }}
          >
            <ArrowUpwardIcon sx={{ fontSize: '30px' }} />
          </ArrowIcon>
        )}
      </div>
      <PageFooter />
    </div>
  );
};

export default PageContent;
