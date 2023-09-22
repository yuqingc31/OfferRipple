import styled from 'styled-components';

export const Div = styled.div`
  &.listDiv {
    display: flex;
    gap: 0.625rem;
    width: 260px;
    justify-content: left;
    color: gray;
    align-items: center;
    margin-left: 3rem;
  }
  &.listSearch {
    display: flex;
    width: 260px;
    justify-content: left;
    color: gray;
    align-items: center;

    & input {
      border: 1px solid gray;
      width: 200px;
      height: 30px;
      border-radius: 5px 0 0 5px;
      text-indent: 10px;
    }

    & button {
      width: 60px;
      height: 30px;
      border-radius: 0 5px 5px 0;
      background-color: gray;
      color: white;
      cursor: pointer;

      &:hover {
        background-color: black;
      }
    }
  }
  &.listPostSearch {
    display: flex;
    width: 300px;
    justify-content: left;
    color: gray;
    align-items: center;
    margin-left: 3rem;

    & input {
      border: 1px solid gray;
      width: 240px;
      height: 30px;
      border-radius: 5px 0 0 5px;
      text-indent: 10px;
    }

    & button {
      width: 60px;
      height: 30px;
      border-radius: 0 5px 5px 0;
      background-color: gray;
      color: white;
      cursor: pointer;

      &:hover {
        background-color: black;
      }
    }
  }
  &.listContainer {
    display: flex;
    font-size: 0.9rem;
    font-weight: bold;
    height: 3.75rem;
    align-items: center;
    border-bottom: 1px solid lightgray;
    gap: 30px;
  }
  &.listDivUsername {
    display: flex;
    gap: 0.625rem;
    width: 300px;
    justify-content: left;
    color: gray;
    align-items: center;
    margin-left: 3rem;
  }
  &.listDivABN {
    display: flex;
    gap: 0.625rem;
    width: 150px;
    justify-content: left;
    color: gray;
    align-items: center;
  }
  &.listDivStatus {
    display: flex;
    gap: 0.625rem;
    width: 150px;
    justify-content: left;
    color: gray;
    align-items: center;
  }
  &.listDivID {
    display: flex;
    gap: 0.625rem;
    width: 220px;
    justify-content: left;
    color: gray;
    align-items: center;
    margin-left: 40px;
  }
  &.listDivDate {
    display: flex;
    gap: 0.625rem;
    width: 120px;
    justify-content: left;
    color: gray;
    align-items: center;
  }
  &.listDivType {
    display: flex;
    gap: 0.625rem;
    width: 300px;
    justify-content: left;
    color: gray;
    align-items: center;
  }
  &.listDivDcoins {
    display: flex;
    gap: 0.625rem;
    width: 80px;
    justify-content: left;
    color: gray;
    align-items: center;
  }
  &.listDivABN {
    display: flex;
    gap: 0.625rem;
    width: 160px;
    justify-content: left;
    color: gray;
    align-items: center;
  }
  &.listDivPayment {
    display: flex;
    gap: 0.625rem;
    width: 80px;
    justify-content: left;
    color: gray;
    align-items: center;
  }
  &.listDivTitle {
    display: flex;
    gap: 0.625rem;
    width: 300px;
    justify-content: left;
    color: gray;
    align-items: center;
    margin-left: 3rem;
  }
  &.listDivCategory {
    display: flex;
    gap: 0.625rem;
    width: 220px;
    justify-content: left;
    color: gray;
    align-items: center;
  }
  &.listDivAction {
    display: flex;
    gap: 0.625rem;
    width: 140px;
    justify-content: left;
    color: gray;
    align-items: center;
  }
`;
