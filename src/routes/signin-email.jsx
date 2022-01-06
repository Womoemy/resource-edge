import React from 'react';
import './signin-email.css';
import LogoMini from '../assets/logomini.svg';
import LogoFull from '../assets/logofull.svg';
import check from '../assets/check.svg';
import bgL from '../assets/bgleft.svg';
import bgR from '../assets/bgright.svg';
import { Link } from 'react-router-dom';

const emailRegex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,5})$/; 

class SignInMail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      emailErr: "",
      displayCheck: 'none'
    }
    this.validateEmail = this.validateEmail.bind(this);
  }

  validateEmail(e) {
    let email = e.target.value;
    let emailErr = "";
    let displayCheck = "none";

    if(!email) { 
        emailErr = "Email required";
    } else if(!emailRegex.test(email)) {
        emailErr = "Re-enter email!";
    } else {
        displayCheck = "inline-block";
    }

    this.setState({
        email: email,
        emailErr: emailErr,
        displayCheck: displayCheck
    });
  }

  render(){
    return(
      <>
        <div className='loginCard'>
          <div className='logos'>
              <img className='logo' src={LogoMini} alt='' />
              <img className='logo' src={LogoFull} alt='' />
          </div>
          <div className='loginForm'>
              <div className='formTitle'>
                  <h3>Log in</h3>
                  <p>Access your resource edge account</p>
              </div>
              <div className='formBody'>
                <label htmlFor='email'>Email Address</label>
                <div className='formInput'>
                    <input
                        type='email'
                        id='email'
                        placeholder='Enter email'
                        onBlur={this.validateEmail}
                        onChange={this.validateEmail} />
                    <img id='checkImg' style={{ display: this.state.displayCheck }} src={check} alt='' />
                </div>
                <p className='errMsg'>{this.state.emailErr}</p>
                <Link to='/signin-password' style={{textDecoration: 'none'}}>
                    <button className='btn login'>Log in</button>
                </Link>
              </div>
              <hr/>
              <Link to='/resetpassword' style={{textDecoration: 'none'}}>
                <p className='forgotPwd'>Forgot password?</p>
              </Link>
          </div>    
        </div>
        <img className='bgImgL' src={bgL} alt='' />
        <img className='bgImgR' src={bgR} alt='' />
      </>
    );
  }
}
export default SignInMail;