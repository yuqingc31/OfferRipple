import { AlertContainer, Closebtn } from './styledBusinessApplication';
import React from 'react';
type AlerProps = {
  style: React.CSSProperties;
  handleOnClick: () => void;
  message: string;
};
const Alert = ({ style, handleOnClick, message }: AlerProps) => {
  return (
    <AlertContainer className="alert" style={style}>
      <Closebtn className="closebtn" onClick={handleOnClick}>
        &times;
      </Closebtn>
      <strong>{message}</strong>
    </AlertContainer>
  );
};
export default Alert;
