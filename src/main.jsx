import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './home/index.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
