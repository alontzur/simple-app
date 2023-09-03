import React from 'react'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import RecoilizeDebugger from 'recoilize';
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <RecoilizeDebugger />
      <App />
    </RecoilRoot>
  </React.StrictMode>,
)
