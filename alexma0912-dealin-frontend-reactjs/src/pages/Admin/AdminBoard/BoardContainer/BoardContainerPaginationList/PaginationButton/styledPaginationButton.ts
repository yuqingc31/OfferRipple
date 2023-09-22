import styled from 'styled-components';

export const Div = styled.div`
  font-size: 15px;
  height: 2.5rem;
  line-height: 2.5rem;
  width: 50px;
  background-color: lightgray;
  border-left: 1px solid white;
  &:hover {
    cursor: pointer;
    background-color: grey;
    color: white;
  }
`;
