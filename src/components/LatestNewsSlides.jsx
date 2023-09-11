import React, { useState, useEffect } from 'react';

const Slideshow = () => {
  // State to keep track of the current slide index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of slide objects containing image URLs and headlines
  const slides = [
    {
      image: 'image1.jpg', // Replace with your image URL
      headline: 'Slide 1 Headline', // Replace with your headline text
    },
    {
      image: 'image2.jpg', // Replace with your image URL
      headline: 'Slide 2 Headline', // Replace with your headline text
    },
    {
      image: 'image3.jpg', // Replace with your image URL
      headline: 'Slide 3 Headline', // Replace with your headline text
    },
  ];

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  // Use the useEffect hook to set up an interval for automatic slide switching
  useEffect(() => {
    // Automatically switch to the next slide every 1.5 seconds
    const intervalId = setInterval(() => {
      nextSlide();
    }, 1500);

    // Clear the interval when the component unmounts to prevent memory leaks
    return () => clearInterval(intervalId);
  }, []); // The empty dependency array ensures this effect runs only once

  return (
    <div className="slideshow">
      {/* Display the current slide's image and headline */}
      <div className="slide" style={{ backgroundImage: `url(${slides[currentIndex].image})` }}>
        <div className="headline">{slides[currentIndex].headline}</div>
      </div>
      {/* Button to go to the previous slide */}
      <button className="prev-button" onClick={prevSlide}>
        Previous
      </button>
      {/* Button to go to the next slide */}
      <button className="next-button" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default Slideshow;
