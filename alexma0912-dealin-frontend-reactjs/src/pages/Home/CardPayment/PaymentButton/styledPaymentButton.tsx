import styled from 'styled-components';
import globalStyle from '../../../../config/config';

const StyledButton = styled.button`
  box-sizing: border-box;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: ${globalStyle.inputBorderRadius};
  font-size: 1.1rem;
  width: 100%;
  line-height: 3rem;
  background-color: ${globalStyle.bgButtonBlue};
  color: white;
  margin-top: 1.5rem;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 1.25rem;
    line-height: 2.5rem;
    padding: 0.25rem 0.25rem;
  }
`;
export { StyledButton };
