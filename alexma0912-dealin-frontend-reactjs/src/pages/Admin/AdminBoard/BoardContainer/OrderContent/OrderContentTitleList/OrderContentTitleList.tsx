import { FormEvent, Dispatch, SetStateAction } from 'react';
import UserContentTitleText from '../../../../components/AdminBoardContentTitleText';
import DownArrowIcon from '../../../../components/DownArrowIcon';
import { Div } from '../../../../components/styledContentTitleList/styledContentTitleList';

export interface OrderContentTitleListProps {
  search?: string;
  setSearch: Dispatch<SetStateAction<string>>;
  orderClickCount: number;
  setOrderClickCount: Dispatch<SetStateAction<number>>;
}

const OrderContentTitleList = ({
  search,
  setSearch,
  orderClickCount,
  setOrderClickCount,
}: OrderContentTitleListProps) => {
  const handleOnChange = (value: string) => {
    setSearch(value);
  };

  const SubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('order list searched');
    setOrderClickCount(orderClickCount + 1);
  };

  return (
    <Div className="listContainer">
      <Div className="listDiv">
        <UserContentTitleText text="User Name" />
        <DownArrowIcon />
      </Div>
      <Div className="listSearch">
        <form onSubmit={SubmitHandler}>
          <input
            type="text"
            value={search}
            placeholder="Search Email"
            onChange={(e) => handleOnChange(e.target.value)}
          />
          <button>Search</button>
        </form>
      </Div>
      <Div className="listDivPayment">
        <UserContentTitleText text="Payment" />
        <DownArrowIcon />
      </Div>
      <Div className="listDivDcoins">
        <UserContentTitleText text="Dcoins" />
        <DownArrowIcon />
      </Div>
      <Div className="listDivDate">
        <UserContentTitleText text="Create Date" />
        <DownArrowIcon />
      </Div>
    </Div>
  );
};

export default OrderContentTitleList;
