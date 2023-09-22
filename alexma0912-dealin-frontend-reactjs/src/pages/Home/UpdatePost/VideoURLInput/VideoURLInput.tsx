import { Div, CustomTextField } from './styledVideoURLInput';
import { useState } from 'react';

const VideoURLInput = ({
  handleVideoUrl,
  videoURL,
}: {
  handleVideoUrl: (inputData: string) => void;
  videoURL: string;
}) => {
  const [videoInput, setvideoInput] = useState<string>('');
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleVideoUrl(e.target.value);
    setvideoInput(e.target.value);
  };
  return (
    <>
      <Div>Video URL:</Div>
      <CustomTextField
        id="outlined-size-normal"
        onChange={handleOnchange}
        value={videoInput || videoURL}
      />
    </>
  );
};

export default VideoURLInput;
