import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import twitter from '../assets/images/twitter.svg';
import '../styles/Css/NavBar.css';
import BreakingNews from './BreakingNews';

const NavBar = () => {
  const handleActive = (nav) => (nav.isActive ? '' : 'active-link');
  const result =
    ((
      <nav className="navbar">
        <div className="logoInfo">
          <img src={twitter} alt="" />
        </div>
        <div className="links">
          <NavLink className={(nav) => handleActive(nav)} to="/">
            Rockets
          </NavLink>
          <NavLink className={(nav) => handleActive(nav)} to="/news">
            Missions
          </NavLink>
          <NavLink className={(nav) => handleActive(nav)} to="/breakingNews">
            Dragons
          </NavLink>
          <NavLink id="border" className={(nav) => handleActive(nav)} to="/aboutUs">
            My Profile
          </NavLink>
        </div>
      </nav>
    ),
    (
      <Routes>
        <Route path="/" element={<BreakingNews />} />
        <Route className="news" path="/news" element={<BreakingNews />} />
        <Route className="breakingNews" path="/breakingNews" element={<BreakingNews />} />
        <Route path="/aboutUs" element={<BreakingNews />} />
      </Routes>
    ));

  return result;
};

export default NavBar;
