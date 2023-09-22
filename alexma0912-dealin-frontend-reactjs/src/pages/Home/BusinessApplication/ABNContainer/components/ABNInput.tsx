import { StyledABNInput } from './ABNRightForm/styledABNRightForm';

type ABNInputProps = {
  id: string;
  placeholder: string;
  required: boolean;
  handleOnChange: React.ChangeEventHandler<HTMLInputElement>;
  inputValue: string;
  invalidInput: boolean;
};

const ABNInput = ({
  id,
  placeholder,
  required,
  handleOnChange,
  inputValue,
  invalidInput,
}: ABNInputProps) => {
  return required ? (
    <StyledABNInput
      className={invalidInput ? `red-border` : ''}
      type="text"
      id={id}
      placeholder={placeholder}
      required
      onChange={handleOnChange}
      value={inputValue}
    />
  ) : (
    <StyledABNInput type="text" id={id} placeholder={placeholder} />
  );
};

export default ABNInput;
