import styled from 'styled-components';

export const Div = styled.div`
  overflow: hidden;
  width: 2.188rem;
  height: 2.188rem;
  &.user {
    border-radius: 50%;
    position: relative;
  }
  &.admin {
    border-radius: 50%;
    position: relative;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
  }
`;
