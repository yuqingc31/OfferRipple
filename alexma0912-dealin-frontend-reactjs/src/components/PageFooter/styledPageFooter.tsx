import styled from 'styled-components';
import footerImg from '../../assets/images/footerImg.jpg';

export const Div = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  background-image: url(${footerImg});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200px;
    background-color: rgb(0, 0, 0, 0.7);
    z-index: 999;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 1rem;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
  }

  @media (min-width: 1024px) {
  }
`;

export const InfoSection = styled.a`
  position: relative;
  width: 120px;
  color: white;
  z-index: 999;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.5s;
  &:hover {
    cursor: pointer;
    color: rgb(248, 92, 112);
  }
`;
