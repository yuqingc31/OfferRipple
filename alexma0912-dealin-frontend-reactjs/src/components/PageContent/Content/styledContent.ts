import styled from 'styled-components';

export const Div = styled.div`
  margin: 0 auto;
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 767px) {
    /* 添加移动设备断点样式 */
    width: 100%;
  }

  /* 平板电脑断点样式 */
  @media (min-width: 768px) and (max-width: 1023px) {
    /* 添加平板电脑断点样式 */
    width: 700px;
  }
`;

export const NoResult = styled.div`
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
