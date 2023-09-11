import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import './styles/Css/App.css';
import LatestNewsSlides from './components/LatestNewsSlides';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <LatestNewsSlides />
    </div>
  );
}

export default App;
