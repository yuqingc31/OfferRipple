import styled from 'styled-components';

export const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ArrowIcon = styled.div`
  background-color: #f85c70;
  width: 60px;
  height: 70px;
  position: fixed;
  bottom: 40px;
  right: 40px;
  text-align: center;
  line-height: 70px;
  color: white;
  font-size: 2rem;
  transition: all 0.5s ease;
  z-index: 999;
  &:hover {
    cursor: pointer;
    background-color: #000000;
  }
  @media (max-width: 767px) {
    bottom: 20px;
  }
`;
