import styled from 'styled-components';
import postImg from '../../../assets/images/postImg.jpeg';

const StyledViewBody = styled.div`
  background-image: url(${postImg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCardBody = styled.div`
  background-color: #fff;
  width: 25rem;
  height: 30rem;
  border-radius: 0.25rem;
  box-shadow: 0 1rem 5rem rgba(0, 0, 0, 0.5);
  border-radius: 1rem;
  padding: 1.25rem 2rem 1.25rem 2rem;
  box-sizing: border-box;
`;

export { StyledViewBody, StyledCardBody };
