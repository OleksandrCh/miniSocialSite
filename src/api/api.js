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
    },
    unFollowUser: (id) => {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    followUser: (id) => {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
};

export const profileAPI = {
    getProfileOfId: (idUser) => {
        return instance.get(`profile/${idUser}`)
    },
    me: () => {
       return instance.get(`auth/me`)
           .then(response => response.data)
    },
    getStatus: (userId) => {
        return instance.get(`/profile/status/${userId}`)
    },
    putStatus: (statusBody) => {
        return instance.put(`/profile/status`,{status: statusBody})
    }
};

