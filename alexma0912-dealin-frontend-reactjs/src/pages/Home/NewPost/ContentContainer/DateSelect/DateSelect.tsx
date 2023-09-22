import { Div, CustomDatePicker } from './styledDateSelect';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const DateSelect = ({ dateData }: { dateData: (inputData: Date | null) => void }) => {
  const handleDateChange = (date: any) => {
    dateData(date);
  };

  return (
    <Div className="dataSelectContainer">
      <Div>Expire Date:</Div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
          <CustomDatePicker onChange={handleDateChange} />
        </DemoContainer>
      </LocalizationProvider>
    </Div>
  );
};

export default DateSelect;
