import Sidebar from './Sidebar';
import BoardContainer from './BoardContainer';
import { Div } from './styledAdminBoard';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import axios from 'axios';
import { AuthState } from '../../../reducers/tokenReducer';
import { useSelector } from 'react-redux';
import AdminBoardLoading from '../../../components/AdminBoardLoading';
import { useNavigate } from 'react-router-dom';

export interface AdminBoardProps {
  contentType?: string;
  pageTitle: string;
  userClickCount?: number;
  postClickCount?: number;
  orderClickCount?: number;
  dropMenu?: boolean;
  adminName: string;
  setContentType?: Dispatch<SetStateAction<string>>;
  handleUserClick: () => void;
  handlePostClick: () => void;
  handleOrderClick: () => void;
  setPageTitle?: Dispatch<SetStateAction<string>>;
  setDropMenu?: Dispatch<SetStateAction<boolean>>;
  setUserClickCount?: Dispatch<SetStateAction<number>>;
  setPostClickCount?: Dispatch<SetStateAction<number>>;
}

const AdminBoard = () => {
  const [loaded, setLoaded] = useState(false);
  const [contentType, setContentType] = useState('user');
  const [pageTitle, setPageTitle] = useState('User List');
  const [userClickCount, setUserClickCount] = useState(0);
  const [postClickCount, setPostClickCount] = useState(0);
  const [orderClickCount, setOrderClickCount] = useState(0);
  const [adminName, setAdminName] = useState('Admin');

  const navigate = useNavigate();

  const handleUserClick = () => {
    setContentType('user');
    setUserClickCount(userClickCount + 1);
  };

  const handlePostClick = () => {
    setContentType('post');
    setPostClickCount(postClickCount + 1);
  };

  const handleOrderClick = () => {
    setContentType('order');
    setOrderClickCount(orderClickCount + 1);
  };

  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'https://dev-api.offerripple.com';
  const token = useSelector((state: AuthState) => state.auth.token);
  const id = useSelector((state: AuthState) => state.auth.id);
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/admin/${id}`, { headers: headers })
      .then((res) => {
        setAdminName(res.data);
      })
      .then(() => {
        setLoaded(true);
      })
      .catch((err) => {
        console.log(err);
        navigate('/admin/login');
      });
  }, []);

  return (
    <Div>
      {loaded ? (
        <>
          <Sidebar
            handleUserClick={handleUserClick}
            handlePostClick={handlePostClick}
            handleOrderClick={handleOrderClick}
            setPageTitle={setPageTitle}
          />
          <BoardContainer
            contentType={contentType}
            pageTitle={pageTitle}
            userClickCount={userClickCount}
            postClickCount={postClickCount}
            orderClickCount={orderClickCount}
            handleUserClick={handleUserClick}
            handlePostClick={handlePostClick}
            handleOrderClick={handleOrderClick}
            adminName={adminName}
            setUserClickCount={setUserClickCount}
            setPostClickCount={setPostClickCount}
            setOrderClickCount={setOrderClickCount}
          />
        </>
      ) : (
        <AdminBoardLoading />
      )}
    </Div>
  );
};

export default AdminBoard;
