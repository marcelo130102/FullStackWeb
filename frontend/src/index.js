import React from 'react';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//importamos bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
axios.defaults.baseURL = "https://app-backend-nsolver.herokuapp.com/"

// 👇️ if you use TypeScript, add non-null (!) assertion operator
// const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
