import styled from 'styled-components';
import globalStyle from '../../../../config/config';
import TextField from '@mui/material/TextField';

interface StyledUsernameInput extends React.InputHTMLAttributes<HTMLInputElement> {
  ErrMsg?: boolean;
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledFormLine = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const StyledPasswordLine = styled(StyledFormLine)`
  flex-direction: row;
  align-items: center;
`;

const StyledButtonLine = styled(StyledFormLine)`
  border: none;
`;

const BaseUsernameInput = styled(TextField)`
  .MuiOutlinedInput-root {
    border: none;
    color: #495057;
    background-color: #fff;
    border-radius: ${globalStyle.inputBorderRadius};
    &:focus {
      outline: none;
    }
  }
`;

const StyledUsernameInput = styled(BaseUsernameInput)<StyledUsernameInput>`
  ${(props) =>
    props.ErrMsg &&
    `
      ::placeholder {
        color: red;
    }`}
`;

const StyledPasswordInput = styled(StyledUsernameInput)<StyledUsernameInput>`
  flex-grow: 1;
  width: 100%;
  ${(props) =>
    props.ErrMsg &&
    `
      ::placeholder {
        color: red;
    }`}
`;

const StyledButton = styled.button`
  padding: 0.75rem 1rem;
  border: none;
  border-radius: ${globalStyle.inputBorderRadius};
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #f85c70;
  background-clip: padding-box;
  color: white;
  margin: 3rem 0;
  transition: all 0.5s;
  &:hover {
    cursor: pointer;
    background-color: black;
  }
`;

const StyledAlert = styled.div`
  color: transparent;
  text-align: center;
  font-size: 14px;
  &.alert {
    color: red;
  }
`;

export {
  StyledDiv,
  StyledFormLine,
  StyledPasswordLine,
  StyledButtonLine,
  StyledUsernameInput,
  StyledPasswordInput,
  StyledButton,
  StyledAlert,
};
