import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import twitter from '../assets/images/twitter.svg';
import '../styles/Css/NavBar.css';
import BreakingNews from './BreakingNews';

const NavBar = () => {
  const handleActive = (nav) => (nav.isActive ? '' : 'active-link');
  const result = (
    <>
      <nav className="navbar">
        <div className="logoInfo">
          <img src={twitter} alt="" />
        </div>
        <div className="links">
          <NavLink className={(nav) => handleActive(nav)} to="/YemenABC/">
            News
          </NavLink>
          <NavLink className={(nav) => handleActive(nav)} to="/YemenABC/news">
            News
          </NavLink>
          <NavLink className={(nav) => handleActive(nav)} to="/YemenABC/breakingNews">
            Breaking News
          </NavLink>
          <NavLink id="border" className={(nav) => handleActive(nav)} to="/YemenABC/aboutUs">
            About Us
          </NavLink>
        </div>
      </nav>
      <main>
        <Routes>
          <Route path="/YemenABC/" element={<h1> underconstruction</h1>} />
          <Route className="news" path="/YemenABC/news" element={<BreakingNews />} />
          <Route className="breakingNews" path="/YemenABC/breakingNews" element={<BreakingNews />} />
          <Route path="/YemenABC/aboutUs" element={<BreakingNews />} />
        </Routes>
      </main>
    </>
  );
  return result;
};

export default NavBar;
