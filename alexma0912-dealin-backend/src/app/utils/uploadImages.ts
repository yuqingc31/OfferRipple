import config from '../config';
import { Upload } from '@aws-sdk/lib-storage';
import AWS_S3, { S3, CompleteMultipartUploadCommandOutput } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';

const s3 = new S3({
  region: config.aws.aws_region,
  credentials: {
    accessKeyId: config.aws.aws_access_key_id,
    secretAccessKey: config.aws.aws_secret_access_key,
  },
});

function uploadImageHandler(file: Express.Multer.File): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!config.aws.aws_access_key_id || !config.aws.aws_secret_access_key) {
      reject({ code: 500, msg: 'AWS credentials are not found from any provider.' });
      return;
    }

    if (!file) {
      reject({ code: 400, msg: 'No file is uploaded.' });
      return;
    }

    const params: AWS_S3.PutObjectCommandInput = {
      Bucket: config.aws.aws_bucket_name,
      Key: config.aws.aws_save_path + uuidv4() + file.originalname.slice(file.originalname.lastIndexOf('.')),
      Body: file.buffer,
      // ACL: 'public-read',
    };

    new Upload({
      client: s3,
      params,
    })
      .done()
      .then((data: CompleteMultipartUploadCommandOutput) => {
        const location: string | undefined = data?.Location;
        if (!location) {
          reject({ code: 500, msg: 'Failed to upload image to AWS S3. No URL returned.' });
          return;
        }
        resolve(location);
      })
      .catch((err) => {
        reject({ code: 500, msg: err.message });
      });
  });
}

export default uploadImageHandler;
