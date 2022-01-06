import React from 'react';
import './dashboard.css';
import hamMenu from '../assets/hammenu.svg';
import logoFull from '../assets/logofull.svg';
import avatar from '../assets/avatar.svg';
import circle from '../assets/circle-empty.svg';
import employee from '../assets/employee.svg';
import manager from '../assets/talentmanager.svg';
import check from '../assets/check.svg';


function Dropdown() {
    return (
        <div className='dropdown'>
          <div><h5 id='dropdown-title'>OSITADINMA NWANGWU</h5></div>
          <div><p>Profile</p></div>
          <div><h5>Use Resource Edge as</h5></div>
          <div className='dropdown-list'>
            <div className='dropdown-item'>
                <img src={manager} alt='' />
                <p>Talent Manager</p>
            </div>            
            <img className='check' src={check} alt='' />
          </div>
          <div className='dropdown-list'>
            <div className='dropdown-item'>
                <img src={employee} alt='' />
                <p>Employee</p> 
            </div>
          </div>
          <hr />
          <div><p>Logout</p></div>
        </div>
    );
}

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.handleAvatarClick = this.handleAvatarClick.bind(this);
        this.state = {clicked: false, displayDropdown: 'none'};
    }

    handleAvatarClick() {
        this.setState({clicked: !this.state.clicked, displayDropdown: 'block'})
    }

    render() {
        return (
            <div>          
                <nav className='navigbar'>
                    <div className='nav-items'>
                        <img className='menubttn' src={hamMenu} alt='' />
                        <img className='logo' src={logoFull} alt='' />
                        <p>|</p>
                        <p>TM Dashboard</p>
                    </div>
                    <div className='avatarbox' onClick={this.handleAvatarClick}>
                        <img className='avatar' src={avatar} alt='' />
                    </div>
                </nav>
                {this.state.clicked ? <Dropdown /> : null}
            </div>
        );
    }
}

function Hero() {
    return (
        <div className='hero'>
          <h2 className='heroTitle'>Hello, Ositadinma Nwangwu</h2>
          <p className='heroText'>Welcome and good to have you back.</p>
        </div>
    );
}

function TaskList() {
    return (
        <div className='tasklist'>
          <h4 className='task-header'>Things to do</h4>
          <div className='tasks'>
              <div className='task'>
                  <div className='task-item'>
                    <img src={circle} alt='' />
                    <p>Upload your employee performance agreement</p>
                  </div>
                  <span>Begin</span>
              </div>
              <div className='task'>
                  <div className='task-item'>
                    <img src={circle} alt='' />
                    <p>Start quarterly self review</p>  
                  </div>
                  <span>Resume</span>
              </div>
          </div>
        </div>
    );
}


function Dashboard() {
    return (
        <>
        <Nav />
        <div className='main'>
            <Hero />
            <TaskList />
        </div>
        
        </>     
    );
}

export default Dashboard;