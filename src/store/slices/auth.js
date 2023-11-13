'use client';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from '@/store/services/auth';

if (typeof window !== 'undefined') {
  var user = JSON.parse(localStorage.getItem('user'));
}

const initialState = {
  user: user ?? null,
  isLoginError: false,
  isLoginSuccess: false,
  isRegistrationError: false,
  isRegistrationSuccess: false,
  isLoading: false,
  message: '',
};

export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      const message =
        error.response?.data?.message ?? error.message ?? error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    const message =
      error.response?.data?.message ?? error.message ?? error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const logout = createAsyncThunk('auth/logout', async () => {
  authService.logout();
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isLoginError = false;
      state.isLoginSuccess = false;
      (state.isRegistrationError = false),
        (state.isRegistrationSuccess = false),
        (state.message = '');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isRegistrationSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isRegistrationError = true;
        state.message = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.isLoginError = false;
        state.isLoginSuccess = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoginSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isLoginError = true;
        state.message = action.payload;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user = null;
        state.isLoginSuccess = false;
      });
  },
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
