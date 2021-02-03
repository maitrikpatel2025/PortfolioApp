import React, {useState} from 'react';

import './Scroll.css'


const Scroll = () =>{

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
        <div className="scrollTop" onClick={scrollTop} style={{ display: showScroll ? 'flex' : 'none'}}><i className="inverted big angle up icon"></i></div>
  );
}

export default Scroll;