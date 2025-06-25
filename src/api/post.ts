import axios from './axios'

export const getPostList = () => axios.get('/api/posts/')
export const createPost = (data: any) => axios.post('/api/posts/', data)
