import axios from 'axios';
import AuthToken from '@/utils/AuthToken';

export default function() {
  axios.interceptors.request.use(request => {
    if (request.url.includes('https://cloud-api.yandex.net:443/v1/disk')) {
      request.headers['Authorization'] = `OAuth ${AuthToken.get()}`;
    }
    return request;
  });
}