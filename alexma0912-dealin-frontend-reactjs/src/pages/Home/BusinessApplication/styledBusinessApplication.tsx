import styled from 'styled-components';
import globalStyle from '../../../config/config';

const Container = styled.div`
  background-color: ${globalStyle.bgBlue};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AlertContainer = styled.div`
  padding: 20px;
  background-color: #ffc107;
  color: rgb(41, 113, 211);
  position: fixed;
  top: 27.6%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
`;

const Closebtn = styled.span`
  margin-left: 15px;
  color: rgb(41, 113, 211);
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
export { Container, AlertContainer, Closebtn };
