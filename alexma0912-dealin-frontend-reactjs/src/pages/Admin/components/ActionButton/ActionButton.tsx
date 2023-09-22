import { Div, Button } from './styledActionButton';
import { Dispatch, SetStateAction } from 'react';
import axios from 'axios';
import { AuthState } from '../../../../reducers/tokenReducer';
import { useSelector } from 'react-redux';

interface ActionButtonProps {
  is_deactivate?: boolean;
  id?: string;
  userClickCount: number;
  setUserClickCount: Dispatch<SetStateAction<number>>;
}

const ActionButton = ({
  is_deactivate,
  id,
  userClickCount,
  setUserClickCount,
}: ActionButtonProps) => {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'https://dev-api.offerripple.com';
  const token = useSelector((state: AuthState) => state.auth.token);
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  // console.log(id);

  const handleReactiveClick = () => {
    axios
      .put(`${BACKEND_URL}/api/v1/users/activate/${id}`, {}, { headers: headers })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setUserClickCount(userClickCount + 1);
  };

  const handleDeactiveClick = () => {
    axios
      .put(`${BACKEND_URL}/api/v1/users/deactivate/${id}`, {}, { headers: headers })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setUserClickCount(userClickCount + 1);
  };

  return (
    <Div>
      {is_deactivate ? (
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

export default ActionButton;
