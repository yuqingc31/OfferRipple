import { Div, NoResult } from '../../../components/styledAdminBoardContent/styledAdminBoardContent';
import UserContentTitleList from './UserContentTitleList';
import UserContentList from './UserContentList';
import BoardContainerPaginationList from '../BoardContainerPaginationList';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthState } from '../../../../../reducers/tokenReducer';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import AdminBoardLoading from '../../../../../components/AdminBoardLoading';
import { BoardContainerProps } from '../BoardContainer';

export interface UserType {
  id: string;
  avatar: string;
  created_at: string;
  dcoin: number;
  email: string;
  is_banned: boolean;
  is_deactivate: boolean;
  updated_at: string;
  username: string;
  phone_number: string;
}

const UserContent = ({ userClickCount, setUserClickCount }: BoardContainerProps) => {
  const [loaded, setLoaded] = useState(true);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState('');

  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'https://dev-api.offerripple.com';
  const token = useSelector((state: AuthState) => state.auth.token);

  const navigate = useNavigate();
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/users?page=${page}&search=${search}`, { headers: headers })
      .then((res) => {
        setUsers(res.data.slicedUsers);
        setTotalPages(res.data.totalPages);
      })
      .then(() => {
        setLoaded(true);
      })
      .catch((err) => {
        console.log(err);
        navigate('/admin/login');
      });
  }, [userClickCount, page]);

  return (
    <Div>
      {loaded ? (
        <div>
          <UserContentTitleList
            search={search}
            setSearch={setSearch}
            setUserClickCount={setUserClickCount}
            userClickCount={userClickCount}
          />
          <Div className="ListContainer">
            {users.length !== 0 ? (
              users.map((user: UserType) => (
                <UserContentList
                  key={user.id}
                  user={user}
                  setUserClickCount={setUserClickCount}
                  userClickCount={userClickCount}
                />
              ))
            ) : (
              <NoResult>Sorry, No Result Found</NoResult>
            )}
          </Div>
          <BoardContainerPaginationList setPage={setPage} page={page} totalPages={totalPages} />
        </div>
      ) : (
        <AdminBoardLoading />
      )}
    </Div>
  );
};

export default UserContent;
