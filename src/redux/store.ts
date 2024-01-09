// src/redux/store.ts

import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'

export interface Task {
  label: string
  created: string
  timer: number
  id: string
  isCompleted: boolean
  isEditing: boolean
}

export interface TasksState {
  tasks: Task[]
}

const initialState: TasksState = {
  tasks: [
    {
      label: 'Сделать покупки',
      created: '2024-01-01',
      timer: 0,
      id: '1',
      isCompleted: false,
      isEditing: false,
    },
    {
      label: 'Подготовить презентацию',
      created: '2024-01-02',
      timer: 0,
      id: '2',
      isCompleted: false,
      isEditing: false,
    },
    {
      label: 'Записаться на курс',
      created: '2024-01-03',
      timer: 0,
      id: '3',
      isCompleted: false,
      isEditing: false,
    },
  ],
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload)
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      const taskId = action.payload
      state.tasks = state.tasks.map((task) => (task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task))
    },
  },
})

const store = configureStore({
  reducer: tasksSlice.reducer,
})

export const { addTask, toggleTask } = tasksSlice.actions
export default store
