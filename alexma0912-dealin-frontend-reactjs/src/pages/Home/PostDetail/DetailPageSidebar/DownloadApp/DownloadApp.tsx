import { AppContainer, Title, Image } from './styledDownloadApp';
import ad from './images/GoogleAdPhoto.jpeg';
const DownloadApp = () => {
  return (
    <AppContainer>
      <Title>DownloadApp</Title>
      <Image src={ad} alt="" />
    </AppContainer>
  );
};
export default DownloadApp;
