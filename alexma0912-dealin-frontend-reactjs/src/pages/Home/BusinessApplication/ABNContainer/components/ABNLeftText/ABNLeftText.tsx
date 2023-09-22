import { StyledABNLeftText, StyledTextSpan } from './styledABNLeftText';

type ABNLeftTextProps = {
  text: string;
};

const ABNLeftText = ({ text }: ABNLeftTextProps) => {
  return (
    <StyledABNLeftText>
      <StyledTextSpan>{text}</StyledTextSpan>
    </StyledABNLeftText>
  );
};

export default ABNLeftText;
