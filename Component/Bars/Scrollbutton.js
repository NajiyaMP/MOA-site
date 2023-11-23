import React, { useState, useEffect } from 'react';

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    setIsVisible(scrollTop > 100); // Adjust the threshold as needed
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`scroll-up-button ${isVisible ? 'visible' : 'hidden'}`}
      onClick={scrollToTop}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
      </svg>
    </div>
  );
};

export default ScrollUpButton;
