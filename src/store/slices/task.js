import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import taskService from '@/store/services/task';

const initialState = {
  tasks: [],
  isLoading: true,
  message: '',
  addTaskIsSuccess: false,
  removeTaskIsSuccess: false,
  getAllTasksIsSuccess: false,
  toggleTaskStatusIsSuccess: false,
  updateTaskDescriptionIsSuccess: false,
};

export const addTask = createAsyncThunk(
  'tasks/create',
  async (taskData, thunkAPI) => {
    try {
      // const token = thunkAPI.getState().auth.user.token;
      const token = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
      return await taskService.createTask(taskData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getAllTasks = createAsyncThunk(
  'tasks/getAll',
  async (_, thunkAPI) => {
    try {
      // const token = thunkAPI.getState().auth.user.token;
      const token = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
      return await taskService.getAllTasks(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getTask = createAsyncThunk(
  'tasks/get',
  async (taskId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await taskService.getTaskById(taskId, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const toggleTaskStatus = createAsyncThunk(
  'tasks/toggleStatus',
  async (taskData, thunkAPI) => {
    try {
      // const token = thunkAPI.getState().auth.user.token;
      const token = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
      return await taskService.toggleTaskStatusById(taskData._id, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateTaskDescription = createAsyncThunk(
  'tasks/updateDescription',
  async (taskData, thunkAPI) => {
    try {
      // const token = thunkAPI.getState().auth.user.token;
      const token = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

      return await taskService.updateTaskDescriptionById(
        taskData._id,
        taskData.description,
        token
      );
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const removeTask = createAsyncThunk(
  'tasks/delete',
  async (taskId, thunkAPI) => {
    try {
      // const token = thunkAPI.getState().auth.user.token;
      const token = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
      return await taskService.deleteTaskById(taskId, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.addTaskIsSuccess = true;
        state.tasks = [...state.tasks, action.payload];
      })
      .addCase(addTask.rejected, (state, action) => {
        state.isLoading = false;
        state.addTaskIsSuccess = false;
        state.message = action.payload;
      })
      .addCase(getAllTasks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tasks = [...action.payload];
        state.getAllTasksIsSuccess = true;
      })
      .addCase(getAllTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.getAllTasksIsSuccess = false;
        state.message = action.payload;
      })
      .addCase(removeTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeTask.fulfilled, (state, action) => {
        state.isLoading = false;

        state.tasks = state.tasks.filter(
          (task) => task._id !== action.payload._id
        );

        state.removeTaskIsSuccess = true;
      })
      .addCase(removeTask.rejected, (state, action) => {
        state.isLoading = false;
        state.removeTaskIsSuccess = false;
        state.message = action.payload;
      })
      .addCase(toggleTaskStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(toggleTaskStatus.fulfilled, (state, action) => {
        state.isLoading = false;

        state.tasks = state.tasks.map((task) => {
          if (task._id === action.payload._id) {
            task.status = action.payload.status;
          }

          return task;
        });

        state.toggleTaskStatusIsSuccess = true;
        return state;
      })
      .addCase(toggleTaskStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.toggleTaskStatusIsSuccess = false;
        state.message = action.payload;
      })
      .addCase(updateTaskDescription.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateTaskDescription.fulfilled, (state, action) => {
        state.isLoading = false;

        state.tasks = state.tasks.map((task) => {
          if (task._id === action.payload._id) {
            task.description = action.payload.description;
          }

          return task;
        });

        state.updateTaskDescriptionIsSuccess = true;
      })
      .addCase(updateTaskDescription.rejected, (state, action) => {
        state.isLoading = false;
        state.updateTaskDescriptionIsSuccess = false;
        state.message = action.payload;
      });
  },
});

// export const taskSlice = createSlice({
//   name: 'task',
//   initialState,
//   reducers: {
//     toggleStatus(state, action) {
// state.tasks = state.tasks.map((task) => {
//   if (task.id === action.payload.id) {
//     task.status = task.status === 'todo' ? 'done' : 'todo';
//   }

//   return task;
// });
//     },
//     deleteTask(state, action) {
//       state.tasks = state.tasks.filter((task) => task.id !== action.payload);
//     },
//     addTask(state, action) {
//       state.tasks = [
//         {
//           id: `TASK-${initialState.tasks.length}`,
//           title: action.payload.title,
//         },
//         ...state.tasks,
//       ];
//     },
//     editTask(state, action) {
//       state.tasks = state.tasks.map((task) => {
//         if (task.id === action.payload.id) {
//           task.title = action.payload.title;
//         }
//         return task;
//       });
//     },
//   },
// });

export const { reset } = taskSlice.actions;
export default taskSlice.reducer;
