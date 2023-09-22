import { Div, P } from './styledSubpageTopImage';

interface SubpageTopImageProps {
  lgText: string;
  smText: string;
}

const SubpageTopImage = ({ lgText, smText }: SubpageTopImageProps) => {
  return (
    <Div className="headImg">
      <Div className="headText">
        <P className="lgText">{lgText}</P>
        <P className="smText">{smText}</P>
      </Div>
    </Div>
  );
};

export default SubpageTopImage;
