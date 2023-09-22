import styled from 'styled-components';

export const PlayerContainer = styled.div`
  margin-bottom: 2rem;
  @media (max-width: 767px) {
    /* 添加移动设备断点样式 */
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  /* 平板电脑断点样式 */
  @media (min-width: 768px) and (max-width: 1023px) {
    /* 添加平板电脑断点样式 */
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;
