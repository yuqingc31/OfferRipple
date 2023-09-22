import styled from 'styled-components';
import globalStyle from '../../../../../../config/config';

const StyledABNRightForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  &.red-border::before {
    content: 'ABN Should Be an 11-digit Number';
    color: red;
    font-weight: 500;
    position: absolute;
    top: -20%;
    z-index: 9999;
  }
`;

const StyledABNInput = styled.input`
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  flex: 1;
  border: 1px solid #2971d3;
  font-size: 1.15rem;
  font-weight: 400;
  width: 24rem;
  line-height: 1.5rem;
  color: black;
  background-color: #fff;
  background-clip: padding-box;
  border-radius: ${globalStyle.inputBorderRadius};
  @media (max-width: 415px) {
    width: 15rem;
  }
  &.red-border:focus {
    outline: none;
    border-color: red;
  }
`;

const StyledButton = styled.button`
  box-sizing: border-box;
  padding: 0.75rem 1rem;
  flex: 1;
  border: none;
  border-radius: ${globalStyle.inputBorderRadius};
  font-size: 1rem;
  width: 24rem;
  line-height: 1.5rem;
  color: #495057;
  background-color: ${globalStyle.bgButtonBlue};
  background-clip: padding-box;
  color: white;
  margin-top: 2.5rem;
  transition: transform 0.1s;
  @media (max-width: 415px) {
    width: 15rem;
  }
  :hover {
    cursor: pointer;
  }
  :active {
    transform: scale(1.03);
  }
`;

export { StyledABNRightForm, StyledABNInput, StyledButton };
