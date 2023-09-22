import { Div } from './styled404Page';
import PageHeader from '../../../components/PageHeader';
import AboutTopImage from '../../../components/AboutTopImage/AboutTopImage';

const Page404 = () => {
  return (
    <Div>
      <PageHeader />
      <AboutTopImage lgText={'404'} smText={'Oops, Something went wrong'} />
    </Div>
  );
};

export default Page404;
