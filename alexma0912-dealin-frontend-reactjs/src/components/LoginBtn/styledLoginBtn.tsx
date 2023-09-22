import styled from 'styled-components';

export const Div = styled.div`
  &.LoginBtnContainer {
    width: 300px;
    border: none;
    border-radius: 15px;
    margin-top: 1.5rem;
    margin-bottom: 2rem;
    box-sizing: border-box;
    padding: 30px 20px 5px 20px;
    display: block;
    font-size: 1.1rem;
    color: #666666;
    display: flex;
    justify-content: center;
    @media (max-width: 767px) {
      /* 添加移动设备断点样式 */
      margin-left: 0;
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

export const IconContainer = styled.span`
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 15px;
  height: 60px;
  color: white;
  font-size: 1.2rem;
  transition: all 0.5s;

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
  &.LoginBtn {
    background-color: rgb(248, 92, 112);
    &:hover {
      cursor: pointer;
      background-color: black;
      color: white;
    }
  }
  &.GoogleBtn {
    background-color: rgb(228, 230, 233);
    color: #585656;
    &:hover {
      cursor: pointer;
      background-color: black;
      color: white;
    }
  }
`;
