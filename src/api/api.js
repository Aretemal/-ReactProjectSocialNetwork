import axios from 'axios';
// const axios = require('axios');

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '4cea6ad3-6ebd-4af9-90c6-94d117110aca',
  },
});
const baseInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {},
});
const makeInstanceWithToken = (token) => axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: { Authorization: token },
});
export const profileAPI = {
  getInfoAuthUser(token) {
    return makeInstanceWithToken(token).get('profile/user');
  },
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  updateStatus(status, token) {
    return makeInstanceWithToken(token).put('profile/status', { status });
  },
  getAllPosts(token) {
    return makeInstanceWithToken(token).get('profile/posts');
  },
  addPost(newMessageText, token) {
    return makeInstanceWithToken(token).post('profile/posts', { newMessageText });
  },
};
export const usersAPI = {
  getUsers(currentPage, pageSize, token) {
    return makeInstanceWithToken(token).get(
      `/users?page=${currentPage}&count=${pageSize}`,
    );
  },
};
export const followAPI = {
  follow(userId) {
    return makeInstanceWithToken.post(`follow/${userId}`);
  },
  approve(userId) {
    return makeInstanceWithToken.put(`follow/${userId}`);
  },
  unfollow(userId) {
    return makeInstanceWithToken.delete(`follow/${userId}`);
  },
};

export const authAPI = {
  registration(userName, password, firstName, lastName, email) {
    return baseInstance.post('registration', {
      userName, password, firstName, lastName, email,
    });
  },
  login(login, password) {
    return baseInstance.post('login', { login, password });
  },
  logout() {
    return instance.delete('auth/login');
  },
};
