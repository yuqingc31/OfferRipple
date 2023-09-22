import styled from 'styled-components';

export const UserPhoto = styled.img`
  width: 15rem;
  height: 15rem;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid rgb(248, 92, 112);
`;

export const UserName = styled.span`
  font-weight: bold;
  font-size: 20px;
  color: #1e293b;
  /* margin-left: 10%; */
  width: 280px;
  margin-top: 10%;
  text-align: center;
`;

export const UserDetails = styled.span`
  // font-weight: bold;
  font-size: 15px;
  color: #7a7e8d;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 280px;
  // margin-left: -25%;
  // margin-top: 10%;
`;

export const TextLink = styled.a`
  text-decoration: none;
  color: #808080;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* margin-left: -10%; */
  border-top: 3px solid #c7cad5;
  padding: 1rem 0 0 0;
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 8rem;
  margin-right: 5%;
  border-radius: 5px;
`;

export const EditButton = styled.button`
  background-color: #f85c70;
  margin: 0 auto;
  padding: 0.8rem 1rem;
  font-size: 1rem;
  border-radius: 25px;
  color: white;
  font-weight: bold;
  width: 70%;
  cursor: pointer;
  @media (max-width: 767px) {
    /* 添加移动设备断点样式 */
  }

  /* 平板电脑断点样式 */
  @media (min-width: 768px) and (max-width: 1023px) {
    /* 添加平板电脑断点样式 */
    width: 50%;
  }

  /* 桌面断点样式 */
  @media (min-width: 1024px) {
    /* 添加桌面断点样式 */
  }
`;

export const UserCard = styled.div`
  background-color: white;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  box-shadow: 0px 2px 20px 5px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding: 60px 20px;
  margin-top: 2rem;
  @media (max-width: 767px) {
    /* 添加移动设备断点样式 */
    background-color: white;
    width: 100%;
    border-radius: 16px;
    margin-top: 0;
    margin-bottom: 2rem;
  }
  /* 平板电脑断点样式 */
  @media (min-width: 768px) and (max-width: 1023px) {
    /* 添加平板电脑断点样式 */
    width: 95%;
    margin: 0 auto;
    margin-bottom: 3rem;
    margin-top: 1rem;
  }

  /* 桌面断点样式 */
  @media (min-width: 1024px) {
    /* 添加桌面断点样式 */
  }
`;
