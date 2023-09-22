import styled from 'styled-components';

export const Div = styled.div`
  background-color: #090524;
  height: 100vh;
  min-width: 200px;
`;

export const Button = styled.button`
  background-color: #090524;
  width: 160px;
  padding: 20px 0;
  display: block;
  border: none;
  &:hover {
    border-bottom: 1px solid white;
    cursor: pointer;
  }
`;
