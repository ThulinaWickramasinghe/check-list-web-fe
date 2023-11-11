import data from '@/__mocks__/tasks/tasks.json';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: data,
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    toggleStatus(state, action) {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          task.status = task.status === 'todo' ? 'done' : 'todo';
        }

        return task;
      });
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    addTask(state, action) {
      state.tasks = [
        {
          id: `TASK-${initialState.tasks.length}`,
          title: action.payload.title,
        },
        ...state.tasks,
      ];
    },
    editTask(state, action) {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          task.title = action.payload.title;
        }
        return task;
      });
    },
  },
});

export const { toggleStatus, deleteTask, addTask, editTask } =
  taskSlice.actions;
