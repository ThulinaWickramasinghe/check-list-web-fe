import { createSlice } from '@reduxjs/toolkit'
import data from '@/__mocks__/tasks/tasks.json'

const initialState = {
   tasks: data,
};

// create a slice 
export const taskSlice = createSlice({
   name: "task",
   initialState,
   reducers: {
      toggleStatus(state, action) {
         state.tasks = state.tasks.map(task => {
            if (task.id === action.payload.id) {
               task.status = action.payload.status
            }

            return task
         })
      },
      deleteTask(state,action){
         state.tasks = state.tasks.filter(task =>  task.id !== action.payload.id)
      },
      addTask(state,action){
         state.tasks = [action.payload,...state.tasks]
      }
   }
})

// export the action
export const taskAction = taskSlice.actions