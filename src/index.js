import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Dashboard from './routes/dashboard';
import SignInMail from './routes/signin-email';
import SignInPswd from './routes/signin-password';
import ResetPassword from './routes/resetpassword';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/signin-email" element={<SignInMail />} />
        <Route path="/signin-password" element={<SignInPswd />} />
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/resetpassword" element={<ResetPassword />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

