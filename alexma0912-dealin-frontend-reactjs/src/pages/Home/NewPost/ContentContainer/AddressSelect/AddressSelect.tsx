import { Div } from './styledAddressSelect';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import instance from '../../../../../utils/axios';

const AddressSelect = ({ addressData }: { addressData: (inputData: string | null) => void }) => {
  const [width, setWidth] = useState('30vw');
  const [addressChoices, setAddressChoices] = useState([]);
  const [inputError, setInputError] = useState(false);
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
  const handleOnchange = async (_: React.SyntheticEvent, e: string | null) => {
    const inputAddress = e;
    instance.defaults.headers.common['Content-Type'] = 'application/json';
    try {
      const res = await instance.get(`/addressAutoComplete?input=${inputAddress}}`);
      const data = res.data;
      setAddressChoices(data);
    } catch (error: any) {
      console.log(error.message);
    }
    addressData(inputAddress);
  };
  const handleFilterOptions = (addressChoices: string[], { inputValue }: any) => {
    if (inputValue === '') {
      setInputError(false);
      return addressChoices;
    }
    const matchedOptions = addressChoices.filter((addressChoices) =>
      addressChoices.toLowerCase().includes(inputValue.toLowerCase())
    );
    if (matchedOptions.length === 0) {
      setInputError(true);
      return ['Please Select from Address Options'];
    }
    setInputError(false);
    return matchedOptions;
  };
  return (
    <Div className="dataSelectContainer">
      <Div className="title">Address:</Div>
      <Autocomplete
        style={{
          height: '3.5rem',
          width: width,
          borderColor: '#e0e0e0',
          opacity: '1',
          appearance: 'none',
        }}
        filterOptions={handleFilterOptions}
        onInputChange={handleOnchange}
        disablePortal
        id="combo-box-demo"
        options={addressChoices}
        ListboxProps={{ style: { maxHeight: '12rem' } }}
        renderInput={(params) => (
          <TextField
            error={inputError}
            placeholder="Enter address to find"
            {...params}
            sx={{
              input: {
                color: '#808080',
              },
              fieldset: {
                borderRadius: '15px',
              },
            }}
          />
        )}
      />
    </Div>
  );
};

export default AddressSelect;
