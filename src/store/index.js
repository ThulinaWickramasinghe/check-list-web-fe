import { configureStore } from '@reduxjs/toolkit';
import { taskSlice } from './slices/task';

// config the store
export const store = configureStore({
  reducer: {
    task: taskSlice.reducer,
  },
});

// export default the store
export default store;
