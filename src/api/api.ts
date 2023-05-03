import axios from 'axios';

const baseInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {},
});
const makeInstanceWithToken = (token) => axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: { Authorization: token },
});
export const dialogAPI = {
  sendMessage({ token, id, message }) {
    return makeInstanceWithToken(token).post(`dialog/message/${id}`, { message });
  },
  getAllMessages({ token, id }) {
    return makeInstanceWithToken(token).get(`dialog/messages/${id}`);
  },
  getAllDialogs(token) {
    return makeInstanceWithToken(token).get('dialog/companion');
  },
};
export const profileAPI = {
  getInfoAuthUser(token) {
    return makeInstanceWithToken(token).get('profile/user');
  },
  updateStatus({ status, token }) {
    return makeInstanceWithToken(token).put('profile/status', { status });
  },
};
export const postAPI = {
  getAllPosts(token) {
    return makeInstanceWithToken(token).get('profile/posts');
  },
  addPost({ newMessageText, token }) {
    return makeInstanceWithToken(token).post('profile/posts', { newMessageText });
  },
};
export const usersAPI = {
  requestUsers({ currentPage, pageSize, token }) {
    return makeInstanceWithToken(token).get(
      `/users?page=${currentPage}&count=${pageSize}`,
    );
  },
};
export const followAPI = {
  follow({ id, token }) {
    return makeInstanceWithToken(token).post('follow', { id });
  },
  approve({ id, token }) {
    return makeInstanceWithToken(token).put('approve', { id });
  },
  unfollow({ id, token }) {
    return makeInstanceWithToken(token).put('unfollow', { id });
  },
};

export const authAPI = {
  registration(data) {
    return baseInstance.post('registration', { ...data });
  },
  authentication(data) {
    return baseInstance.post('login', { ...data });
  },
};
