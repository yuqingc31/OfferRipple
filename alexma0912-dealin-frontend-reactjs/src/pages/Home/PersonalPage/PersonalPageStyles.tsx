import styled from 'styled-components';

export const UserPhoto = styled.img`
  margin-top: 2rem;
  width: 11rem;
  height: 10rem;
  border-radius: 50%;
  border: 5px solid grey;
`;

export const UserNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const UserName = styled.span`
  font-weight: bold;
  font-size: 50px;
  color: #1e293b;
`;

export const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const Container2 = styled.div`
  width: 50rem;
  margin-top: -63rem;
  margin-left: 30%;
  @media (max-width: 767px) {
    /* 添加移动设备断点样式 */
    margin-top: 0;
    margin-left: -80px;
  }
`;
