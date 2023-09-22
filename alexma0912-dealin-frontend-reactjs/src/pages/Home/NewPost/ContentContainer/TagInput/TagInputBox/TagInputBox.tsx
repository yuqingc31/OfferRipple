import { Div, Input, Button } from './styledTagInputBox';

const TagInputBox = () => {
  return (
    <Div className="tagInputContainer">
      <Input className="tagInput" type="text" placeholder="enter your tag..." value="" />
      <Button className="tagSubmitBtn">Enter Tag</Button>
    </Div>
  );
};

export default TagInputBox;
