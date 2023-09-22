import SideBarIcon from './SideBarIcon';
import SideBarText from './SideBarText';
import { Div } from './styledSideBarList';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface SidebarListProps {
  text: string;
  icon: IconDefinition;
}

const SideBarList = ({ text, icon }: SidebarListProps) => {
  return (
    <Div>
      <SideBarIcon icon={icon} />
      <SideBarText text={text} />
    </Div>
  );
};

export default SideBarList;
