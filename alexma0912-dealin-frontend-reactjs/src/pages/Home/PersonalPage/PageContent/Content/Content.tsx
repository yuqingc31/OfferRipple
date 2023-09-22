import Lists from './Lists';
import { ListProps } from './Lists/Lists';
import Box from '@mui/material/Box';
import no_result from '../../../../../assets/images/no_result.png';
import { NoResult } from './styledContent';
import Img from 'react-cool-img';

const Content = ({ postLists }: ListProps) => {
  return (
    <Box>
      {postLists.length !== 0 ? (
        <Lists postLists={postLists} />
      ) : (
        <NoResult>
          <Img src={no_result} alt="No Result Found" />
          Oops! There is no post here..
        </NoResult>
      )}
    </Box>
  );
};

export default Content;
