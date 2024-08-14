/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.css'; 

// Header Component
const Header = () => (
  <header className="header">
    <ul className="logo-container">
      <li><img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQHnHsU84QV4HwimfbLzsRnY4M30jLPw6BE6BYMi8DbwvNW9Gra" alt="Logo" /></li>
      <a href="#" className="logo">Portfolio</a>
    </ul>
    <nav className="navbar">
      <ul>
        <li><a href="#home" className="active">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><button className="button">HIRE ME</button></li>
      </ul>
    </nav>
  </header>
);

// Home Section
const Home = () => (
  <section className="home" id="home">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEAI0Kd1-lkE1kED1xYXo9ROBSZ8HU4Rx2od_tLp-qb3RhAM41" alt="Home" />
    <div className="home-content">
      <h3>HI!</h3>
      <h3>I'M NEERAJA GADDAM</h3>
      <div className="social-media">
        <a href="https://github.com/NEERAJAGADDAM"><i class='bx bxl-github'></i></a>
        <a href="https://www.linkedin.com/in/neeraja-gaddam-ab21a9246/"><i className='bx bxl-linkedin'></i></a>
        <a href="mailto:211230020@nitdelhi.ac.in"><i className='bx bxl-gmail'></i></a>
      </div>
      <a href="https://drive.google.com/file/d/1r7TdkYIYO-DZGXNC0oek3779eY9kXoQ6/view?usp=sharing" className="btn">Download CV</a>
    </div>
  </section>
);

const About = () => (
  <section className="about" id="about">
    <h1 className="heading">My <span>Skills</span></h1>
    <div className="skills">
      <div className="progress-bar-container">
        <h2><i className='bx bxl-c-plus-plus'></i> C/C++ - 85%</h2>
        <div className="progress-bar">
          <span className="percentage c" style={{ width: '85%' }}></span>
        </div>
      </div>

      <div className="progress-bar-container">
        <h2> <i className='bx bx-data'></i> MySQL - 75% </h2>
        <div className="progress-bar">
          <span className="percentage sql" style={{ width: '75%' }}></span>
        </div>
      </div>

      <div className="progress-bar-container">
        <h2><i className='bx bxl-python'></i> Python - 55%</h2>
        <div className="progress-bar">
          <span className="percentage python" style={{ width: '55%' }}></span>
        </div>
      </div>

      <div className="progress-bar-container">
      <h2><i className='bx bxl-html5'></i>HTML & CSS - 93% <i className='bx bxl-css3'></i></h2>
        <div className="progress-bar">
          <span className="percentage html" style={{ width: '93%' }}></span>
        </div>
      </div>

      <div className="progress-bar-container">
        <h2><i className='bx bxl-javascript'></i>JavaScript - 85% </h2>
        <div className="progress-bar">
          <span className="percentage javascript" style={{ width: '85%' }}></span>
        </div>
      </div>

      <div className="progress-bar-container">
        <h2><i className='bx bxl-react'></i> React & Bootstrap - 50% <i className='bx bxl-bootstrap'></i></h2>
        <div className="progress-bar">
          <span className="percentage reactboot" style={{ width: '50%' }}></span>
        </div>
      </div>
    </div>
  </section>
);


// Education Section
const Education = () => (
  <section className="education" id="education">
    <h2 className="heading">My <span>Education</span></h2>
    <div className="education-container">
      <div className="education-box">
        <i className='bx bxs-school'></i>
        <h3>Secondary School Certificate (10th Class)</h3>
        <p>School Name: Kasthuribha Gandhi Balikala Vidhyalayam Mogullapally<br />Year Of Completion: 2018-2019<br />Grade Point Average: 9.5/10</p>
      </div>
      <br />
      <div className="education-box">
        <i className='bx bxs-school'></i>
        <h3>Higher Secondary School Certificate (12th Class)</h3>
        <p>College Name: Telangana Social Welfare Residential Educational Institutions Society Junior College (Centre Of Excellence) Madikonda<br />Year Of Completion: 2019-2021<br />Marks: 956/1000</p>
      </div>
      <br />
      <div className="education-box">
        <i className='bx bxs-graduation'></i>
        <h3>Graduation</h3>
        <p>Name Of The Institution: National Institute of Technology Delhi<br />Year Of Completion: 2021-2025<br />Current Year: 3rd (6th sem)<br />Branch: Electrical and Electronic Engineering<br />CGPA: 6.67 (Upto 5th sem)</p>
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section className="projects" id="projects">
    <h2 className="heading">Latest <span>Projects</span> <i className='bx bx-rocket'></i></h2>
    <div className="projects-container">
      <div className="projects-box">
        <img src="https://th.bing.com/th/id/OIP.Z5l3fbpU5vdAj3xAnvDf8AHaE8?w=249&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Solor Powered Hybrid Electrical Vehicle" />
        <div className="projects-layer">
          <h4>Solor Powered Hybrid Electrical Vehicle <i className='bx bx-sun'></i></h4>
          <p>It is my minor project where I implemented related models on MATLAB Simulink <i className='bx bx-brain'></i></p>
        </div>
      </div>
      <div className="projects-box">
        <img className="image-fade-in" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIYI41mF-HWY0O538kXOL02bkJH8RU2uKeo3otWB9dlWlKSYtCM9hbTIXOYZAf6VZ7IM4&usqp=CAU" alt="Phone Book" />
        <div className="projects-layer">
          <h4>Car Race Game</h4>
          <p>In this, I used Python libraries to create a fun and interactive game. <i className='bx bx-code'></i></p>
          <a href="https://github.com/NEERAJAGADDAM/car-race-game" target="_blank" rel="noopener noreferrer"><i className='bx bx-link-external'></i></a>
        </div>
      </div>
      <div className="projects-box">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrxTVfexFUHhYIZlGTV3LsHM95NCTTVcHaiw&s" alt="Portfolio" />
        <div className="projects-layer">
          <h4>Portfolio <i className='bx bx-world'></i></h4>
          <p>This is my first project in Python, demonstrating the basics of web development. <i className='bx bx-globe'></i></p>
          <a href="#" target="_blank" rel="noopener noreferrer"><i className='bx bx-link-external'></i></a>
        </div>
      </div>
    </div>
  </section>
);
// Contact Section
const Contact = () => (
  <section className="contact" id="contact">
    <div className="contact-container">
      <form action="https://api.web3forms.com/submit" method="POST" className="contact-left">
        <div className="contact-left-title">
          <h2>Get in touch</h2>
          <hr />
        </div>
        <input type="hidden" name="access_key" value="9b9fcff5-2cd8-49bc-9994-a0465ecf4dbc" />
        <input type="text" name="name" placeholder="Your Name" className="contact-inputs" required />
        <input type="email" name="email" placeholder="Your Email" className="contact-inputs" required />
        <textarea name="Message" placeholder="Your Message" className="contact-inputs"></textarea>
        <button type="submit">Submit<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDIzrF3fML0pu0r6PZbB-SvXfRbvYAGzuLow&s" alt="Submit Icon" /></button>
      </form>
      <div className="contact-right">
        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQEFRHnGcMyUk75Hxz2E_yBRmlNBuqu-ng3NUYr8yENVqV9Q6Dw" style={{ width: '500px', borderRadius: '20px', border: '.2rem solid orange', boxShadow: '0 .8rem .1rem plum' }} alt="Contact" />
      </div>
    </div>
  </section>
);

const App = () => (
  <div>
    <Header />
    <Home />
    <About />
    <Education />
    <Projects />
    <Contact />
  </div>
);

export default App;

