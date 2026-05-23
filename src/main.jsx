import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DoneTodo from './pages/DonePage.jsx'
import { BrowserRouter, Routes } from 'react-router-dom'
import { Route } from 'lucide-react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </StrictMode>,
)
