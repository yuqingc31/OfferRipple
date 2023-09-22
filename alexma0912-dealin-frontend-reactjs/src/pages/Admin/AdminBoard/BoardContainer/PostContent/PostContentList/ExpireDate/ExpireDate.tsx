import { Div } from './styledExpireDate';

interface ExpireDateType {
  promotion_end_date?: string;
}

const ExpireDate = ({ promotion_end_date }: ExpireDateType) => {
  const slicedExpireDate = promotion_end_date?.slice(0, 10);
  return <Div>{slicedExpireDate}</Div>;
};

export default ExpireDate;
