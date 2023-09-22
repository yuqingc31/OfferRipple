import { Div } from './styledSideBarText';

export interface SideBarTextProps {
  text: string;
}

const SideBarText = ({ text }: SideBarTextProps) => {
  return <Div>{text}</Div>;
};

export default SideBarText;
