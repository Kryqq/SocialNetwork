import axios from 'axios';

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      'API-KEY': '8fef2b78-2aab-47e8-b036-0d52e54939f0',
   },
});

export const usersAPI = {
   getUsers(currentPage: number, pageSize: number) {
      return instance
         .get(`users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true,
         })
         .then((response) => response.data);
   },
   setUserProfile(userId: string) {
      console.warn('need to refactor');
      return profileAPI.getProfile(userId);
   },
   unfollowUser(id: number) {
      return instance.delete(`follow/${id}`).then((response) => response.data);
   },

   followUser(id: number) {
      return instance.post(`follow/${id}`).then((response) => response.data);
   },
   setUserAuthData() {
      return instance.get(`auth/me`).then((response) => response.data);
   },
};

export const authAPI = {
   setUserAuthData() {
      return instance.get(`auth/me`).then((response) => response.data);
   },
};

export const profileAPI = {
   getProfile(userId: string) {
      return instance.get(`profile/${userId}`).then((response) => response.data);
   },
   getStatus(userId: string) {
      return instance.get(`profile/status/${userId}`);
   },
   updateStatus(status: string) {
      return instance.put(`profile/status`, { status: status });
   },
};
