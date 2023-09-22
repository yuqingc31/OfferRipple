import styled from 'styled-components';

export const LogoContainer = styled.figure`
  max-width: 9rem;
  width: 100%;
  cursor: pointer;
  @media (max-width: 767px) {
    max-width: 7rem;
    min-width: 7rem;
    margin: 0 auto;
  }
`;

export const Logo = styled.img`
  width: 100%;
  display: inline-block;
  max-width: 100%;
  height: auto;
  transition-delay: 0.1s;
  transition-timing-function: ease-in-out;
  transition-duration: 0.7s;
  transition-property: all;
`;
