import styled from 'styled-components';

export const LoginWrapper = styled.div`
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginButton = styled.button`
  background-color: #f85c70;
  position: relative;
  display: flex;
  justify-content: center;
  white-space: nowrap;
  align-items: center;
  overflow: hidden;
  font-size: 1rem;
  line-height: 1.4rem;
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  padding: 0.75rem 2rem;
  border-radius: 1.875rem;
  box-shadow: 0 0.625rem 1.875rem 0 rgba(248, 92, 112, 0.4);
  z-index: 1;
  transition: all 500ms ease;
  cursor: pointer;

  &:hover {
    background: #0d1927;
    box-shadow: 0 0.625rem 1.875rem 0 rgba(13, 25, 39, 0.3);
  }

  @media (max-width: 767px) {
    /* 添加移动设备断点样式 */
    padding: 0.3rem 1.5rem;
  }

  @media (max-width: 64rem) {
    box-shadow: none;
  }

  &:before {
    position: absolute;
    content: '';
    width: 0%;
    height: 100%;
    background: #0d1927;
    border-radius: 30px;
    left: 0px;
    top: 0px;
    z-index: -1;
    transition: all 500ms ease;

    ${LoginWrapper}:hover & {
      width: 100%;
    }
  }
`;
