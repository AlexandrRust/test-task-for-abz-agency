import { apiInstance } from 'api';


export const getUsers = (page) => apiInstance.get(`/users?page=${page}&count=6`) 