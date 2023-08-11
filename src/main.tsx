import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { inject } from '@vercel/analytics';
import '@/components/Amimations/three.js'
 
inject();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
