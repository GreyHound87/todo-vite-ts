// src/redux/store.ts

import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'

export interface TasksState {
  tasks: string[]
}

const initialState: TasksState = {
  tasks: ['Сделать покупки', 'Подготовить презентацию', 'Записаться на курс'],
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
      const updatedTasks = [...state.tasks]
      updatedTasks[index] = `✅ ${updatedTasks[index]}`
      return { ...state, tasks: updatedTasks }
    },
  },
})

const store = configureStore({
  reducer: tasksSlice.reducer,
})

export const { addTask, toggleTask } = tasksSlice.actions
export default store
