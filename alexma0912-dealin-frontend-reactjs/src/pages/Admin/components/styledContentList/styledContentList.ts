import styled from 'styled-components';

export const Div = styled.div`
  &.listContainer {
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: left;
    font-size: 0.813rem;
    border-bottom: 1px solid lightgray;
    gap: 30px;

    &:hover {
      background-color: rgba(193, 206, 217, 0.5);
    }

    @media (min-width: 1500px) {
      height: 68px;
    }
  }
  &.userMeta {
    display: flex;
    align-items: center;
    justify-content: left;
    width: 260px;
    gap: 0.3125rem;
    border-bottom: none;
    margin-left: 3rem;
  }
`;
