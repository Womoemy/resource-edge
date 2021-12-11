import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './routes/dashboard';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="user/dashboard" element={<Hello/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

