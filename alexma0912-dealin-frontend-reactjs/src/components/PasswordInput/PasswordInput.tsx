import { Div, CustomTextField } from './styledPasswordInput';
import { CSSProperties } from 'react';

type PasswordProps = {
  placeholder: string;
  value: string;
  required: boolean;
  setPassword: (arg0: string) => void;
  styles: CSSProperties;
};

const PasswordInput = ({ placeholder, value, setPassword, styles }: PasswordProps) => {
  let ErrMsg = false;
  if (Object.keys(styles).length > 0) {
    ErrMsg = true;
  }

  return (
    <Div style={styles}>
      <CustomTextField
        type="password"
        placeholder={placeholder}
        value={value}
        required
        onChange={(e) => setPassword(e.target.value)}
        ErrMsg={ErrMsg}
      />
    </Div>
  );
};

export default PasswordInput;
