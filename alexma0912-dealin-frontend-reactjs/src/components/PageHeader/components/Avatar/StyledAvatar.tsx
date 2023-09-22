import styled from 'styled-components';
import { Menu, MenuItem } from '@mui/material';

export const UserButton = styled.button`
  background-color: transparent;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-size: 1rem;
  line-height: 1.5rem;
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;
  color: #403e3e;
  text-align: center;
  padding: 0.38rem 0.9rem;
  z-index: 1;
  transition: all 500ms ease;
  cursor: pointer;
  min-width: 6rem;

  &.loginBtn {
    border-radius: 1.875rem;
    background-color: rgb(248, 92, 112);
    color: white;
    box-shadow: 0 0.625rem 1.875rem 0 rgba(248, 92, 112, 0.4);
    &:hover {
      background: #0d1927;
      box-shadow: 0 0.625rem 1.875rem 0 rgba(13, 25, 39, 0.3);
    }
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 767px) {
    width: 20vw;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
  }

  @media (min-width: 1024px) {
  }
`;

export const UserName = styled.span`
  max-width: 10rem;
  margin: 0 0.3rem 0 0.3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 64rem) {
    display: none;
  }
`;

export const UserAvatar = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

export const StyledMenu = styled(Menu)`
  .MuiPaper-root {
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  border-radius: 0.625rem;
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #0d1927;
  padding: 0.5rem 1.5rem;
  transition: all 500ms ease;
`;
