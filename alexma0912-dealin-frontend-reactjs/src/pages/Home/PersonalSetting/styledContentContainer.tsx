import styled from 'styled-components';

export const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  &.contentBox {
    width: 75%;
    background-color: white;
    margin-top: 4rem;
    margin-bottom: 5rem;
    box-shadow: 0px 40px 100px 0px rgba(174, 173, 173, 0.605);
    border-radius: 15px;
  }

  @media (max-width: 767px) {
    /* 添加移动设备断点样式 */
    &.contentBox {
      width: 100%;
      background-color: white;
      margin-bottom: 5rem;
      box-shadow: 0px 40px 100px 0px rgba(174, 173, 173, 0.605);
      border-radius: 0;
      margin-top: 0;
      margin-bottom: 0;
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
export const AlertContainer = styled.div`
  padding: 20px;
  background-color: rgb(248, 92, 112);
  color: white;
  position: fixed;
  top: 12.7%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  border-radius: 15px;
  text-transform: capitalize;
`;

export const Closebtn = styled.span`
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 1s;
  :hover {
    color: black;
  }
`;
