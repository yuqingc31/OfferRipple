import { Div, CustomTextField } from './styledTagInput';
import { useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';

const TagInput = ({ discountData }: { discountData: (inputData: number) => void }) => {
  const [titleInput, setTitleInput] = useState('');
  const [discountLimit, setDiscountLimit] = useState(false);

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const disNum = Number(e.target.value);
    if (disNum < 100) {
      setTitleInput(String(disNum));
      discountData(disNum);
      setDiscountLimit(false);
    } else {
      setDiscountLimit(true);
    }
  };
  return (
    <Div className="tagInputContainer">
      <Div>Discount: </Div>
      <CustomTextField
        label=""
        type="number"
        sx={{
          '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: discountLimit ? 'red' : '',
          },
        }}
        value={titleInput}
        InputProps={{
          inputProps: { min: 1, max: 100 },
          endAdornment: <InputAdornment position="end">% Off</InputAdornment>,
        }}
        id="outlined-size-normal"
        defaultValue={titleInput}
        onChange={handleOnchange}
        onKeyDown={(e) => {
          if (e.key === 'e' || e.key === 'E') {
            e.preventDefault();
          }
        }}
      />
    </Div>
  );
};

export default TagInput;
