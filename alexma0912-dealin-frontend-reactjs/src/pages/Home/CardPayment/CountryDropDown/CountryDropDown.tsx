import worldCountries from 'world-countries';
import Select from 'react-select';
import { StyledLabel } from '../PaymentInputRow/styledPaymentInputRow';
import { customStyles } from './customCountryDropDown';

const CountryDropDown = () => {
  const options = worldCountries.map((country) => ({
    label: country.name.common,
    value: country.name.common,
  }));
  const defaultValue = { value: 'Australia', label: 'Australia' };

  return (
    <StyledLabel htmlFor="Country">
      Country
      <Select styles={customStyles} options={options} id="Country" defaultValue={defaultValue} />
    </StyledLabel>
  );
};

export default CountryDropDown;
