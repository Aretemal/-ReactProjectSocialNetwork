import axios from 'axios';

const baseInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {},
});
const makeInstanceWithToken = (token: string) => axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: { Authorization: token },
});
export const dialogAPI = {
  sendMessage({ token, id, message }: { id: string, token: string, message: string }) {
    return makeInstanceWithToken(token).post(`dialog/message/${id}`, { message });
  },
  getAllMessages({ token, id }: { id: string, token: string }) {
    return makeInstanceWithToken(token).get(`dialog/messages/${id}`);
  },
  getAllDialogs(token: string) {
    return makeInstanceWithToken(token).get('dialog/companion');
  },
};
export const profileAPI = {
  getInfoAuthUser(token: string) {
    return makeInstanceWithToken(token).get('profile/user');
  },
  updateStatus({ status, token }: { status: string, token: string }) {
    return makeInstanceWithToken(token).put('profile/status', { status });
  },
};
export const postAPI = {
  getAllPosts(token: string) {
    return makeInstanceWithToken(token).get('profile/posts');
  },
  addPost({ newMessageText, token }: { newMessageText: string, token: string }) {
    return makeInstanceWithToken(token).post('profile/posts', { newMessageText });
  },
};
export const usersAPI = {
  requestUsers({ currentPage, pageSize, token }: { pageSize: number, currentPage: number, token: string }) {
    return makeInstanceWithToken(token).get(
      `/users?page=${currentPage}&count=${pageSize}`,
    );
  },
};
export const followAPI = {
  follow({ id, token }: { id: string, token: string }) {
    return makeInstanceWithToken(token).post('follow', { id });
  },
  approve({ id, token }: { id: string, token: string }) {
    return makeInstanceWithToken(token).put('approve', { id });
  },
  unfollow({ id, token }: { id: string, token: string }) {
    return makeInstanceWithToken(token).put('unfollow', { id });
  },
};

export const authAPI = {
  registration(data: { firstName: string, lastName: string, email: string, login: string, password: string }) {
    return baseInstance.post('registration', { ...data });
  },
  authentication(data: { login: string, password: string }) {
    return baseInstance.post('login', { ...data });
  },
};
