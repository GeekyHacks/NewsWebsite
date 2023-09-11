import React from 'react';

const BreakingNews = () => {
  const News = 'Today we have the best good news ever';
  return (
    <div>
      <img
        align="center"
        src={`https://readme-typing-svg.demolab.com?font=Poppins&size=20&pause=1500&color=fc9803&width=500&lines=Breaking News${News}`}
        alt="Typing SVG"
      />
    </div>
  );
};

export default BreakingNews;
