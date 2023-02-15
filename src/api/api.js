import axios from 'axios';
// const axios = require('axios');

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '4cea6ad3-6ebd-4af9-90c6-94d117110aca',
  },
});
const MyInstance = axios.create({
  baseURL: 'http://localhost:5000/api/',
  headers: {},
});
export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put('profile/status', { status });
  },
};

const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(
      `users?page=${currentPage}&count=${pageSize}`,
    );
  },
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
  getProfile(userId) {
    console.warn('Obsolete method, Please use profileAPI');
    return profileAPI.getProfile(userId);
  },
};

export const authAPI = {
  registration(userName, password, firstName, lastName, email) {
    return MyInstance.post('registration', {
      userName, password, firstName, lastName, email,
    });
  },
  login(login, password) {
    return MyInstance.post('login', { login, password });
  },
  logout() {
    return instance.delete('auth/login');
  },
};
export default usersAPI;
