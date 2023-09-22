import StyledRechargeTitle from './styledRechargeTitle';

type RechargeTitleProps = {
  balance: number;
};

const RechargeTitle: React.FC<RechargeTitleProps> = ({ balance }) => {
  return (
    <div>
      <StyledRechargeTitle className="headTitle">Recharge</StyledRechargeTitle>
      <StyledRechargeTitle className="subTitle">
        Current Balance: <span style={{ color: '#f85c70' }}>{balance} </span>Coins
      </StyledRechargeTitle>
    </div>
  );
};

export default RechargeTitle;
