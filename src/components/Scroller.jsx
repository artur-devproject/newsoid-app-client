import React, { useState } from 'react'
import './styles/Scroller.css'

export default function Scroller() {

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 2000){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 2000){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
        <img src={require('../img/arrow-upward.png')}
            className="scrollTop"
            onClick={scrollTop} 
            style={{display: showScroll ? 'flex' : 'none'}}
        />
  );
}