import { Div } from './styledSideBarIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface SideBarIconProps {
  icon: IconDefinition;
}

const SideBarIcon = ({ icon }: SideBarIconProps) => {
  return (
    <Div>
      <FontAwesomeIcon icon={icon} />
    </Div>
  );
};

export default SideBarIcon;
