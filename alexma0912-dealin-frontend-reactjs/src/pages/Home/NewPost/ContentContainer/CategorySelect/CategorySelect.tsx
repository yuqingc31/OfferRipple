import { Div } from './styledCategorySelect';
// import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState, useEffect } from 'react';
import Select from '@mui/material/Select';
import CATAGORY_DATA from '../../../../../assets/Docs/CATAGORY_DATA';

const CategorySelect = ({ categoryData }: { categoryData: (inputData: string) => void }) => {
  const [filterSelect, setFilterSelect] = useState<string>('Food and Beverage');
  const [width, setWidth] = useState('30vw');

  const handleChange = (event: any) => {
    setFilterSelect(event.target.value);
    categoryData(event.target.value);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 767) {
        setWidth('80vw');
      } else if (window.innerWidth < 1024) {
        setWidth('40vw');
      } else {
        setWidth('30vw');
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Div className="dataSelectContainer">
      <Div className="title">Category:</Div>
      <Select
        style={{
          color: '#808080',
          opacity: '1',
          appearance: 'none',
          borderColor: '#e0e0e0',
          borderRadius: '15px',
          width: width,
        }}
        MenuProps={{
          disableScrollLock: true,
          style: {
            maxHeight: 300,
          },
        }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={filterSelect}
        onChange={handleChange}
      >
        {CATAGORY_DATA.map((data) => {
          return (
            <MenuItem key={data} value={data}>
              {data}
            </MenuItem>
          );
        })}
      </Select>
    </Div>
  );
};

export default CategorySelect;
