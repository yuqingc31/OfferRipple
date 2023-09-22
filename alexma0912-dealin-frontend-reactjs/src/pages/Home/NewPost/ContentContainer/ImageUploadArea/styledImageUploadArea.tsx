import styled from 'styled-components';

export const Div = styled.div`
  &.uploadDropzoneContainer {
    background-color: #f85c7121;
    width: 60vw;
    margin-top: 3rem;
    border-radius: 15px;
  }
  @media (max-width: 767px) {
    /* 添加移动设备断点样式 */
    &.uploadDropzoneContainer {
      width: 80vw;
    }
  }

  /* 平板电脑断点样式 */
  @media (min-width: 768px) and (max-width: 1023px) {
    /* 添加平板电脑断点样式 */
  }

  /* 桌面断点样式 */
  @media (min-width: 1024px) {
    /* 添加桌面断点样式 */
  }
`;

export const UploadImageContainer = styled.div`
  background-color: #ffeced;
  margin-top: 30px;
  width: 60vw;
  padding: 20px;
  border-radius: 20px;
  box-sizing: border-box;
  @media (max-width: 767px) {
    width: 80vw;
  }
`;

export const UploadImageCard = styled.div`
  border: 2px dotted rgb(128, 128, 128);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const UploadImageWrapper = styled.div`
  padding: 20px;
`;

export const UploadImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  @media (max-width: 360px) {
    width: 160px;
    height: 160px;
  }
`;
