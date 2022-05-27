import React from 'react';
import ReactDOM from 'react-dom/client';
import { LandingApp } from './LandingApp';
import reportWebVitals from './reportWebVitals';

import './styles/styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LandingApp />
  </React.StrictMode>
);
reportWebVitals();
