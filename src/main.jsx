import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import { TonConnectUIProvider } from '@tonconnect/ui-react'

createRoot(document.getElementById('root')).render(
  <TonConnectUIProvider manifestUrl="https://localhost:5173//tonconnect-manifest.json">
    <StrictMode>
      <App />
    </StrictMode>
  </TonConnectUIProvider>


)
