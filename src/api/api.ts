import axios from 'axios';
import { IContactAPI } from './IApi';

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
export const contactAPI: IContactAPI = {
  getFriends({ token, id }, perPage = 'all') {
    return makeInstanceWithToken(token).get(`friends?perPage=${perPage}&id=${id}`);
  },
  getSubscribers({ token, id }, perPage = 'all') {
    return makeInstanceWithToken(token).get(`subscribers?perPage=${perPage}&id=${id}`);
  },
  getSubscriptions({ token, id }, perPage = 'all') {
    return makeInstanceWithToken(token).get(`subscriptions?perPage=${perPage}&id=${id}`);
  },
};
export const profileAPI = {
  getInfoAuthUser(token: string) {
    return makeInstanceWithToken(token).get('profile/user');
  },
  getOne({ token, id }: { token: string, id: string }) {
    return makeInstanceWithToken(token).get(`/user/${id}`);
  },
  updateStatus({ status, token }: { status: string, token: string }) {
    return makeInstanceWithToken(token).put('profile/status', { status });
  },
};
export const postAPI = {
  getAllPosts({ token, id } :{ token: string, id: string }) {
    return makeInstanceWithToken(token).get(`profile/posts/${id}`);
  },
  getAllComments({ token, id } :{ token: string, id: string }) {
    return makeInstanceWithToken(token).get(`/profile/posts/comments/${id}`);
  },
  getOnePost({ id, token }: { id: string, token: string }) {
    return makeInstanceWithToken(token).get(`profile/posts/${id}`);
  },
  sendComment({ token, message, id }: { message: string, token: string, id: string }) {
    return makeInstanceWithToken(token).post('/profile/posts/comment/create', { message, id });
  },
  addPost({ newMessageText, token }: { newMessageText: string, token: string }) {
    return makeInstanceWithToken(token).post('profile/posts', { newMessageText });
  },
  deletePost({ id, token }: { id: string, token: string }) {
    return makeInstanceWithToken(token).delete(`/profile/posts/delete/${id}`);
  },
  updatePost({ id, token, content }: { content: string, id: string, token: string }) {
    return makeInstanceWithToken(token).put(`/profile/posts/update/${id}`, { content });
  },
  setLike({ id, token }: { id: string, token: string }) {
    return makeInstanceWithToken(token).post(`profile/posts/like/${id}`);
  },
  deleteLike({ id, token }: { id: string, token: string }) {
    return makeInstanceWithToken(token).delete(`profile/posts/unlike/${id}`);
  },
};
export const usersAPI = {
  requestUsers({ currentPage, pageSize, token }: { pageSize: number, currentPage: number, token: string }) {
    return makeInstanceWithToken(token).get(
      `/users?page=${currentPage}&count=${pageSize}`,
    );
  },
  getUserInfo({ id, token }: { token: string, id: string }) {
    return makeInstanceWithToken(token).get(
      `/user/${id}`,
    );
  },
};
export const settingsAPI = {
  changeLang({ lang, token }: { lang: string, token: string }) {
    return makeInstanceWithToken(token).put('/settings/language', { lang });
  },
  getLang(token: string) {
    return makeInstanceWithToken(token).get('/settings/language');
  },
  changePassword({ newPassword, token }: { newPassword: string, token: string }) {
    return makeInstanceWithToken(token).put('/settings/password', { newPassword });
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
