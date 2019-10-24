export default {
  get() {
    return localStorage.getItem('access_token');
  },
  set(token) {
    localStorage.setItem('access_token', token);
  },
  remove() {
    localStorage.removeItem('access_token');
  },
}