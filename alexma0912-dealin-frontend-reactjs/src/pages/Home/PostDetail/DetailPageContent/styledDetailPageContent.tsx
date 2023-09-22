import styled from 'styled-components';

const PageContainer = styled.div`
  margin-top: 8rem;
  background-color: #fff7f8;
  display: flex;
  flex-direction: column;
  width: 650px;

  @media (max-width: 767px) {
    margin-top: 6rem;
    width: 100%;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-top: 6rem;
  }

  @media (min-width: 1024px) {
  }
`;
export { PageContainer };
