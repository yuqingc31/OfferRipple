import styled from 'styled-components';

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  justify-content: center;
  margin: 2rem;

  @media (max-width: 767px) {
  }

  @media (min-width: 768px) and (max-width: 1023px) {
  }

  & h3 {
    color: #808080;
    font-size: 18px;
    display: 'flex';
    align-items: 'center';
    font-weight: bold;
    &.topTitle {
      font-weight: bold;
      margin-bottom: 1.2rem;
      color: black;
      font-size: 16px;
    }
    & div {
      font-size: 16px;
    }
  }

  & div {
    display: flex;
    align-items: center;
    font-weight: 500;
    margin-bottom: 1rem;
    margin-top: 0.5rem;

    &.signature {
      font-size: 14px;
      color: #808080;
    }
  }
`;

export const TextLink = styled.a`
  text-decoration: none;
  color: #808080;
`;

export const StyledSubForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.1rem;
  margin-left: 0rem;
`;

export const Title = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: black;
  margin: 1rem;
  margin-left: 0rem;
`;

export const RedTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: black;
  margin: 0.2rem;
  margin-left: 0rem;
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 0.5rem;
  object-fit: cover;
  border-radius: 15%;
  background-color: white;
`;

export const StyledButton = styled.button`
  width: 80%;
  padding: 0.7rem 1rem;
  border-radius: 0.5rem;
  font-size: 1.3rem;
  line-height: 1.8rem;
  color: white;
  background-color: rgb(248, 92, 112);
  margin: 0 auto;
  margin-top: 3rem;
  transition: all 0.5s;
  cursor: pointer;

  &:hover {
    background-color: black;
  }

  @media (max-width: 767px) {
    width: 80%;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 50%;
  }
`;
