import { StyledAdminTitle } from './styledTitle';

type TitleProps = {
  title: string;
};

const Title = ({ title }: TitleProps) => <StyledAdminTitle>{title}</StyledAdminTitle>;

export default Title;
