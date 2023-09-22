import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.8rem;
  margin-bottom: 1.25rem;
  padding-bottom: 0.8rem;
  background-color: white;
`;

export const HeaderInfo = styled.div`
  &.headerInfo {
    display: flex;
    gap: 2.5rem;
    align-items: center;
    margin-right: 3.75rem;
  }
`;

export const AdminInfo = styled.div`
  &.adminInfo {
    display: flex;
    align-items: center;
    gap: 0.3125rem;
  }
`;
