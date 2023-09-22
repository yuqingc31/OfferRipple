import styled from 'styled-components';
export const Div = styled.div`
  &.PageContentContainer {
    width: 100%;
    height: 100vh;
  }
  &.AdsSection {
    background: linear-gradient(to top right, #f85c70, #ffffff);
    height: 95vh;
  }
  &.CenterContainer {
    display: flex;
    flex-direction: column;
    width: 85%;
    margin: 0 auto;
  }
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
    /* 添加移动设备断点样式 */
    right: 20px;
    bottom: 20px;
  }
`;
