import * as axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "e03084a9-2232-4112-b031-bc0f6368206f"
    }
});

export const usersAPI = {
    getUsers: (currentPage, pageSize) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    }
};

export const followAPI = {
    unFollowUser: (user) => {
        return instance.delete(`follow/${user.id}`)
            .then(response => {
                return response.data
            })
    },

    followUser: (user) => {
        return instance.post(`follow/${user.id}`)
            .then(response => {
                return response.data
            })
    }
};

export const profileAPI = {
  getProfileOfId: (idUser, setUserProfile) => {
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${idUser}`)
          .then(response => {
              setUserProfile(response.data);
          });
  }
};
