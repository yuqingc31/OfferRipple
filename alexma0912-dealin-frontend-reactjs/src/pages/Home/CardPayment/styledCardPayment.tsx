import styled from 'styled-components';
import globalStyle from '../../../config/config';

const Div = styled.div`
  &.pageContainer {
    background-color: ${globalStyle.bgBlue};
    min-height: 100vh;
  }
  &.formContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6rem 8rem;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    @media (max-width: 768px) {
      padding: 6rem 1.5rem;
    }
  }
`;

const PaymentForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35rem;
  background-color: white;
  border: ${globalStyle.inputBorder};
  border-radius: 1rem;
  padding: 3rem 2rem;
`;

export { Div, PaymentForm };
