import { useState, CSSProperties } from 'react';
import { StyledPasswordLine, StyledPasswordInput } from './styledLoginForm';

type PasswordProps = {
  id: string;
  placeholder: string;
  value: string;
  onchange: (arg0: string) => void;
  styles: CSSProperties;
};

const Password = ({ id, placeholder, value, onchange, styles }: PasswordProps) => {
  const [showPassword] = useState(false);
  let ErrMsg = false;
  if (Object.keys(styles).length > 0) {
    ErrMsg = true;
  }
  return (
    <>
      <StyledPasswordLine style={styles}>
        <StyledPasswordInput
          type={showPassword ? 'text' : 'password'}
          id={id}
          placeholder={placeholder}
          required
          value={value}
          onChange={(e) => onchange(e.target.value)}
          ErrMsg={ErrMsg}
        />
      </StyledPasswordLine>
    </>
  );
};

export default Password;
