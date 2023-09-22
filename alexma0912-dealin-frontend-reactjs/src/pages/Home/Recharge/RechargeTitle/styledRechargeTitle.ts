import styled from 'styled-components';

const StyledRechargeTitle = styled.div`
  width: 25rem;
  text-align: left;
  margin-top: 1rem;
  margin-bottom: 0.8rem;
  color: #808080;
  white-space: nowrap;

  &.headTitle {
    width: 400px;
    font-size: 1.5rem;
    font-weight: bold;
    color: #343a40;
  }

  &.subTitle {
    width: 25rem;
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: bold;
    color: #808080;
    margin-bottom: 1rem;
  }

  @media (max-width: 767px) {
  }
  /* 平板电脑断点样式 */
  @media (min-width: 768px) and (max-width: 1023px) {
    /* 添加平板电脑断点样式 */
    width: 400px;
    &.headTitle {
      margin-top: 5rem;
      width: 400px;
    }
    &.subTitle {
      width: 400px;
    }
  }

  /* 桌面断点样式 */
  @media (min-width: 1024px) {
    /* 添加桌面断点样式 */
  }
`;

export default StyledRechargeTitle;
