import styled from 'styled-components';

export const Div = styled.div`
  width: 140px;
  text-align: left;
`;

export const Button = styled.button`
  width: 6.25rem;
  height: 1.875rem;
  border-radius: 0.9375rem;
  border: 0;
  cursor: pointer;
  &.deactiveBtn {
    background-color: lightgreen;
    border: 2px solid green;
    &:hover {
      background-color: green;
      color: white;
    }
  }
  &.reactiveBtn {
    background-color: lightsalmon;
    border: 2px solid brown;
    &:hover {
      background-color: salmon;
      color: white;
    }
  }
`;
