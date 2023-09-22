import styled from 'styled-components';

export const Div = styled.div`
  &.tagInputContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
`;

export const Input = styled.input`
  &.tagInput {
    width: 60%;
    height: 2rem;
    background-color: #eaf4ff;
    border-radius: 15px;
    border: none;
    font-size: 1rem;
    color: darkgray;
    padding: 5px;
    text-indent: 1rem;
    outline-color: #c7dff7;
  }
`;

export const Button = styled.button`
  &.tagSubmitBtn {
    width: 25%;
    height: 2.5rem;
    background-color: #3285fa;
    border-radius: 15px;
    border: none;
    color: white;
    font-size: 1rem;
    padding: 5px;
    &:hover {
      cursor: pointer;
    }
  }
`;
