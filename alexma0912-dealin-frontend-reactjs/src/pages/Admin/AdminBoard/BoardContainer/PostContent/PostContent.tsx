import { Div, NoResult } from '../../../components/styledAdminBoardContent/styledAdminBoardContent';
import PostContentTitleList from './PostContentTitleList';
import PostContentList from './PostContentList';
import BoardContainerPaginationList from '../BoardContainerPaginationList';
import { BoardContainerProps } from '../BoardContainer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthState } from '../../../../../reducers/tokenReducer';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import AdminBoardLoading from '../../../../../components/AdminBoardLoading';
import { UserType } from '../UserContent/UserContent';

export interface PostType {
  _id: string;
  author: UserType;
  title: string;
  created_at: string;
  promotion_end_date: string;
  category: string;
  banned: boolean;
}

const PostContent = ({ postClickCount, setPostClickCount }: BoardContainerProps) => {
  const [loaded, setLoaded] = useState(true);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState('');

  const token = useSelector((state: AuthState) => state.auth.token);

  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'https://dev-api.offerripple.com';
  const navigate = useNavigate();
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/posts?page=${page}&search=${search}`, { headers: headers })
      .then((res) => {
        setPosts(res.data.slicedPosts);
        setTotalPages(res.data.totalPages);
      })
      .then(() => {
        setLoaded(true);
      })
      .catch((err) => {
        console.log(err);
        navigate('/admin/login');
      });
  }, [postClickCount, page]);

  console.log(posts);

  return (
    <Div>
      {loaded ? (
        <>
          <PostContentTitleList
            search={search}
            setSearch={setSearch}
            setPostClickCount={setPostClickCount}
            postClickCount={postClickCount}
          />
          <Div className="ListContainer">
            {posts.length !== 0 ? (
              posts.map((post: PostType) => (
                <PostContentList
                  key={post._id}
                  post={post}
                  setPostClickCount={setPostClickCount}
                  postClickCount={postClickCount}
                />
              ))
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
export default PostContent;
