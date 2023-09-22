import styled from 'styled-components';

export const UserPhoto = styled.img`
  margin-top: 2rem;
  width: 11rem;
  height: 10rem;
  border-radius: 50%;
  border: 5px solid #f85c70;
`;

export const UserNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const UserName = styled.span`
  font-weight: bold;
  font-size: 50px;
  color: #f85c70;
`;

export const TopContainer = styled.div`
  height: 60%;
  width: 60%;
  margin-left: 20%;
  margin-bottom: 5%;
  @media (max-width: 767px) {
    /* 添加移动设备断点样式 */
    height: 100%;
    width: 100%;
    margin-left: 0;
    margin-bottom: 0;
    width: 100%;
    height: 100%;
  }
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-top: 8rem;
  box-shadow: 0px 40px 100px 0px rgba(174, 173, 173, 0.605);
  border-radius: 60px;

  @media (max-width: 767px) {
    /* 添加移动设备断点样式 */
    width: 100%;
    background-color: white;
    margin-top: 3rem;
    margin-bottom: 0;
    box-shadow: 0px 40px 100px 0px rgba(174, 173, 173, 0.605);
    border-radius: 0;
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
