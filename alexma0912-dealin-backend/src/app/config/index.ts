import dotenv from 'dotenv';

dotenv.config();
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

const config = {
  port: process.env.PORT || 8080,
  api: {
    prefix: process.env.API_PREFIX || '/api/v1',
  },
  aws: {
    aws_region: process.env.M3_REGION || 'ap-southeast-2',
    aws_bucket_name: process.env.M3_BUCKET_NAME || 'dealin',
    aws_access_key_id: process.env.M3_ACCESS_KEY_ID || '',
    aws_secret_access_key: process.env.M3_SECRET_ACCESS_KEY || '',
    aws_save_path: process.env.M3_SAVE_PATH || 'avatars/',
  },
  google_map_api: process.env.GOOGLE_MAP_API,
};

export default config;
