// import React from 'react';

// const BreakingNews = () => {
//   const BreakingString = 'Breaking News:';
//   const News = 'Today we have the best good news ever';
//   return (
//     <div className="breakingNews">
//       {BreakingString}{' '}
//       <img
//         align="center"
//         src={`https://readme-typing-svg.demolab.com?font=Poppins&size=20&pause=1500&color=red&width=1500&lines=${News}`}
//         alt="Typing SVG"
//       />
//     </div>
//   );
// };

// export default BreakingNews;
import React, { useState, useEffect } from 'react';
import '../styles/Css/BreakingNews.css'; // Import your CSS file for styling

const BreakingNews = ({ headlines }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  headlines = [
    'Breaking News 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Breaking News 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Breaking News 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  ];
  useEffect(() => {
    // Create an interval to advance the news ticker
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % headlines.length);
    }, 2000); // Change the interval duration as needed

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [headlines]);

  return (
    <div className="breaking-news">
      <div className="breaking-news-ticker">
        {headlines.map((headline, index) => (
          <span key={index} className={`ticker-item ${index === currentIndex ? 'active' : ''}`}>
            {headline}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BreakingNews;
