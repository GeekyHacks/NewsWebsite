const displayDate = () => {
  const stringDate = new Date();
  const date = stringDate.toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const time = stringDate.toLocaleTimeString();
  document.getElementById('date').innerHTML = `${date} ${time}`;
};

export default displayDate;
