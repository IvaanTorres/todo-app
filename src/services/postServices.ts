import axiosInstance from './axios';
import {AxiosResponse} from 'axios';
import Post from '@/interfaces/Post';

export const getAll = async (): Promise<AxiosResponse<Post[], string|number>> => await axiosInstance.get('/posts');
export const create = async (post: Post): Promise<AxiosResponse<Post[], string|number>> => await axiosInstance.post('/posts', post);
export const getById = async (id: number): Promise<AxiosResponse<Post, string|number>> => await axiosInstance.get(`/posts/${id}`);
export const update = async (id: number, post: Post): Promise<AxiosResponse<Post, string|number>> => await axiosInstance.put(`/posts/${id}`, post);