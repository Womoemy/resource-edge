import React from 'react';
import './resetpassword.css';
import LogoMini from '../assets/logomini.svg';
import LogoFull from '../assets/logofull.svg';
import error from '../assets/error.svg';

function ResetPassword() {
  return(
    <body>
      <div className='resetCard'>
        <div className='logos'>
          <img className='logo' src={LogoMini} alt='' />
          <img className='logo' src={LogoFull} alt='' />
        </div>
        <div className='resetForm'>
          <div className='formTitle'>
            <h3>Reset Password</h3>
            <p>The password should have atleast 6 characters</p>
          </div>
          <div>
            <div>
              <label for="newpswd">New Password</label>
              <input type="password" name="newpswd" placeholder="Enter password" />
              <p className='errmsg' style={{display: 'none'}}>
                <img src={error} alt='' />
                Enter Password
              </p>
            </div>
            <div>
              <label for="confampswd">Confirm Password</label>
              <input type="password" name="confampswd" placeholder="Confirm password" />
              <p className='errmsg' style={{display: 'none'}}>
                <img src={error} alt='' />
                Enter Password
              </p>
            </div>
            <button className='btn resetbtn'>Reset Password</button>
          </div>
          <hr/>
          <p className='bk2login'>Back to login</p>
        </div>
      </div>
    </body>   
  );
}

export default ResetPassword;