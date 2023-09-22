import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'https://dev-api.offerripple.com';
const instance = axios.create({ baseURL: `${BACKEND_URL}/api/v1` });
instance.defaults.headers.common['Content-Type'] = 'multipart/form-data';
instance.defaults.headers.common['Accept'] = 'application/json';

export default instance;
