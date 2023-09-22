import { Div, CustomTextField } from './styledPostContentInput';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { useEffect, useState } from 'react';

const PostContentInput = ({
  contentInputData,
  contentValue,
}: {
  contentInputData: (inputData: string) => void;
  contentValue: string;
}) => {
  const [rows, setRows] = useState(20);
  const [contentInput, setContentInput] = useState('');
  const [charLeft, setCharLeft] = useState(0);
  const [contentLimit, setContentLimit] = useState(false);
  const titleLength = 1000;

  useEffect(() => {
    const count = (titleLength - contentInput.length) * 0.1;
    setCharLeft(count);
  }, [contentInput]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 767) {
        setRows(10);
      } else if (window.innerWidth < 1024) {
        setRows(15);
      } else {
        setRows(20);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputWithoutSpaces = e.target.value.replace(/\s/g, '');
    if (inputWithoutSpaces.length <= titleLength) {
      setContentInput(e.target.value);
      contentInputData(e.target.value);
      setContentLimit(false);
    } else {
      setContentLimit(true);
    }
  };

  return (
    <>
      <Div>Post Details:</Div>
      <CustomTextField
        sx={{
          '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: contentLimit ? 'red' : '',
          },
        }}
        label=""
        variant="outlined"
        multiline
        rows={rows}
        onChange={handleOnchange}
        value={contentInput || contentValue}
      />
      <Box sx={{ width: '50%' }}>
        <LinearProgress variant="determinate" color="inherit" value={charLeft} />
        {contentLimit && (
          <Box
            sx={{
              color: 'red',
              position: 'absolute',
              zIndex: 9999,
              top: '121%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            Post content input is limited to 1000 characters.
          </Box>
        )}
      </Box>
    </>
  );
};

export default PostContentInput;
