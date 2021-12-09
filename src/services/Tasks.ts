import axiosInstance from './axios';
import { AxiosResponse } from 'axios';
import Task from '@/interfaces/Task';

export const getAll = async (): Promise<
  AxiosResponse<Task[], string | number>
> => await axiosInstance.get('/tasks');
export const create = async (
  task: Task
): Promise<AxiosResponse<Task[], string | number>> =>
  await axiosInstance.post('/tasks', task);
export const getById = async (
  id: number
): Promise<AxiosResponse<Task, string | number>> =>
  await axiosInstance.get(`/tasks/${id}`);
export const update = async (
  id: number,
  task: Task
): Promise<AxiosResponse<Task, string | number>> =>
  await axiosInstance.put(`/tasks/${id}`, task);
export const del = async (
  id: number
): Promise<AxiosResponse<Task, string | number>> =>
  await axiosInstance.delete(`/tasks/${id}`);
