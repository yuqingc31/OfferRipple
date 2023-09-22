import styled from 'styled-components';
import TextField from '@mui/material/TextField';

export const Div = styled.div`
  width: 60vw;
  text-align: left;
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
  color: #808080;
  @media (max-width: 767px) {
    /* 添加移动设备断点样式 */
    margin-top: 0.8rem;
    width: 80vw;
  }

  /* 平板电脑断点样式 */
  @media (min-width: 768px) and (max-width: 1023px) {
    /* 添加平板电脑断点样式 */
  }

  /* 桌面断点样式 */
  @media (min-width: 1024px) {
    /* 添加桌面断点样式 */
  }
`;

export const CustomTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    /* 自定义样式 */
    border-color: #e0e0e0;
    border-radius: 15px;
    width: 80vw;
    @media (max-width: 767px) {
      /* 添加移动设备断点样式 */
      width: 80vw;
    }

    /* 平板电脑断点样式 */
    @media (min-width: 768px) and (max-width: 1023px) {
      /* 添加平板电脑断点样式 */
      width: 40vw;
    }

    /* 桌面断点样式 */
    @media (min-width: 1024px) {
      /* 添加桌面断点样式 */
      width: 30vw;
    }
  }

  .MuiInputLabel-root {
    /* 自定义样式 */
  }
`;
