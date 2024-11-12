import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CustomContextProvider from './photoContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CustomContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </CustomContextProvider>
);

