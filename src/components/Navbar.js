import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [show, setShow] = useState(false)
  const controlNavbar = () => {
      if (window.scrollY > 100) {
          setShow(true)
      } else {
          setShow(false)
      }
  }

  useEffect(() => {
      window.addEventListener('scroll', controlNavbar)
      return () => {
          window.removeEventListener('scroll', controlNavbar)
      }
  }, []);
  return (
    <nav className={`nav ${show ? 'show' : ''}`}>
      
        <div className='navbar-styling'>
          <Link to="/"><h3> Home</h3></Link>
       
          <Link to="/about"><h3> About</h3></Link>
        
          <Link to="/education"><h3> Education</h3></Link>
     
          <Link to="https://clarejachim.notion.site/Clare-Jachim-fdf977a37be5423db33ea66ca0eb04d7" target="_blank" rel="noopener noreferrer">
            <h3>Portfolio</h3>
            </Link>
     </div>
    
   
    </nav>
  );
};

export default Navbar;
