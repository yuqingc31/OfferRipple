import UserProfilePhoto from '../../../../components/UserProfilePhoto';
import UserNickName from '../../../../components/UserNickName';
import Email from '../../../../../../components/Email';
import Payment from '../../UserContent/UserContentList/Payment';
import DcoinAmount from '../../../../components/DcoinAmount';
import CreateDate from '../../../../components/CreateDate';
import { Div } from '../../../../components/styledContentList/styledContentList';
import { OrderType } from '../OrderContent';

export interface OrderContentListProps {
  order: OrderType;
}

const OrderContentList = ({ order }: OrderContentListProps) => {
  const { buyer, dcoin_amount, payment_amount, created_at } = order;

  // console.log(buyer);

  return (
    <Div className="listContainer">
      <Div className="userMeta">
        <UserProfilePhoto className="user" avatar={buyer.avatar} />
        <UserNickName className="user" username={buyer.username} />
      </Div>
      <Email email={buyer.email} />
      <Payment payment_amount={payment_amount} />
      <DcoinAmount dcoin_amount={dcoin_amount} />
      <CreateDate created_at={created_at} />
    </Div>
  );
};

export default OrderContentList;
