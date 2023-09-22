import styled from 'styled-components';

export const Div = styled.div`
  width: 100%;
`;

export const NoResult = styled.div`
  color: #1e293b;
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  @media (max-width: 767px) {
    /* 添加移动设备断点样式 */
    font-size: 1rem;
  }
`;
