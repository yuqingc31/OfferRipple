import downarrowIcon from '../../../../../../assets/images/downarrowIcon.png';
import { Div, Span } from './styledTagInputTitle';

const TagInputTitle = () => {
  return (
    <Div className="tagContainer">
      <Span className="title">Post Tags:</Span>
      <Span className="icon">
        <img src={downarrowIcon} alt="Down Arrow" />
      </Span>
    </Div>
  );
};

export default TagInputTitle;
