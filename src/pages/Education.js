import React from 'react';
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import './Education.css';
import resume from '../images/CJ_Jachim_Resume.pdf';

const Education = () => {
  return (
    <div>
       <header>
        <nav>
          <ul id='edu-style'>
            <li><Link to="education" smooth={true} duration={500}>EDUCATION</Link></li>
            <li><Link to="experience" smooth={true} duration={500}>EXPERIENCE</Link></li>
            <li><Link to="skills" smooth={true} duration={500}>SKILLS</Link></li>
            <li><Link to="relevant-courses" smooth={true} duration={500}>RELEVANT COURSES</Link></li>
            <li>   
              <a href={resume} download="CJachim_Resume">
                <button className="edu-resume-btn"> DOWNLOAD RESUME </button>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      
      <hr></hr>
    
      <div className='edu-background'>

      <Element name="education" id='education'>
        <h2>EDUCATION</h2>
        <p id='title'>B.S. Computer	Science and Engineering</p>
        <p id='description'>Minor: Design with a Concentration in Graphics</p>
        <p id='edu-location'>Lehigh University, 2024</p>

        <p id='title'>Societies</p>
        <p id='description'>Upsilon Pi Epsilon Computer Science Honor Society</p>
        <p id='edu-location'>Lehigh University, 2023</p>

      </Element>

      <Element name="experience" id='experience'>
        <h2>EXPERIENCE</h2>
        <p id='title'> Dot Inc. - Start-up Product Design, Marketing & Graphic Design Intern </p>

        <p id='date'>May 2023 — July 2023</p>

        <p id='description'>Fintech Startup based out of South Africa that focuses on helping immigrant students go from cash to cashless. I worked as an Intern through the Lehigh@NASDAQ program. Responsibilities included:</p>

        <ul>
          <li>Brainstormed and created promotional materials to increase Dot Inc. social media presence with senior mentor weekly</li>
          <li> Created mockups and prototypes weekly in collaboration with the Product Team to enhance user experience. </li>
          <li> Utilized Figma and Adobe Cloud to create digital content and storyboards to embody the companies goals</li>
        </ul>
        <br></br>

        <p id='title'> Lehigh University - Undergraduate Research Fellow </p>

          <p id='date'>June 2022 — August 2022</p>

          <p id='description'>Save TUBA is a mobile game application for students aged eight to eleven to help them develop sustainable behaviors through gamification and inquiry-based learning techniques through the Creative Inquiry Program at Lehigh. 
          Responsibilities included: </p>

          <ul>
            <li>Continued development of curriculum, content, and code on a mobile app ‘Save TUBA’ to gamify sustainability habits Kazakhstan with a small team of 4 developers</li>
            <li> Collaborated with the ongoing Kazakhstan Minister of Education partners to develop tailored curriculum content for games and lessons. </li>
            <li>Utilized ReactNative, HTML, and CSS to create a functional app across both Android and iOS frameworks</li>
          </ul>
      
      <br></br>
      <p id='title'> Lehigh University - Undergraduate Teaching Assistant and Grader  </p>

      <p id='date'>August 2021 — <i>Present</i> </p>

      <p id='description'>Save TUBA is a mobile game application for students aged eight to eleven to help them develop sustainable behaviors through gamification and inquiry-based learning techniques through the Creative Inquiry Program at Lehigh. 
      Responsibilities included: </p>

      <ul>
        <li>Graded for CSE 003: Introduction to Programming Part A, CSE 264: Web Systems Programming, and ART 003: Introduction to 2D</li>
        <li>Taught/assisted basic Java skills and concepts, as well as basic Adobe Illustrator skills to introductory students in respective courses of CSE 004 and ART 003 </li>
        <li>Guided student classes ranging from 15 to 50 in critical thinking and problem-solving to reinforce lecture content</li>
        <li>Aided in grading weekly homeworks, labs, projects, and exams, as well as assisting in critiques of students projects</li>
      </ul>

      <br></br>
      <p id='title'> SouthSide Swap - Startup Technology Lead </p>

      <p id='date'>February 2022 — May 2022 </p>

      <p id='description'>SouthSide Swap re-imagines thrifting by taking shopping to the next level. This startup curates unique secondhand pieces to send each month to a subscriber based on their fashion.
       By partnering with local vendors and sellers, SouthSide Swap is putting sustainability back into fashion. Responsibilities included:</p>

      <ul>
        <li>Collaborated in a fast paced environment at a startup in its beginning stages of launching the product and website in a team of 4 other women</li>
        <li>Worked on all facets of the business research, vendor outreach, marketing, and technology development </li>
        <li>Designed mockups and prototypes for various potential new components</li>
      </ul>

      <br></br>
      <p id='title'> A Sneakerhead's Paradise - Startup Web Development Team Member </p>

      <p id='date'>December 2021 — January 2022 </p>

      <p id='description'>A Sneakerhead's Paradise: finding the best price for highly-sought sneakers. This startup was an online sneaker reseller company that
      let the user set their budget to find and trade sneakers to their hearts content. In this mid stage startup, Responsibilities included: </p>

      <ul>
        <li>Created multiple mockups with Figma focusing on online user interactions to encourage increased user engagement in shopping and collection activities.</li>
        <li>Worked closely with 2 other developers to brainstorm designs and provide web applications resources for scalability</li>
        <li>Designed mockups and prototypes for various potential new components</li>
      </ul>

      <br></br>
      <p id='title'> Habitat for Humanity Philippines - Research Intern </p>

      <p id='date'>December 2020 — February 2021 </p>

      <p id='description'>Partnering with the Habitat for Humanity Terwilliger Center for Innovation in Manila, Philippines, research was focused on green technologies 
      within the construction sector to find more viable and affordable ways to build long term housing for low income areas. Responsibilities included:</p>

      <ul>
        <li>Coordinating team meetings weekly with research team members and mentors across various time zones.</li>
        <li>Conducted extensive research on current construction technologies, exploring a wide range of research papers to identify industry trends, advancements, and emerging innovations.</li>
        <li>Authored a detailed report synthesizing findings from research papers, highlighting key technologies, green innovations, and adherence to industry standards.</li>
      </ul>

      <br></br>


      </Element>

      <Element name="skills" id='skills'>
        <h2>SKILLS</h2>
        <p id='skills-description'> A breakdown of some of my top technical skills</p>
        <p id='skills-description'> 
          <strong>Tools:</strong> Git, Linux/Unix, Docker, Visual Studio, Bitbucket, Adobe Cloud
        </p>

        <div className='skills-container'>
        <div className='row'>
          <div className='item'>
            <div className='item-text'>
              <span class='skills-title'>Figma</span>
              <span class ="w-90">90%</span>
            </div>
            <div className='progress'>
              <div className='progress-bar w-90'></div>
            </div>
          </div>

          <div className='item'>
            <div className='item-text'>
            <span class='skills-title'>HTML</span>
              <span class ="w-90">90%</span>
            </div>
            <div className='progress'>
              <div className='progress-bar w-90'></div>
            </div>
          </div>

          <div className='item'>
            <div className='item-text'>
            <span className='skills-title'>CSS</span>
              <span className ="w-80">80%</span>
            </div>
            <div className='progress'>
              <div className='progress-bar w-80'></div>
            </div>
          </div>

          <div className='item'>
            <div className='item-text'>
            <span className='skills-title'>Java</span>
              <span className ="w-90">90%</span>
            </div>
            <div className='progress'>
              <div className='progress-bar w-90'></div>
            </div>
          </div>

          <div className='item'>
            <div className='item-text'>
            <span className='skills-title'>JavaScript</span>
              <span className ="w-60">60%</span>
            </div>
            <div className='progress'>
              <div className='progress-bar w-60'></div>
            </div>
          </div>

          <div className='item'>
            <div className='item-text'>
            <span className='skills-title'>React</span>
              <span className ="w-80">80%</span>
            </div>
            <div className='progress'>
              <div className='progress-bar w-80'></div>
            </div>
          </div>

          <div className='item'>
            <div className='item-text'>
            <span className='skills-title'>Illustrator, Photoshop</span>
              <span className ="w-70">70%</span>
            </div>
            <div className='progress'>
              <div className='progress-bar w-70'></div>
            </div>
          </div>

          <div className='item'>
            <div className='item-text'>
            <span className='skills-title'>C</span>
              <span className ="w-60">60%</span>
            </div>
            <div className='progress'>
              <div className='progress-bar w-60'></div>
            </div>
          </div>

          <div className='item'>
            <div className='item-text'>
            <span className='skills-title'>SQL</span>
              <span className ="w-50">50%</span>
            </div>
            <div className='progress'>
              <div className='progress-bar w-50'></div>
            </div>
          </div>

          <div className='item'>
            <div className='item-text'>
            <span className='skills-title'>Python</span>
              <span className ="w-40">40%</span>
            </div>
            <div className='progress'>
              <div className='progress-bar w-40'></div>
            </div>
          </div>

          <div className='item'>
            <div className='item-text'>
            <span className='skills-title'>InDesign</span>
              <span className ="w-60">60%</span>
            </div>
            <div className='progress'>
              <div className='progress-bar w-60'></div>
            </div>
          </div>

          <div className='item'>
            <div className='item-text'>
            <span className='skills-title'>WordPress</span>
              <span className ="w-60">60%</span>
            </div>
            <div className='progress'>
              <div className='progress-bar w-60'></div>
            </div>
          </div>
        </div>
        </div>
     
      </Element>

      <Element name="relevant-courses" id='relevant-courses'>
        <h2>RELEVANT COURSES</h2>        
        <h4 id='course-title-style'>Computer Science </h4>
        <div className='course-container'>

        <h4>
        CSE 216:
        <a href="https://engineering.lehigh.edu/cse/academics/course-index/cse-216-software-engineering-3" target="_blank" rel="noopener noreferrer">
          <span id='course-title'> Software Engineering</span>
        </a>
      </h4>

      <h4>
        CSE 109:
        <a href="https://engineering.lehigh.edu/cse/academics/course-index/cse-109-systems-software-4" target="_blank" rel="noopener noreferrer">
          <span id='course-title'> Systems Software</span>
        </a>
      </h4>

      <h4>
        CSE 202:
        <a href="https://engineering.lehigh.edu/cse/academics/course-index/cse-202-computer-organization-and-architecture-3" target="_blank" rel="noopener noreferrer">
          <span id='course-title'> Computer Organization and Architecture</span>
        </a>
      </h4>

      <h4>
        CSE 264:
        <a href="https://engineering.lehigh.edu/cse/academics/course-index/cse-264-web-systems-programming-3" target="_blank" rel="noopener noreferrer">
          <span id='course-title'> Web Systems Programming</span>
        </a>
      </h4>

      <h4>
        CSE 262:
        <a href="https://engineering.lehigh.edu/cse/academics/course-index/cse-262-programming-languages-3" target="_blank" rel="noopener noreferrer">
          <span id='course-title'> Programming Languages</span>
        </a>
      </h4>

      <h4>
        CSE 327:
        <a href="https://engineering.lehigh.edu/cse/academics/course-index/cse-327-artificial-intelligence-theory-and-practice-3" target="_blank" rel="noopener noreferrer">
          <span id='course-title'> Artificial Intelligence Theory and Practice</span>
        </a>
      </h4>

      <h4>
        CSE 340:
        <a href="https://engineering.lehigh.edu/cse/academics/course-index/cse-340-design-and-analysis-algorithms-3" target="_blank" rel="noopener noreferrer">
          <span id='course-title'> Design and Analysis of Algorithms</span>
        </a>
      </h4>

      <h4>
        CSE 343:
        <a href="https://engineering.lehigh.edu/cse/academics/course-index/cse-343-network-security-3" target="_blank" rel="noopener noreferrer">
          <span id='course-title'> Network Security</span>
        </a>
      </h4>

      <h4>
        CSE 398:
        <a href="https://engineering.lehigh.edu/cse/academics/summer-fall-2023-course-offerings" target="_blank" rel="noopener noreferrer">
          <span id='course-title'> Theory of Social Computing</span>
        </a>
      </h4>

     

      </div>

      <h4 id='course-title-style'>Design</h4>
      <div className='design-courses'>

      <h4>
        DES 070, 170:
        <a href="https://catalog.lehigh.edu/courselisting/des/" target="_blank" rel="noopener noreferrer">
          <span id='course-title'> Web Design I, II</span>
        </a>
      </h4>
      
      <h4>
        DES 153:
        <a href="https://catalog.lehigh.edu/courselisting/des/" target="_blank" rel="noopener noreferrer">
          <span id='course-title'> Graphic Design Word and Image</span>
        </a>
      </h4>

      <h4>
        DES 173:
        <a href="https://catalog.lehigh.edu/courselisting/des/" target="_blank" rel="noopener noreferrer">
          <span id='course-title'> User Experience UI/UX</span>
        </a>
      </h4>
      </div>

      </Element>

      <br></br>
      <br></br>

      </div>
      
    </div>
  );
};


export default Education;
