import styled from 'styled-components';

export const CoinsWrapper = styled.div`
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    margin-left: 1rem;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-left: 1rem;
  }

  @media (min-width: 1024px) {
  }
`;

export const CoinsButton = styled.button`
  background-color: #f85c70;
  position: relative;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  font-size: 1rem;
  line-height: 1.4rem;
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
  padding: 0.75rem 1.8rem;
  border-radius: 1.875rem;
  box-shadow: 0 0.625rem 1.875rem 0 rgba(248, 92, 112, 0.4);
  z-index: 1;
  transition: all 500ms ease;
  cursor: pointer;
  margin-right: 2rem;

  &:hover {
    background: #0d1927;
    box-shadow: 0 0.625rem 1.875rem 0 rgba(13, 25, 39, 0.3);
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

    ${CoinsWrapper}:hover & {
      width: 100%;
    }
  }

  @media (max-width: 64rem) {
    box-shadow: none;
  }
`;
