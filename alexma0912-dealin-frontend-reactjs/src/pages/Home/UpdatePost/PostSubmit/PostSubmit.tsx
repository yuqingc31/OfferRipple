import { Div, Button } from './styledPostSubmit';

const PostSubmit = ({ submitOnclick }: { submitOnclick: () => void }) => {
  return (
    <Div className="postSubmitContainer">
      <Button className="submitPostBtn" onClick={submitOnclick}>
        Submit Post
      </Button>
    </Div>
  );
};

export default PostSubmit;
