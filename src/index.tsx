import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Home } from './components/screens/Home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Home  />
  </React.StrictMode>
);

