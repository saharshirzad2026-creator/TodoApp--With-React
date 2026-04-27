import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DoneTodo from './pages/DonePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/done" element={<DoneTodo/>}/>
       </Routes>
    </BrowserRouter>
  </StrictMode>,
)
