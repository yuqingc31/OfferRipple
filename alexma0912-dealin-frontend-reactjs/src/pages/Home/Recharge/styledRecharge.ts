import styled from 'styled-components';

export const Div = styled.div`
  &.pageContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const FormContainer = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
  margin-bottom: 5rem;
  width: 37.5rem;
  background-color: white;
  box-shadow: 0 2.5rem 6.25rem 0 rgba(174, 173, 173, 0.605);
  border-radius: 16px;
  @media (max-width: 767px) {
    width: 100%;
    background-color: white;
    border-radius: 0;
    margin-top: 0;
    margin-bottom: 0;
    padding-bottom: 4rem;
  }
  /* 平板电脑断点样式 */
  @media (min-width: 768px) and (max-width: 1023px) {
    /* 添加平板电脑断点样式 */
    background-color: white;
    border-radius: 0;
    padding-bottom: 8rem;
  }

  /* 桌面断点样式 */
  @media (min-width: 1024px) {
    /* 添加桌面断点样式 */
  }
`;

export const InputSection = styled.div`
  width: 400px;
  display: inline-block;
  margin-top: 2rem;

  /* 平板电脑断点样式 */
  @media (max-width: 767px) {
    /* 添加平板电脑断点样式 */
    width: 300px;
  }
`;

export const ArrowIcon = styled.div`
  background-color: #f85c70;
  width: 60px;
  height: 70px;
  position: fixed;
  bottom: 40px;
  right: 40px;
  text-align: center;
  line-height: 70px;
  color: white;
  font-size: 2rem;
  transition: all 0.5s ease;
  z-index: 999;
  &:hover {
    cursor: pointer;
    background-color: #000000;
  }
  @media (max-width: 767px) {
    /* 添加移动设备断点样式 */
    right: 80px;
    bottom: 20px;
  }
`;

export default { Div, InputSection };
