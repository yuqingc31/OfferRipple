import { Div, Button } from './styledPostActionButton';
import { Dispatch, SetStateAction } from 'react';
import axios from 'axios';
import { AuthState } from '../../../../reducers/tokenReducer';
import { useSelector } from 'react-redux';

interface PostActionButtonProps {
  banned?: boolean;
  id?: string;
  postClickCount: number;
  setPostClickCount: Dispatch<SetStateAction<number>>;
}

const PostActionButton = ({
  banned,
  id,
  postClickCount,
  setPostClickCount,
}: PostActionButtonProps) => {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'https://dev-api.offerripple.com';
  const token = useSelector((state: AuthState) => state.auth.token);
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  // console.log(id);

  const handleReactiveClick = () => {
    axios
      .put(`${BACKEND_URL}/api/v1/posts/unban/${id}`, {}, { headers: headers })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setPostClickCount(postClickCount + 1);
  };

  const handleDeactiveClick = () => {
    axios
      .put(`${BACKEND_URL}/api/v1/posts/banned/${id}`, {}, { headers: headers })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setPostClickCount(postClickCount + 1);
  };

  return (
    <Div>
      {banned ? (
        <Button className="reactiveBtn" onClick={handleReactiveClick}>
          Reactive
        </Button>
      ) : (
        <Button className="deactiveBtn" onClick={handleDeactiveClick}>
          Deactive
        </Button>
      )}
    </Div>
  );
};

export default PostActionButton;
