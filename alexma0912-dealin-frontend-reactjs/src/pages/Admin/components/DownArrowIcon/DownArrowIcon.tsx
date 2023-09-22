import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Div } from './styledDownArrowIcon';

const DownArrowIcon = () => {
  return (
    <Div>
      <FontAwesomeIcon icon={faCaretDown} />
    </Div>
  );
};

export default DownArrowIcon;
