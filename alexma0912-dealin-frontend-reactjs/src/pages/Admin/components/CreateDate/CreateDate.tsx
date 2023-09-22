import { Div } from './styledCreateDate';

interface CreateDateType {
  created_at?: string;
}

const CreateDate = ({ created_at }: CreateDateType) => {
  const slicedCreateDate = created_at?.slice(0, 10);
  // console.log(slicedCreateDate);
  return <Div>{slicedCreateDate}</Div>;
};

export default CreateDate;
