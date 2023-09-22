import { Div, CustomTextField } from './styledEmailInput';
import { Dispatch, SetStateAction, CSSProperties } from 'react';

type EmailProps = {
  value: string;
  required: boolean;
  setEmail: Dispatch<SetStateAction<string>>;
  styles: CSSProperties;
};

const EmailInput = ({ value, setEmail, styles }: EmailProps) => {
  let ErrMsg = false;
  if (Object.keys(styles).length > 0) {
    ErrMsg = true;
  }

  return (
    <Div style={styles}>
      <CustomTextField
        type="text"
        id="email"
        placeholder="Email"
        value={value}
        required
        onChange={(e) => setEmail(e.target.value)}
        ErrMsg={ErrMsg}
      />
    </Div>
  );
};

export default EmailInput;
