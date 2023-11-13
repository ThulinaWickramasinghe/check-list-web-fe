import { configureStore } from '@reduxjs/toolkit';
import { taskSlice } from './slices/task';
import { authSlice } from './slices/auth';

// config the store
export const store = configureStore({
  reducer: {
    task: taskSlice.reducer,
    auth: authSlice.reducer,
  },
});

// export default the store
export default store;
