import { Div, Span } from './styledDcoins';

interface DcoinsType {
  dcoin?: number;
  dcoin_amount?: number;
}

const Dcoins = ({ dcoin }: DcoinsType) => {
  return (
    <Div>
      <Span>{dcoin}</Span>
    </Div>
  );
};

export default Dcoins;
