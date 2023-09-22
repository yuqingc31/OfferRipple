import { Div, Span } from './styledDcoinAmount';

interface DcoinAmountType {
  dcoin_amount?: number;
}

const DcoinAmount = ({ dcoin_amount }: DcoinAmountType) => {
  return (
    <Div>
      <Span>{dcoin_amount}</Span>
    </Div>
  );
};

export default DcoinAmount;
