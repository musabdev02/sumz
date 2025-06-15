import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
// context
import { ResultProvider } from './contextAPI/ResultContext.tsx'
import { InputProvider } from './contextAPI/InputContext.tsx'
import { ErrorProvider } from './contextAPI/ErrorContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ResultProvider>
        <ErrorProvider>
          <InputProvider>
            <App />
          </InputProvider>
        </ErrorProvider>
      </ResultProvider>
    </BrowserRouter>
  </StrictMode>,
)
