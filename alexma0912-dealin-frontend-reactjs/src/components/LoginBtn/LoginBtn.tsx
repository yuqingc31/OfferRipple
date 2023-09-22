import { Div, Button } from './styledLoginBtn';

export interface LoginBtnProps {
  btnText: string;
}

const LoginBtn = ({ btnText }: LoginBtnProps) => {
  return (
    <Div className="LoginBtnContainer">
      <Button className="LoginBtn">{btnText}</Button>
    </Div>
  );
};

export default LoginBtn;
