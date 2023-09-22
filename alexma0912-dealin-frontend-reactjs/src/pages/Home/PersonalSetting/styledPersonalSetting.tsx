import styled from 'styled-components';
import TextField from '@mui/material/TextField';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  @media (max-width: 767px) {
    background-color: white;
    margin-top: 0rem;
  }
`;

const SettingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 40rem;
  height: auto;
  background-color: white;
  border-radius: 1.25rem;
  margin-bottom: 4rem;
  padding: 1.25rem;
  box-shadow: 0px 40px 100px 0px rgba(174, 173, 173, 0.605);
  @media (max-width: 767px) {
    width: 100%;
    box-shadow: none;
    gap: 0.75rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 1.25rem;
  @media (max-width: 767px) {
    width: 100%;
    box-shadow: none;
    gap: 0.75rem;
  }
`;

export const UserPhoto = styled.img`
  margin-top: 2rem;
  width: 11rem;
  height: 11rem;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid #f85c70;
`;

const NameDiv = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  width: 450px;
  text-align: center;
  @media (max-width: 767px) {
    font-size: 1.3rem;
    width: 300px;
  }
`;
const TextDiv = styled.div`
  text-align: left;
  width: 28rem;
  margin-top: 1.5rem;
  margin-bottom: 0rem;
  color: #808080;
  @media (max-width: 767px) {
    width: 19rem;
    font-size: 1rem;
    margin-top: 1rem;
  }
`;
const CustomTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    border-color: #e0e0e0;
    border-radius: 15px;
    width: 28rem;
    height: 3.5rem;
    @media (max-width: 767px) {
      width: 19rem;
    }
  }
`;

const CustomButton = styled.button`
  width: 28rem;
  background-color: rgb(248, 92, 112);
  border: none;
  border-radius: 15px;
  height: 3.75rem;
  margin-top: 2rem;
  margin-bottom: 3rem;
  color: white;
  font-size: 1.2rem;
  transition: all 0.5s;
  &:hover {
    cursor: pointer;
    background-color: black;
    color: white;
  }
  @media (max-width: 767px) {
    width: 18rem;
    font-size: 1.2rem;
    margin-bottom: 0;
  }
`;

export { SettingContainer, PageContainer, CustomTextField, TextDiv, CustomButton, NameDiv, Form };
