import styled from 'styled-components';
import TextField from '@mui/material/TextField';

interface CustomTextFieldProps {
  ErrMsg: boolean;
}

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CustomTextField = styled(TextField)<CustomTextFieldProps>`
  ${(props) =>
    props.ErrMsg &&
    `
      ::placeholder {
        color: red;
    }`}
  .MuiOutlinedInput-root {
    /* 自定义样式 */
    border-color: #e0e0e0;
    border-radius: 15px;
    width: 300px;

    @media (max-width: 767px) {
      /* 添加移动设备断点样式 */
      width: 300px;
    }

    /* 平板电脑断点样式 */
    @media (min-width: 768px) and (max-width: 1023px) {
      /* 添加平板电脑断点样式 */
    }

    /* 桌面断点样式 */
    @media (min-width: 1024px) {
      /* 添加桌面断点样式 */
    }
  }

  .MuiInputLabel-root {
    /* 自定义样式 */
  }
`;
