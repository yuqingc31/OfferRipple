import styled from 'styled-components';
import arrow from '../../../assets/images/downarrowIcon.png';
import bgImg from '../../../assets/images/bgImg1.jpg';
import TextField from '@mui/material/TextField';

export const FilterBarContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: rgb(0, 0, 0, 0.6);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-image: url(${bgImg});
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
  }
`;

export const Form = styled.form`
  position: relative;
  top: 30vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 767px) {
    top: 20vh;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    top: 20vh;
  }
`;

export const TitleContent = styled.div`
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 45px;
    margin: 0;
    font-weight: bolder;
  }
  h3 {
    font-size: 25px;
    margin: 1rem 0 4rem 0;
  }

  @media (max-width: 767px) {
    h1 {
      font-size: 25px;
      margin: 0;
      padding: 0 1rem;
    }
    h3 {
      font-size: 15px;
      margin: 1rem 0 2rem 0;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    h1 {
      font-size: 35px;
      margin: 0;
    }
    h3 {
      font-size: 20px;
      margin: 1rem 0 4rem 0;
    }
  }
`;

export const SelectFieldContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    flex-direction: column;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    flex-direction: column;
  }
`;

export const FilterSelection = styled.select`
  height: 3.5rem;
  background: #5092e3;
  border: none;
  outline: none;
  border-radius: 16px 16px 16px 16px;
  color: #e3e3e3;
  opacity: 1;
  appearance: none;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-size: 0.6rem 0.6rem;
  background-size: 0.6rem 0.6rem;
  background-position: right 1.5625rem center;
  justify-content: center;
  justify-content: center;
  font-size: 1rem;
  &::selection {
    background-color: #0049c6;
  }
`;
export const FilterInput = styled.input`
  height: 3.5rem;
  background: #5092e3;
  border: none;
  outline: none;
  border-radius: 16px 16px 16px 16px;
  color: #e3e3e3;
  opacity: 1;
  font-size: 1rem;
  &::placeholder {
    color: #e3e3e3;
  }
`;
export const FilterOptions = styled.option`
  width: 6.125rem;
  height: 1.25rem;
  font-size: 0.875rem;
  font-family: SF Pro Rounded-Semibold, SF Pro Rounded;
  font-weight: 600;
  color: #e3e3e3;
  line-height: 1.25rem;
`;
export const FilterBtn = styled.button`
  color: #eee;
  background-color: black;
  width: 220px;
  height: 3.5rem;
  font-size: 1.1rem;
  background-color: #5092e3;
  border: solid 1px #5092e3;
  border-radius: 0 16px 16px 0;
  font-weight: bold;

  span {
    padding: 10px 0;
    margin-left: 15px;
    margin-right: 15px;
    background-color: #f85c70;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;

    &:hover {
      cursor: pointer;
      background-color: #000000;
      /* border: solid 1px #000000; */
    }
  }

  @media (max-width: 767px) {
    width: 300px;
    border-radius: 0 0 16px 16px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 500px;
    border-radius: 0 0 16px 16px;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  text-indent: 1.25rem;
  font-size: 1rem;
  color: #eee;
  justify-content: center;
  margin-top: 2rem;
  @media (max-width: 767px) {
    /* 添加移动设备断点样式 */
    flex-direction: column;
    align-items: center;
  }

  /* 平板电脑断点样式 */
  @media (min-width: 768px) and (max-width: 1023px) {
    /* 添加平板电脑断点样式 */
    flex-direction: column;
    align-items: center;
  }
`;

export const TickBox = styled.input`
  font-size: 1.1rem;
  @media (max-width: 767px) {
    /* 添加移动设备断点样式 */
    font-size: 0.85rem;
  }

  /* 平板电脑断点样式 */
  @media (min-width: 768px) and (max-width: 1023px) {
    /* 添加平板电脑断点样式 */
    font-size: 0.85rem;
  }
`;

export const TickLabel = styled.label`
  font-size: 1.1rem;
  @media (max-width: 767px) {
    /* 添加移动设备断点样式 */
    text-indent: 0;
  }

  /* 平板电脑断点样式 */
  @media (min-width: 768px) and (max-width: 1023px) {
    /* 添加平板电脑断点样式 */
    text-indent: 0;
  }
`;

export const LabelSpan = styled.span`
  margin-left: 0.3125rem;
`;

export const CustomTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    width: 220px;
    height: 3.5rem;
    background-color: #5092e3;
    border-radius: 16px 0 0 16px;
    color: #e3e3e3;
    border: none;
    outline: none;
    opacity: 1;
    appearance: none;

    @media (max-width: 767px) {
      width: 300px;
      border-radius: 16px 16px 0 0;
      border: none;
      outline: none;
      opacity: 1;
      appearance: none;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
      width: 500px;
      border-radius: 16px 16px 0 0;
      border: none;
      outline: none;
      opacity: 1;
      appearance: none;
    }
  }
`;
