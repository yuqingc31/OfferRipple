import { FormEvent, Dispatch, SetStateAction } from 'react';
import UserContentTitleText from '../../../../components/AdminBoardContentTitleText';
import DownArrowIcon from '../../../../components/DownArrowIcon';
import { Div } from '../../../../components/styledContentTitleList/styledContentTitleList';

export interface UserContentTitleListProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  userClickCount: number;
  setUserClickCount: Dispatch<SetStateAction<number>>;
}

const UserContentTitleList = ({
  search,
  setSearch,
  userClickCount,
  setUserClickCount,
}: UserContentTitleListProps) => {
  const handleOnChange = (value: string) => {
    setSearch(value);
  };

  const SubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUserClickCount(userClickCount + 1);
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
      <Div className="listDivDcoins">
        <UserContentTitleText text="Dcoins" />
        <DownArrowIcon />
      </Div>
      <Div className="listDivDate">
        <UserContentTitleText text="Create Date" />
        <DownArrowIcon />
      </Div>
      <Div className="listDivAction">
        <UserContentTitleText text="Action" />
        <DownArrowIcon />
      </Div>
    </Div>
  );
};

export default UserContentTitleList;
