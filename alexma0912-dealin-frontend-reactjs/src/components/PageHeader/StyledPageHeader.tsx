import styled from 'styled-components';

export const PageHeaderContainer = styled.nav<{ isLoggedIn: boolean }>`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: no-wrap;
  background-color: #fbfdff;
  width: 100%;
  z-index: 999;
  padding: 0 2.5rem;
  @media (max-width: 767px) {
    display: ${(props) => (props.isLoggedIn ? 'block' : 'flex')};
    position: absolute;
  }
`;

export const LeftContainer = styled.div<{ isLoggedIn: boolean }>`
  position: relative;
  padding: 1.1rem 0;
  @media (max-width: 767px) {
    padding: ${(props) => (props.isLoggedIn ? '0.5rem 0 0.2rem 0' : '1.5rem 0')};
  }
`;

// export const CenterContainer = styled.div`
//   flex: 1 auto;
//   display: flex;
//   align-items: center;
//   display: flex;
//   align-items: center;
// `;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: 2rem;
  padding: 1.2rem 0;
  @media (max-width: 767px) {
    margin-left: 0;
    padding: 0.5rem 0 0.5rem 0;
    justify-content: space-between;
    padding: 0;
  }
`;
