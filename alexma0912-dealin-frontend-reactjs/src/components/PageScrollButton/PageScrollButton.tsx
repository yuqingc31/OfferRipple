import { ArrowIcon } from './styledPageScrollButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const PageScrollButton = () => {
  return (
    <ArrowIcon
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }}
    >
      <ArrowUpwardIcon sx={{ fontSize: '32px' }} />
    </ArrowIcon>
  );
};

export default PageScrollButton;
