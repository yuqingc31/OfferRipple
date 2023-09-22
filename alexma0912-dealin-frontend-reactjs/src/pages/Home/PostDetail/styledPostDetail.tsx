import styled from 'styled-components';

const PostDetailContainer = styled.div`
  background-color: #fff7f8;
  /* width: 100vw;
  height: 100vh; */
`;

const PostDetailContent = styled.div`
  display: flex;
  justify-content: center;
  /* flex-wrap: wrap; */
  gap: 2rem;
  width: 75%;
  margin: 0 auto;
  margin-bottom: 5rem;
  margin-top: 1rem;
  @media (max-width: 767px) {
    /* 添加移动设备断点样式 */
    width: 100%;
    font-size: 1rem;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0;
  }

  /* 平板电脑断点样式 */
  @media (min-width: 768px) and (max-width: 1023px) {
    /* 添加平板电脑断点样式 */
    width: 100%;
    font-size: 1rem;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0;
  }

  /* 桌面断点样式 */
  @media (min-width: 1024px) {
    /* 添加桌面断点样式 */
  }
`;

export { PostDetailContainer, PostDetailContent };
