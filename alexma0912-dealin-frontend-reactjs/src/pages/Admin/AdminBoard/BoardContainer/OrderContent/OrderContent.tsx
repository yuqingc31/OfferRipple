import { Div, NoResult } from '../../../components/styledAdminBoardContent/styledAdminBoardContent';
import OrderContentTitleList from './OrderContentTitleList';
import OrderContentList from './OrderContentList';
import BoardContainerPaginationList from '../BoardContainerPaginationList';
import { BoardContainerProps } from '../BoardContainer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthState } from '../../../../../reducers/tokenReducer';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import AdminBoardLoading from '../../../../../components/AdminBoardLoading';
import { UserType } from '../UserContent/UserContent';

export interface OrderType {
  _id: string;
  buyer: UserType;
  dcoin_amount: number;
  payment_amount: number;
  created_at: string;
}

const OrderContent = ({ orderClickCount, setOrderClickCount }: BoardContainerProps) => {
  const [loaded, setLoaded] = useState(true);
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState('');
  const token = useSelector((state: AuthState) => state.auth.token);
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'https://dev-api.offerripple.com';
  const navigate = useNavigate();
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  //load all order lists
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/recharges?page=${page}&search=${search}`, {
        headers: headers,
      })
      .then((res) => {
        setOrders(res.data.slicedRecharges);
        setTotalPages(res.data.totalPages);
        // console.log(res.data.slicedRecharges);
      })
      .then(() => {
        setLoaded(true);
      })
      .catch((err) => {
        console.log(err);
        navigate('/admin/login');
      });
  }, [orderClickCount, page]);

  return (
    <Div>
      {loaded ? (
        <>
          <OrderContentTitleList
            search={search}
            setSearch={setSearch}
            setOrderClickCount={setOrderClickCount}
            orderClickCount={orderClickCount}
          />
          <Div className="ListContainer">
            {orders.length !== 0 ? (
              orders.map((order: OrderType) => <OrderContentList key={order._id} order={order} />)
            ) : (
              <NoResult>Sorry, No Result Found</NoResult>
            )}
          </Div>
          <BoardContainerPaginationList setPage={setPage} page={page} totalPages={totalPages} />
        </>
      ) : (
        <AdminBoardLoading />
      )}
    </Div>
  );
};
export default OrderContent;
