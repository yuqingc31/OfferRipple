import { Div, P } from './styledAboutTopImage';

interface AboutTopImageProps {
  lgText: string;
  smText: string;
}

const AboutTopImage = ({ lgText, smText }: AboutTopImageProps) => {
  return (
    <Div className="headImg">
      <Div className="headText">
        <P className="lgText">{lgText}</P>
        <P className="smText">{smText}</P>
      </Div>
    </Div>
  );
};

export default AboutTopImage;
