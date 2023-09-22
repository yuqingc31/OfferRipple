import styled from 'styled-components';

export const AppContainer = styled.div`
  background-color: white;
  padding-top: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 2rem;
  position: relative;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  width: 100%;
  justify-content: center;
  /* margin-top: 1rem; */
  margin-bottom: 2rem;
  align-items: center;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    & img {
      position: relative;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      border-bottom-left-radius: 10px;
      max-width: 100%;
    }
  }

  @media (max-width: 767px) {
    /* 添加移动设备断点样式 */
    border-radius: 0;
    margin-top: 1rem;
    margin-bottom: 0;
  }

  /* 平板电脑断点样式 */
  @media (min-width: 768px) and (max-width: 1023px) {
    /* 添加平板电脑断点样式 */
    border-radius: 0;
    margin-top: 1rem;
    margin-bottom: 0;
    padding-left: 4rem;
    padding-right: 4rem;
  }

  /* 桌面断点样式 */
  @media (min-width: 1024px) {
    /* 添加桌面断点样式 */
  }
`;

export const Title = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: end;

  & h3 {
    margin-bottom: 1rem;
    text-align: left;
    width: 100%;
  }
`;

export const AddressText = styled.div`
  color: #808080;
  font-weight: 500;
  text-indent: 5px;
  display: flex;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
