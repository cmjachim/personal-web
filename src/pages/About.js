import React from 'react';
import './About.css';
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import { SocialIcon } from 'react-social-icons/component';
import 'react-social-icons/linkedin';
import 'react-social-icons/instagram';
import profile1 from "../images/profile-img2.jpeg";
import tape from "../images/pink-tape-transparent.png";

const About = () => {
  return (
    <div>
      <header>
        <nav>
          <ul id='edu-style'>
            <li><Link to="about" smooth={true} duration={500}>ABOUT</Link></li>
            <li><Link to="contact" smooth={true} duration={500}>CONTACT</Link></li>
          </ul>
        </nav>
      </header>
      <hr></hr>

      <div className='abt-bg'>
        <Element name="about" id='about-section'>
          <h2>ABOUT ME</h2>
          <br></br>
          <div className='caption'>
            <p> at the beach in 30 degree weather!</p>
          </div>
          <img src={tape} alt="pink-tape" id='tape'/>
          <img src={profile1} alt="headshot" id='about-profile-img' />
    
          <p>I’m Clare! I’m from Indiana and a senior at Lehigh University studying Computer Science and Engineering with a Minor in Design.<br></br><br></br>
            I originally thought I was going to end up at art school, but life had other plans? I don’t have a crazy story about how I got into computers. 
            I randomly took an introductory course and quickly realized that while it was the hardest class I had ever taken (still to this day), but it was also the most rewarding.
            Thus, I am almost done with my degree!<br></br><br></br>
           
            I am an aspiring UI/UX Developer, Engineer, Innovator (there is a plethora of titles categorizing what I want to do) 
            but, ultimately I want to shape the future of online engagement so everyone can have the most efficient and pleasant time navigating the online world!<br></br><br></br>
           
            Besides staring at a screen for hours on end, I enjoy crocheting, hiking/taking long walks, visiting museums, and reading.<br></br><br></br>
           
            I will always have a soft spot for non-digital art, my favorite medium to create with is colored pencil. <br></br><br></br>
           
            I hope to one day become proficient in Greek and Spanish because I find language and the art of communication fascinating. 
           
            I believe in doing your best to understand those around you, regardless of spoken language. <br></br><br></br>
          </p>
        </Element>



        <Element name="contact" id='contact-me'>
          <h2>CONTACT ME</h2>
          <p id='contact-style'>Reach out and connect!</p>
          <p id='contact-email'><strong>Email:</strong> <a href="mailto:cmjachim@gmail.com">cmjachim@gmail.com </a> </p>
          <p id='contact-phone'><strong>Phone:</strong> (574) 485-8476</p>
         <br></br>
          <p id='contact-style'>Socials:</p>
          
          <div className="icon-container">
         
            <SocialIcon url="https://www.linkedin.com/in/clare-jachim/" target="_blank" rel="noopener noreferrer"/>
       
            <SocialIcon url="https://www.instagram.com/clarjachim/" target="_blank" rel="noopener noreferrer"/>
    
          </div>

        </Element>
      </div>

    </div>
  );
};

export default About;
