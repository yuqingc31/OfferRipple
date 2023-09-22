import styled from 'styled-components';

export const Div = styled.div`
  width: 800px;
  background-color: white;
  margin-top: 5rem;
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
    border-radius: 0;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const InputSection = styled.div`
  width: 600px;
  display: inline-block;
  margin-bottom: 2rem;
  line-height: 2rem;
  color: #808080;
  padding-top: 2rem;
  padding-bottom: 2rem;

  &.toggleMessage {
    text-align: center;
    margin-bottom: 3rem;
    color: #808080;

    button {
      all: unset;
      cursor: pointer;
      color: rgb(248, 92, 112);

      &:hover {
        color: black;
      }
    }
  }

  & pre {
    white-space: pre-wrap;
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
  font-size: 1.3rem;
  color: #808080;

  &.headTitle {
    width: 400px;
    margin-top: 3rem;
    font-size: 1.8rem;
    font-weight: bold;
    color: #343a40;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    /* 添加平板电脑断点样式 */
    width: 300px;
    &.headTitle {
      width: 300px;
      margin-top: 3rem;
      font-size: 1.8rem;
      font-weight: bold;
    }
  }
`;

export const DivTitle = styled.div`
  margin-top: 0.5rem;
`;
