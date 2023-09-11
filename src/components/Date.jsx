import React, { useEffect, useState } from 'react';

// Create a standalone displayDate function
const displayDate = () => {
  const stringDate = new Date();
  const date = stringDate.toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Return the date and time separately
  return { date, time: stringDate.toLocaleTimeString() };
};

const DisplayDate = () => {
  const [formattedDate, setFormattedDate] = useState(displayDate());

  useEffect(() => {
    // Update the state with the current date and time every second
    const intervalId = setInterval(() => {
      setFormattedDate(displayDate());
    }, 1000);

    // Clean up the interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div id="date">
      {formattedDate.date} {formattedDate.time}
    </div>
  );
};

export default DisplayDate;
