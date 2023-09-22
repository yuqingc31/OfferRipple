import { StyledABNTitle } from './styledABNTitle';

type ABNTitleProps = {
  title: string;
};

const ABNTitle = ({ title }: ABNTitleProps) => <StyledABNTitle>{title}</StyledABNTitle>;

export default ABNTitle;
