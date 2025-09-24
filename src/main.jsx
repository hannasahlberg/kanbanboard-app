import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { BoardProvider } from './context/BoardContext.jsx';

createRoot(document.getElementById('root')).render(
  <BoardProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </BoardProvider>
)
