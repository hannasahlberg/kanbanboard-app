import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BoardProvider } from './context/BoardContext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BoardProvider>
    <BrowserRouter basename="/kanbanboard-app">
    <App />
    </BrowserRouter>
  </BoardProvider>
)
