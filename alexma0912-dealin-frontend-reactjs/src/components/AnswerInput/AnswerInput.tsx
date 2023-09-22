import { Div, CustomTextField } from './styledAnswerInput';
import { Dispatch, SetStateAction, CSSProperties } from 'react';

type UsernameProps = {
  value: string;
  required: boolean;
  setPersonalAnswer: Dispatch<SetStateAction<string>>;
  styles: CSSProperties;
};

const AnswerInput = ({ value, setPersonalAnswer, styles }: UsernameProps) => {
  let ErrMsg = false;
  if (Object.keys(styles).length > 0) {
    ErrMsg = true;
  }

  return (
    <Div style={styles}>
      <CustomTextField
        type="text"
        id="personalAnswer"
        placeholder="Your Answer"
        value={value}
        required
        onChange={(e) => setPersonalAnswer(e.target.value)}
        ErrMsg={ErrMsg}
      />
    </Div>
  );
};

export default AnswerInput;
