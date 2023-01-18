import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '4cea6ad3-6ebd-4af9-90c6-94d117110aca',
  },
});

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
    return instance.get(`profile/${userId}`);
  },
};

export const authAPI = {
  me() {
    return instance.get('auth/me');
  },
};
export default usersAPI;
