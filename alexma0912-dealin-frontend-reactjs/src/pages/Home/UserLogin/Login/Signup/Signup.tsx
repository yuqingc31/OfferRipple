import ContentContainer from './ContentContainer';
import { Dispatch, SetStateAction } from 'react';

export interface ContentContainerProps {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

const Signup = ({ setIsLogin }: ContentContainerProps) => {
  return (
    <>
      <ContentContainer setIsLogin={setIsLogin} />
    </>
  );
};

export default Signup;
