import logoMini from './assets/logomini.svg';
import menu from './assets/menu.svg';
import relaxImg from './assets/relaximg.svg';
import image1 from './assets/img1.svg';
import image2 from './assets/img2.svg';
import image3 from './assets/img3.svg';
import image4 from './assets/img4.svg';
import image5 from './assets/img5.svg';
import image6 from './assets/img6.svg';
import image7 from './assets/img7.svg';
import sectImg1 from './assets/sect1img.svg';
import sectImg2 from './assets/sect2img.svg';
import sectImg3 from './assets/sect3img.svg';
import unnImg from './assets/unn.svg';
import genesysImg from './assets/genesys.svg';
import estateImg from './assets/estate.svg';
import teneceImg from './assets/tenece.svg';
import footerLogo from './assets/logofullgrey.svg';
import facebook from './assets/facebook.svg';
import twitter from './assets/twitter.svg';
import linkedin from './assets/linkedin.svg';
import instagram from './assets/instagram.svg';
import logoFull from './aassets/logofull.svg';
import close from './assets/cross.svg';
import './App.css';


function NavBar() {
  return (
    <nav className="navbar">
      <div className="navitems">
          <div className='leftnav'>
            <img className="logomini" src={logoMini} alt="Resource Edge"/>
            <img className='logofull' src={logoFull} alt='Resource Edge'/>
            <ul>
              <li>Features</li>
              <li>About</li>
            </ul>
          </div>
          <div className='rightnav'>
            <div className='menubtn'><img className="menu" src={menu} alt="" /></div>
            <div className='closebtn'><img className='close' src={close} alt='' /></div>
            <div className='authbtngrp'>
              <button className='signup'>Sign up</button>
              <button className='signin'>Sign in</button>
            </div>
          </div>  
      </div> 
    </nav>
  );
}

function HeroSect() {
  return (
    <div className="HeroBox">
        <div className='HeroItems'>
          <h2 className="HeroHeader">Throw paperwork into the trash where it belongs.</h2>
          <h4 className="HeroText">Eliminate all the hassle involved in managing people operations by automating it.</h4>
        </div>
        <img className="HeroImg" src={relaxImg} alt="Chill and Relax" />
    </div>   
  );
}

function Section1() {
  return(
    <section className="Section1">
      <Section header="Human Resources" desc="Onboard new employees, manage the employee lifecycle and measure employee performance." />    
      <InfoCard image={image1} header="Employee Management" text="From Hiring & Onboarding to Retiring, the Resource Edge Employee Management module  eliminates all the complexities & paperwork involved in managing your team."/>
      <InfoCard image={image2} header="Performance Management" text="Manage and track employee performance with our easy-to-use tools for goal setting, performance agreements and performance reviews."/>
      <InfoCard image={image3} header="Paid time off" text="Employees can request for paid time off, vacations, sick leaves or educational leaves and get approvals all within Resource Edge. HR managers can equally ensure compliance."/>
      <img className='SectImg' src={sectImg1} alt=''/>
    </section>  
  );
}

function Section2() {
  return (
    <section className="Section2">
      <Section header="Admin & Logistics" desc="Manage and track company assets as well as logistics for travelling employees"/>
      <InfoCard id="ClearInfoCard" image={image4} header="Travel & Logistics" text="Make travel requests, get approvals, and have access to travel information."/>
      <InfoCard id="ClearInfoCard" image={image5} header="Asset Management" text="Manage the acquisition, assignment, and disposition of assets seamlessly."/>
      <img className='SectImg' src={sectImg2} alt=''/>
    </section>
  );
}

function Section3() {
  return (
    <section className="Section3">
      <Section header="Finance" desc="Generate invoices, track expenditure, and manage complex payrolls for multiple teams and companies"/>
      <InfoCard id="ClearInfoCard" image={image6} header="RE Vouchers" text="Track and manage expenditure for multiple teams across your organisation using Resource Edge Vouchers"/>
      <InfoCard id="ClearInfoCard" image={image7} header="Payroll" text="Our easy to use systems takes away the pain of managing complex payrolls for organisations of all sizes."/>
      <img className='SectImg' src={sectImg3} alt=''/>
    </section>
  );
}

function Brands() {
  return (
    <div className='BrandBox'>
      <div className='BrandLogos'>
        <img src={unnImg} className='BrandImg' alt=''/>
        <img src={genesysImg} className='BrandImg' alt=''/>
        <img src={estateImg} className='BrandImg' alt=''/>
        <img src={teneceImg} className='BrandImg' alt=''/>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className='Footer'>
      <div className='FooterInner'>
        <div className='FooterHeader'>
          <img src={footerLogo} className='logoFullFooter' alt=''/>
          <h4>Throw paperwork into the trash.</h4>
        </div>
        <div className='FooterBody'>
          <div className='SocialLinks'>
            <img src={facebook} className='' alt=''/>
            <img src={twitter} className='' alt=''/>
            <img src={linkedin} className='' alt=''/>
            <img src={instagram} className='' alt=''/>
          </div>
          <h6 className='CopyrightInfo'>Copyright © Genesys DevStudio. All rights reserved.</h6>
        </div>
        
      </div>
    </footer>
  );
}

function InfoCard(props) {
  return (
    <div className="InfoCard" id={props.id}> 
      <div className="InfoItems">
        <img className="InfoImg" src={props.image} alt="" />
        <h4 className="InfoHeader">{props.header}</h4>
        <p className="InfoText">{props.text}</p>
      </div>    
    </div>
  );
}

function Section(props) {
  return (
    <div className='SectionItems'>
      <h3 className='SectionHeader'>{props.header}</h3>
      <p className='SectionDesc'>{props.desc}</p>
    </div>
  );
}

function App() {
  return (
    <body className="App">
      <NavBar/>
      <HeroSect/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Brands/>
      <Footer/>
    </body>   
  );
}


export default App;
