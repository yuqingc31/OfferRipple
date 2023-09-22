import styled from 'styled-components';

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
  z-index: 9999;
  &:hover {
    cursor: pointer;
    background-color: #000000;
  }
  @media (max-width: 767px) {
    /* 添加移动设备断点样式 */
    right: 85px;
    bottom: 20px;
  }
`;
