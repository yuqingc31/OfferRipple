import styled from 'styled-components';

export const Div = styled.div`
  width: 90%;
  min-height: 520px;
  background-color: white;
  margin: 0 auto;
  border-radius: 0.625rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 5px 5px rgba(0, 0, 0, 0.1);

  &.ListContainer {
    width: 100%;
    height: 520px;
    box-shadow: none;
  }

  @media (min-width: 1500px) {
    min-height: 700px;

    &.ListContainer {
      height: 700px;
    }
  }
`;

export const NoResult = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
