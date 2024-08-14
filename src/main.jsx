import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './home/index.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
