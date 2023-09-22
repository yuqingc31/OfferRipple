import styled from 'styled-components';
import globalStyle from '../../../../config/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import creditCardImage from '../../../../assets/images/creditCardImage.png';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const StyledLabel = styled.label`
  font-size: 1.1rem;
  color: #6a6a6a;
  margin-bottom: 0.25rem;
  width: 100%;
  @media (max-width: 767px) {
    font-size: 1.25rem;
  }
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  padding: 0.25rem 0.5rem;
  border: ${globalStyle.inputBorder};
  border-radius: ${globalStyle.inputBorderRadius};
  width: 100%;
  line-height: 3rem;
  font-size: 1.1rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  :focus {
    outline: none;
    border: 1px solid #2971d3;
  }
  @media (max-width: 768px) {
    font-size: 1.25rem;
    line-height: 2rem;
    padding: 0.25rem 0.25rem;
  }
`;

const SecurePayment = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
`;

const CreditCardRow = styled.div`
  position: relative;
  display: inline-block;
`;

const CardIcon = styled.div`
  position: absolute;
  top: 33%;
  right: 10px;
  transform: translateY(-50%);
  width: 15rem;
  height: 3rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${creditCardImage});
  @media (max-width: 768px) {
    width: 7.5rem;
    height: 2rem;
  }
`;

const StyledCVCIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 35%;
  right: 0.25rem;
  transform: translateY(-50%);
  width: 5rem;
  height: 2.5rem;
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    width: 4rem;
    height: 1.75rem;
    right: 0;
    top: 32%;
  }
`;

export {
  StyledContainer,
  StyledLabel,
  StyledInput,
  SecurePayment,
  CreditCardRow,
  CardIcon,
  StyledCVCIcon,
};
