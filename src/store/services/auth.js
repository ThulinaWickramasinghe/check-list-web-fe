'use client';

import axios from 'axios';

const BASE_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/v1`;

const register = async (userData) => {
  const response = await axios.post(BASE_URL + '/register', userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data.data;
};

const login = async (userData) => {
  const response = await axios.post(BASE_URL + '/login', userData).then();

  if (response?.data?.data) {
    localStorage.setItem('user', JSON.stringify(response.data.data));
  }

  return response.data.data;
};

const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
