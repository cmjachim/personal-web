import React from 'react';
import { useEffect, useState } from 'react';
import './BackToTop.css';
import { IoIosArrowUp } from "react-icons/io";


function BackToTop() {

    const [backToTop, setBackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setBackToTop(true);
            } else setBackToTop(false);
        });
    },[] )

    const scrollUp =()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
      <div>
        {backToTop &&(
            <button id='btn-style'  onClick={scrollUp}>
                <IoIosArrowUp id='arrow-style'/>
           </button>
        )}
      </div>
    );
  };

export default BackToTop;
  