import React, { useState } from 'react';
import { Uploader } from 'uploader';
import { UploadDropzone } from 'react-uploader';
import {
  Div,
  UploadImage,
  UploadImageCard,
  UploadImageContainer,
  UploadImageWrapper,
} from './styledImageUploadArea';

// Configure react-uploader...
const uploader = Uploader({ apiKey: 'public_kW15bbyFniGvgFdeFa6aUY7qXECf' });

const uploaderOptions = {
  multi: true,
  showFinishButton: true,
  maxFileCount: 4,
  maxFileSizeBytes: 1 * 1024 * 1024,
  styles: {
    colors: {
      primary: '#F85C70',
    },
  },
};

// Create a dropzone...
interface MyDropzoneProps {
  setFiles: React.Dispatch<React.SetStateAction<any[]>>;
}

const MyDropzone: React.FC<MyDropzoneProps> = ({ setFiles }) => (
  <Div className="uploadDropzoneContainer">
    <UploadDropzone
      uploader={uploader}
      options={uploaderOptions}
      onUpdate={(files) => console.log(`Files: ${files.map((x) => x.fileUrl).join('\n')}`)}
      onComplete={setFiles}
      width="100%"
      height="300px"
    />
  </Div>
);

// Display the uploaded files...
interface MyUploadedFilesProps {
  files: any[];
}

const MyUploadedFiles: React.FC<MyUploadedFilesProps> = ({ files }) => (
  <UploadImageContainer>
    <UploadImageCard>
      {files.map((file) => {
        const filePath = file.filePath;
        const fileUrl = uploader.url(filePath, 'thumbnail');
        return (
          <UploadImageWrapper key={fileUrl}>
            <UploadImage src={fileUrl} alt="filename" />
          </UploadImageWrapper>
        ) as React.ReactElement<any, any>;
      })}
    </UploadImageCard>
  </UploadImageContainer>
);

type Props = {
  imageData: (inputData: Array<any>) => void;
};
const ImageUploadArea: React.FC<Props> = ({ imageData }) => {
  const [files, setFiles] = useState<any[]>([]);
  if (files.length) imageData(files);
  return (
    <div>
      {files.length ? <MyUploadedFiles files={files} /> : <MyDropzone setFiles={setFiles} />}
    </div>
  );
};

export default ImageUploadArea;
