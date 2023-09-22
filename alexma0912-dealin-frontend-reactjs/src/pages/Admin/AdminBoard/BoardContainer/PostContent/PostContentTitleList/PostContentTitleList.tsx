import { FormEvent, Dispatch, SetStateAction } from 'react';
import UserContentTitleText from '../../../../components/AdminBoardContentTitleText';
import DownArrowIcon from '../../../../components/DownArrowIcon';
import { Div } from '../../../../components/styledContentTitleList/styledContentTitleList';

export interface PostContentTitleListProps {
  search?: string;
  setSearch: Dispatch<SetStateAction<string>>;
  postClickCount: number;
  setPostClickCount: Dispatch<SetStateAction<number>>;
}

const PostContentTitleList = ({
  search,
  setSearch,
  postClickCount,
  setPostClickCount,
}: PostContentTitleListProps) => {
  const handleOnChange = (value: string) => {
    setSearch(value);
  };

  const SubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('post list searched');
    setPostClickCount(postClickCount + 1);
  };

  return (
    <Div className="listContainer">
      <Div className="listPostSearch">
        <form onSubmit={SubmitHandler}>
          <input
            type="text"
            value={search}
            placeholder="Search Post"
            onChange={(e) => handleOnChange(e.target.value)}
          />
          <button>Search</button>
        </form>
      </Div>
      <Div className="listDivCategory">
        <UserContentTitleText text="Category" />
        <DownArrowIcon />
      </Div>
      <Div className="listDivDate">
        <UserContentTitleText text="Create Date" />
        <DownArrowIcon />
      </Div>
      <Div className="listDivDate">
        <UserContentTitleText text="Expire Date" />
        <DownArrowIcon />
      </Div>
      <Div className="listDivAction">
        <UserContentTitleText text="Action" />
        <DownArrowIcon />
      </Div>
    </Div>
  );
};

export default PostContentTitleList;
