import styled from 'styled-components';

const DescriptionContainer = styled.div`
  background-color: white;
  padding-top: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 2rem;
  position: relative;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);

  h3 {
    margin-bottom: 1rem;
  }

  pre {
    max-width: 600px;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  @media (max-width: 767px) {
    border-radius: 0;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    border-radius: 0;
    padding-left: 4rem;
    padding-right: 4rem;
  }

  @media (min-width: 1024px) {
  }
`;
export { DescriptionContainer };
