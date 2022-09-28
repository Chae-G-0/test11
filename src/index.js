import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/common.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Refresh from './component/Refresh';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Refresh/>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
