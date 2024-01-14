import React, {useState, useEffect} from 'react';
import './Home.css';
import profile from '../images/cj-profile.png';
import cat from '../images/cat-gif-resize.gif';
import star1 from '../images/long.png';
import star2 from '../images/long-thic.png';
import resume from '../images/CJ_Jachim_Resume.pdf';


  const Home = () => {
    const [showGif, setShowGif] = useState(false);

  useEffect(() => { 
    const intervalId = setInterval(() => {
      setShowGif(true);

      setTimeout(() => {
        setShowGif(false);
      }, 1900);

    }, 5000); 

    return () => clearInterval(intervalId);
  }, []);


    return (
      <div className='home-content'>
        <div className='home-text-info'>
          <div className='gif-container'>
          {showGif && <img src={cat} alt="cat gif" id='gif-style' />}
          </div>
  
          <div className='home-title-text'>Hi!</div>
          <div className='home-name'>I'm Clare</div>
          <div className='home-description'>I’m a student at Lehigh University passionate about Web Design and UI/UX Engineering </div>
          
          <div className="btn-container">

     
            <a href={resume} download="CJachim_Resume">
              <button className="download-btn"> Download Resume </button>
            </a>
            <a href="/about#contact-me" >
              <button className="contact-btn"> Contact Information </button>
            </a>
            </div>
            
        </div>
        <img src={profile} alt="Clare Jachim" id="profile-img" />
        <div className='star-container2'> <img src={star2} alt="star decoration 2" id='star2'/> </div>
        <div className='star-container3'> <img src={star1} alt="star decoration 3" id='star3'/> </div>
      </div>
    );
  };
  
  export default Home;


