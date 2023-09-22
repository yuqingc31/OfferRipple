import { Div, P } from './styledLoginTopImage';

interface PageTopImageProps {
  lgText: string;
  smText: string;
}

const PageTopImage = ({ lgText, smText }: PageTopImageProps) => {
  return (
    <Div className="headImg">
      <Div className="headText">
        <P className="lgText">{lgText}</P>
        <P className="smText">{smText}</P>
      </Div>
    </Div>
  );
};

export default PageTopImage;
