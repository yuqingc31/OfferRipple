import { Div, CustomTextField } from './styledPostTitleInput';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { useEffect, useState } from 'react';

const PostTitleInput = ({
  titleInputData,
  titleValue,
}: {
  titleInputData: (inputData: string) => void;
  titleValue: string;
}) => {
  const [titleInput, setTitleInput] = useState<string>('');
  const [charLeft, setCharLeft] = useState(0);
  const [titleLimit, setTitleLimit] = useState(false);
  const titleLength = 100;

  useEffect(() => {
    const count = titleLength - titleInput.length;
    setCharLeft(count);
  }, [titleInput]);

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputWithoutSpaces = e.target.value.replace(/\s/g, '');
    if (inputWithoutSpaces.length <= titleLength) {
      titleInputData(e.target.value);
      setTitleInput(e.target.value);
      setTitleLimit(false);
    } else {
      setTitleLimit(true);
    }
  };
  return (
    <>
      <Div>Post Title:</Div>
      <CustomTextField
        sx={{
          '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: titleLimit ? 'red' : '',
          },
        }}
        label=""
        id="outlined-size-normal"
        onChange={handleOnchange}
        value={titleInput || titleValue}
      />
      <Box sx={{ width: '50%' }}>
        <LinearProgress variant="determinate" color="inherit" value={charLeft} />
        {titleLimit && (
          <Box
            sx={{
              color: 'red',
              position: 'absolute',
              zIndex: 9999,
              top: '62%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            Title input is limited to 100 characters.
          </Box>
        )}
      </Box>
    </>
  );
};

export default PostTitleInput;
