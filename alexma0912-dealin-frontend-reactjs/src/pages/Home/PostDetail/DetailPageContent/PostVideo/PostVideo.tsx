import ReactPlayer from 'react-player/lazy';
import { PlayerContainer } from './styledPostVideo';

const PostVideo = ({ videoURL }: { videoURL?: string }) => {
  return (
    <PlayerContainer>
      <ReactPlayer url={videoURL} width="100%" height="400px" />
    </PlayerContainer>
  );
};

export default PostVideo;
