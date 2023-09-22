import styled from 'styled-components';

const CarouselContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  background-color: white;
  padding-top: 1rem;
  padding-bottom: 2rem;
  position: relative;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    border-radius: 0;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-bottom: 1rem;
    border-radius: 0;
  }

  @media (min-width: 1024px) and (max-width: 1339px) {
    margin-bottom: 2rem;
  }

  @media (min-width: 1440px) {
    margin-bottom: 2rem;
  }
`;

const RefImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export { CarouselContainer, RefImageContainer };
