import { ArrowIcon } from './styledFootPageScroll';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const FootPageScroll = () => {
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

export default FootPageScroll;
