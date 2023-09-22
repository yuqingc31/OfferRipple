import styled from 'styled-components';

export const Card = styled.div`
  width: 600px;
  background-color: white;
  margin-top: 4rem;
  margin-bottom: 5rem;
  box-shadow: 0px 40px 100px 0px rgba(174, 173, 173, 0.605);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    width: 100%;
    background-color: white;
    margin-bottom: 5rem;
    border-radius: 0;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const InputSection = styled.div`
  width: 400px;
  display: inline-block;

  &.toggleMessage {
    text-align: center;
    margin-bottom: 3rem;

    button {
      all: unset;
      cursor: pointer;
      color: rgb(248, 92, 112);

      &:hover {
        color: black;
      }
    }
  }

  /* 平板电脑断点样式 */
  @media (max-width: 767px) {
    /* 添加平板电脑断点样式 */
    width: 300px;

    &.toggleMessage {
      margin-bottom: 6rem;
    }
  }
`;

export const TitleText = styled.div`
  width: 400px;
  text-align: left;
  margin-top: 2rem;
  margin-bottom: 0.8rem;
  color: #808080;

  &.headTitle {
    width: 400px;
    margin-top: 3rem;
    font-size: 1.5rem;
    font-weight: bold;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    /* 添加平板电脑断点样式 */
    width: 300px;
    &.headTitle {
      width: 300px;
      margin-top: 3rem;
      font-size: 1.5rem;
      font-weight: bold;
    }
  }

  @media (max-width: 767px) {
    width: 100%;
    &.headTitle {
      width: 100%;
      margin-top: 3rem;
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
`;
