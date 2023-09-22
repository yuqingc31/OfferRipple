import { Div, Span } from './styledEmail';

interface EmailType {
  email?: string;
}

const Email = ({ email }: EmailType) => {
  return (
    <Div>
      <Span>{email}</Span>
    </Div>
  );
};

export default Email;
