import styled from 'styled-components';

export const Div = styled.div`
  font-size: 15px;
  height: 1.5rem;
  line-height: 1.5rem;
  padding: 0 20px;
  border-radius: 10px 0 0 10px;
  background-color: gray;
  color: white;
  &:hover {
    cursor: pointer;
    background-color: rgb(9, 5, 36);
  }

  &.deactive {
    display: none;
  }
`;
