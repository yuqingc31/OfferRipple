import { Div, Span } from './styledCategory';

export interface CategoryProps {
  category: string;
}

const Category = ({ category }: CategoryProps) => {
  return (
    <Div>
      <Span>{category}</Span>
    </Div>
  );
};

export default Category;
