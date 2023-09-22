import styled from 'styled-components';

export const StyledSideBar = styled.div`
  background-color: white;
  margin-top: 8rem;
  width: 400px;
  height: 35rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (max-width: 767px) {
    width: 100%;
    margin-top: 0;
    padding-bottom: 6rem;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 650px;
    margin-top: 0;
    padding-bottom: 6rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media (min-width: 1024px) {
  }
`;
