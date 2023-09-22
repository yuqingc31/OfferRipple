import { StyledFormLine, StyledUsernameInput } from './styledLoginForm';
import { CSSProperties } from 'react';

type TextInputProps = {
  id: string;
  placeholder: string;
  value: string;
  required: boolean;
  onchange: (arg0: string) => void;
  styles: CSSProperties;
};

const TextInput = ({ id, placeholder, value, required, onchange, styles }: TextInputProps) => {
  let ErrMsg = false;
  if (Object.keys(styles).length > 0) {
    ErrMsg = true;
  }
  return required ? (
    <StyledFormLine style={styles}>
      <StyledUsernameInput
        type="text"
        id={id}
        placeholder={placeholder}
        value={value}
        required
        onChange={(e) => onchange(e.target.value)}
        ErrMsg={ErrMsg}
      />
    </StyledFormLine>
  ) : (
    <StyledFormLine style={styles}>
      <StyledUsernameInput
        type="text"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onchange(e.target.value)}
        ErrMsg={ErrMsg}
      />
    </StyledFormLine>
  );
};

export default TextInput;
