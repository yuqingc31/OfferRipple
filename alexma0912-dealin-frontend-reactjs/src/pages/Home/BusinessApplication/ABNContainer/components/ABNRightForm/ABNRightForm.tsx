import { StyledABNRightForm } from './styledABNRightForm';
import ABNInput from '../ABNInput';
import SubmitButton from '../SubmitButton';

type ABNRightFormProps = {
  target: string;
  method: string;
  SubmitHandler: any;
  abnHandleOnChange: any;
  invalidInput: boolean;
  abnNumber: any;
};

const ABNRightForm = ({
  target,
  method,
  SubmitHandler,
  abnHandleOnChange,
  invalidInput,
  abnNumber,
}: ABNRightFormProps) => {
  return (
    <form onSubmit={(event) => SubmitHandler(event, target, method)}>
      <StyledABNRightForm className={invalidInput ? `red-border` : ''}>
        <ABNInput
          id="abn"
          placeholder="ABN"
          required
          handleOnChange={abnHandleOnChange}
          inputValue={abnNumber.abn}
          invalidInput={invalidInput}
        />
        <SubmitButton text="Submit Now" invalidInput={invalidInput} />
      </StyledABNRightForm>
    </form>
  );
};

export default ABNRightForm;
