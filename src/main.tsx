import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
// context
import { ResultProvider } from './contextAPI/ResultContext.tsx'
import { InputProvider } from './contextAPI/InputContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ResultProvider>
        <InputProvider>
          <App />
        </InputProvider>
      </ResultProvider>
    </BrowserRouter>
  </StrictMode>,
)
