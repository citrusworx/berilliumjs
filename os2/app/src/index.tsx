import React from 'react';
import ReactDOM from 'react-dom/client';
import Desktop from './comp/desktop/desktop';
import Home from './comp/home/home'
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Desktop />
    <Home />
  </React.StrictMode>
);

