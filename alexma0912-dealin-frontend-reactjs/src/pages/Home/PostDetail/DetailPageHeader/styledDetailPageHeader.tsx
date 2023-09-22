import styled from 'styled-components';

const Div = styled.div<{ backgroundImage: string }>`
  display: flex;
  align-items: center;
  justify-content: center;

  &.headImg {
    height: 600px;
    position: relative;
    background-image: url('${(props) => props.backgroundImage}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 600px;
      background-color: rgb(0, 0, 0, 0.6);
      z-index: 99;
    }
  }
`;

const PostTitle = styled.div`
  height: 100%;
  width: 100%;
  color: white;
  font-size: 1.1rem;
  position: absolute;
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30rem;
  white-space: normal;
  word-wrap: break-word;
  h1 {
    width: 1000px;
    text-align: center;
  }

  @media (max-width: 767px) {
    margin-left: 0;
    height: 100%;
    width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
    font-size: 0.8rem;
    h1 {
      width: 300px;
      text-align: center;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-left: 0;
    height: 100%;
    width: 100%;
    padding-left: 7rem;
    padding-right: 7rem;
    font-size: 0.8rem;
    h1 {
      width: 600px;
      text-align: center;
    }
  }

  @media (min-width: 1024px) {
  }
`;

const UserDetail = styled.div`
  width: 600px;
  height: 7rem;
  color: black;
  position: absolute;
  z-index: 99;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  margin-bottom: 3rem;
  margin-top: 40rem;
  background-color: white;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  border-bottom-right-radius: 35px;
  border-bottom-left-radius: 35px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);

  & h3 {
    font-size: 1.3rem;
    margin-left: 1rem;
    margin-right: 2.5rem;
    z-index: 999;
    color: #061a3a;
  }

  & img {
    border-radius: 50%;
    height: 5rem;
    width: 5rem;
    object-fit: cover;
    margin-left: 2.5rem;
    &:hover {
      background-color: #a0d1de;
    }
  }

  @media (max-width: 767px) {
    margin-left: 0;
    width: 100%;
    margin-bottom: 0;
    & h3 {
      font-size: 1rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-left: 0;
    width: 650px;
    margin-bottom: 0;
    & h3 {
      font-size: 1rem;
    }
  }

  @media (min-width: 1024px) {
  }
`;

export const Image = styled.img`
  width: 66px;
  padding: 10px;
  margin-right: 1rem;
  object-fit: cover;
  border-radius: 50%;
  background-color: gainsboro;
  position: relative;
  &:hover {
    background-color: #a0d1de;
  }
`;

export { PostTitle, UserDetail, Div };
