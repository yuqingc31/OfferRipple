import { PageContainer } from './styledDetailPageContent';
import Carousel from './Carousel/Carousel';
import Descriptions from './Descriptions/Descriptions';
import GoogleMap from '../../../../components/MapApp/MapApp';
import PostVideo from './PostVideo/PostVideo';

const DetailPageContent = ({
  postId,
  content,
  title,
  image,
  location,
  videoURL,
  authorId,
}: {
  postId: string | undefined;
  content: string | undefined;
  title: string | undefined;
  image: string[] | undefined;
  location: string | undefined;
  videoURL: string;
  authorId: string;
}) => {
  return (
    <PageContainer>
      <Descriptions postId={postId} content={content} title={title} authorId={authorId} />
      <Carousel image={image} />
      {videoURL ? <PostVideo videoURL={videoURL} /> : null}
      <GoogleMap location={location} />
    </PageContainer>
  );
};

export default DetailPageContent;
