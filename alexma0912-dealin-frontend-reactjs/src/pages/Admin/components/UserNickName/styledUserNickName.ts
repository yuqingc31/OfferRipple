import styled from 'styled-components';

export const Div = styled.div`
  &.user {
    font-size: 0.875rem;
    margin-left: 5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 220px;
    &:hover {
      cursor: pointer;
    }
  }
  &.admin {
    font-size: 0.9rem;
  }
`;
