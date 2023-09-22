import React from 'react';
import { CoinsWrapper, CoinsButton } from './StyledCoins';

interface CoinsBalanceProps {
  coins: number;
  onCoinsClick: () => void;
}

const CoinsBalance: React.FC<CoinsBalanceProps> = ({ coins, onCoinsClick }) => {
  return (
    <CoinsWrapper>
      <CoinsButton onClick={onCoinsClick}>Coins: {coins}</CoinsButton>
    </CoinsWrapper>
  );
};

export default CoinsBalance;
