import axios from 'axios';

const BASE_URL = `${process.env.BACKEND_URL}/tasks/v1`;

const config = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

const createTask = async (taskData, token) => {
  const response = await axios.post(BASE_URL + '/', taskData, config(token));

  return response.data;
};

const getAllTasks = async (token) => {
  const response = await axios.get(BASE_URL + '/', config(token));

  return response.data;
};

const getTaskById = async (taskId, token) => {
  const response = await axios.get(BASE_URL + '/' + taskId, config(token));

  return response.data;
};

const updateTaskById = async (task, token) => {
  const response = await axios.put(BASE_URL + '/', task.ID, config(token));

  return response.data;
};

const deleteTaskById = async (taskId, token) => {
  const response = await axios.delete(BASE_URL + '/' + taskId, config(token));

  return response.data;
};

const taskService = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTaskById,
  deleteTaskById,
};

export default taskService;
