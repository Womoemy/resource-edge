import React from 'react';
import './signin-password.css';
import LogoMini from '../assets/logomini.svg';
import LogoFull from '../assets/logofull.svg';
import hide from '../assets/watch.svg';
import show from '../assets/watch-filled.svg';
import bgL from '../assets/bgleft.svg';
import bgR from '../assets/bgright.svg';
import { Link } from 'react-router-dom';

const pswdRegex = /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/;

class SignInPswd extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    pswd: "",
    pswdErr: "",
    toggle: false
    // setToggle: "false"
    }
    this.isPswdValid = this.isPswdValid.bind(this);
    this.showOrHidePswd = this.showOrHidePswd.bind(this);
  }

  showOrHidePswd() {
    this.setState(isToggleOn => ({
      toggle: !isToggleOn.toggle
      
    }));
  }
  isPswdValid(e) {
    let pswd = e.target.value;
    let pswdErr = "";

    if(!pswd) {
      pswdErr = "Password required";
    } else if (!pswdRegex.test(pswd)) {
      pswdErr = "Enter a valid password!";
    } 

    this.setState({
      pswd: pswd,
      pswdErr: pswdErr
    });
  }

  render() {
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
              <div className='userDetails' >
                  <h4>Ositadinma Nwangwu</h4>
                  <p>o.nwangwu@genesystechhub.com</p>
              </div>
              <div className='formBody'>
                <label htmlFor='password' >Password</label>
                <div className='formInput'>
                    <input
                        type={this.state.toggle ? "text" : "password"}
                        id='password'
                        placeholder='Enter password'
                        onBlur={this.isPswdValid}
                        onChange={this.isPswdValid} 
                    />
                    <span id='showOrHidePswd' onClick={this.showOrHidePswd}>
                      {this.state.toggle ? <img  src={show} alt=''/> : <img src={hide} alt=''/>}
                    </span>
                </div>
                <p className='errMsg'>{this.state.pswdErr}</p>
                <Link to='/dashboard' style={{textDecoration: 'none'}}>
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

export default SignInPswd;