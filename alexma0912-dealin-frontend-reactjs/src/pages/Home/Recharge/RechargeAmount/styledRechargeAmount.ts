import styled from 'styled-components';
import TextField from '@mui/material/TextField';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  margin-bottom: 1rem;

  &.priceSection {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 60%;
    gap: 0;
  }
`;

const StyledLabel = styled.label`
  display: flex;
  white-space: nowrap;
  font-size: 1.1rem;
  font-weight: 700;
  justify-content: left;
  width: 100%;
`;

const StyledInput = styled(TextField)`
  width: 100%;

  .MuiOutlinedInput-root {
    border-color: #e0e0e0;
    border-radius: 15px;
    width: 100%;

    @media (max-width: 767px) {
      width: 100%;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
      width: 100%;
    }

    @media (min-width: 1024px) {
    }
  }

  .MuiInputLabel-root {
  }
`;

const StyledSpan = styled.span`
  display: block;
  white-space: nowrap;
  font-size: 1rem;
  font-weight: 700;
  text-align: left;
  width: 10rem;
`;

const Price = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.25rem 0;
  border: transparent;
  border-radius: 15px;
  width: 15rem;
  line-height: 3rem;
  font-size: 1rem;
  font-weight: 400;
`;
export { StyledContainer, StyledLabel, StyledInput, StyledSpan, Price };
