import { useState } from 'react';
import {
  StyledContainer,
  StyledLabel,
  StyledInput,
  StyledSpan,
  Price,
} from './styledRechargeAmount';

type RechargeAmountProps = {
  onAmountChange: (amount: number) => void;
  rechargeLimit: number;
  price: number;
};

const RechargeAmount: React.FC<RechargeAmountProps> = ({
  onAmountChange,
  rechargeLimit,
  price = 0,
}) => {
  const [rechargeAmount, setRechargeAmount] = useState<number>(0);
  const maxAmount = rechargeLimit; // max amount of Dcoins that can be recharged at once

  const handleRechargeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const sanitizedValue = inputValue.replace(/[^0-9]/g, ''); // only allow numbers
    let amount = sanitizedValue === '' ? 0 : parseInt(sanitizedValue, 10); // if input is empty, set amount to 0

    // limit the amount max input to maxAmount
    amount = Math.min(amount, maxAmount);

    setRechargeAmount(amount);
    onAmountChange(amount); // notify parent component about the amount change
  };

  return (
    <>
      <StyledContainer>
        <StyledLabel htmlFor="RechargeAmount">Amount:</StyledLabel>
        <StyledInput
          placeholder={`Dcoins ( <=${maxAmount} )`}
          id="RechargeAmount"
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          required
          value={rechargeAmount === 0 ? '' : rechargeAmount}
          onChange={handleRechargeAmount}
        />
      </StyledContainer>
      <StyledContainer className="priceSection">
        <StyledSpan>Total Price</StyledSpan>
        <Price>$ {price}</Price>
      </StyledContainer>
    </>
  );
};

export default RechargeAmount;
