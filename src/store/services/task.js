import axios from 'axios';

const BASE_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/tasks/v1`;

const config = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

const createTask = async (taskData, token) => {
  const response = await axios.post(BASE_URL + '/', taskData, config(token));

  return response.data.data;
};

const getAllTasks = async (token) => {
  const response = await axios.get(BASE_URL + '/', config(token));

  return response.data.data;
};

const getTaskById = async (taskId, token) => {
  const response = await axios.get(BASE_URL + '/' + taskId, config(token));

  return response.data.data;
};

const toggleTaskStatusById = async (taskId, token) => {
  const response = await axios.patch(BASE_URL + '/' + taskId + '/status', {} ,config(token));

  return response.data.data;
};

const updateTaskDescriptionById = async (taskId, taskDescription, token) => {
  const response = await axios.patch(BASE_URL + '/' + taskId + '/description', {Description : taskDescription}, config(token));

  return response.data.data;
};

const deleteTaskById = async (taskId, token) => {
  await axios.delete(BASE_URL + '/' + taskId, config(token));
  return { _id: taskId };
};

const taskService = {
  createTask,
  getAllTasks,
  getTaskById,
  toggleTaskStatusById,
  updateTaskDescriptionById,
  deleteTaskById,
};

export default taskService;
