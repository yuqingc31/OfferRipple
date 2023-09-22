import { AlertContainer, Closebtn } from './styledContentContainer';
import React from 'react';
type AlertProps = {
  style: React.CSSProperties;
  handleOnClick: () => void;
  message: string;
};
const Alert = ({ style, handleOnClick, message }: AlertProps) => {
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
