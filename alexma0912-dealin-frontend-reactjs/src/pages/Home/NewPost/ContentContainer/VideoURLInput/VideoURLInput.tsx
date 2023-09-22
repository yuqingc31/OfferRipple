import { Div, CustomTextField } from './styledVideoURLInput';

const VideoURLInput = ({
  handleVideoUrl,
  videoURL,
}: {
  handleVideoUrl: (inputData: string) => void;
  videoURL: string;
}) => {
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleVideoUrl(e.target.value);
  };
  return (
    <>
      <Div>Video URL:</Div>
      <CustomTextField id="outlined-size-normal" onChange={handleOnchange} value={videoURL} />
    </>
  );
};

export default VideoURLInput;
