import styled from 'styled-components';

export const Div = styled.div`
  &.postSubmitContainer {
    width: 40vw;
    border: none;
    border-radius: 15px;
    margin-left: 2rem;
    margin-bottom: 3rem;
    margin-top: 4rem;
    box-sizing: border-box;
    padding: 20px 20px 20px 20px;
    display: block;
    font-size: 1.1rem;
    color: #666666;
    display: flex;
    justify-content: center;
    @media (max-width: 767px) {
      /* 添加移动设备断点样式 */
      margin-left: 0;
      margin-bottom: 2rem;
      width: 80vw;
    }

    /* 平板电脑断点样式 */
    @media (min-width: 768px) and (max-width: 1023px) {
      /* 添加平板电脑断点样式 */
    }

    /* 桌面断点样式 */
    @media (min-width: 1024px) {
      /* 添加桌面断点样式 */
    }
  }
`;

export const Button = styled.button`
  &.submitPostBtn {
    width: 400px;
    background-color: rgb(248, 92, 112);
    border: none;
    border-radius: 15px;
    height: 60px;
    color: white;
    font-size: 1.2rem;
    transition: all 0.5s;

    &:hover {
      cursor: pointer;
      background-color: black;
      color: white;
    }

    @media (max-width: 767px) {
      /* 添加移动设备断点样式 */
      width: 80vw;
    }

    /* 平板电脑断点样式 */
    @media (min-width: 768px) and (max-width: 1023px) {
      /* 添加平板电脑断点样式 */
      width: 40vw;
    }

    /* 桌面断点样式 */
    @media (min-width: 1024px) {
      /* 添加桌面断点样式 */
      width: 30vw;
    }
  }
`;
