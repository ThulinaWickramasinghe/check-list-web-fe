import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state, action) {
      state.user = {};
    },
    login(state, action) {
      state.user = action.payload;
    },
  },
});

export const { login, logout } = authSlice.actions;
