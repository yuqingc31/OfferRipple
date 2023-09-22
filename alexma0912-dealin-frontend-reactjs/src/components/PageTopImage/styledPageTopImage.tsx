import styled from 'styled-components';
import postImg from '../../assets/images/postImg.jpeg';

export const Div = styled.div`
  &.headImg {
    margin-top: 5rem;
    height: 500px;
    position: relative;
    background-image: url(${postImg});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 500px;
      background-color: rgb(0, 0, 0, 0.6);
      z-index: 99;
    }
  }
  &.headText {
    width: 100%;
    height: 100%;
    color: white;
    position: absolute;
    z-index: 99;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const P = styled.p`
  &.lgText {
    font-size: 30px;
    font-weight: bolder;
    margin: 0;
    text-align: center;
  }
  &.smText {
    font-size: 20px;
    margin: 1rem;
    text-align: center;
  }

  @media (max-width: 767px) {
    /* 添加移动设备断点样式 */
    &.lgText {
      font-size: 28px;
      font-weight: bolder;
      margin: 0;
    }
    &.smText {
      font-size: 18px;
      margin: 1rem;
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
