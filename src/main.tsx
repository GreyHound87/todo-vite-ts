// src/main.tsx

import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { StrictMode } from 'react'

import TodoApp from './components/todo-app.tsx'
import store from './redux/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <TodoApp />
    </Provider>
  </StrictMode>
)
