// src/redux/store.ts

import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'

interface TasksState {
  tasks: string[]
}

export interface RootState {
  tasks: TasksState
}

const initialState: TasksState = {
  tasks: [],
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.tasks.push(action.payload)
    },
    toggleTask: (state, action: PayloadAction<number>) => {
      const index = action.payload
      state.tasks[index] = `✅ ${state.tasks[index]}`
      return { ...state }
    },
  },
})

const store = configureStore({
  reducer: tasksSlice.reducer,
})

export const { addTask, toggleTask } = tasksSlice.actions
export default store
