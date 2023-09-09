import DisplayDate from '../JS/Date';
import facebook from '../assets/images/facebook.svg';
import twitter from '../assets/images/twitter.svg';
import search from '../assets/images/search.svg';
import yemenMap from '../assets/images/yemenMap.svg';

const Header = () => {
  const result = (
    <header>
      <div className="fstHeader">
        <div>
          {' '}
          <div className="date">
            <DisplayDate id="date" />
            <button type="button">العربية</button>
            <button type="button">English</button>
          </div>
        </div>
        <div>
          {' '}
          <div className="socialLinks">
            <img className="socialImg" src={facebook} alt="Facebook" />
            <img className="socialImg" src={twitter} alt="Twitter" />
          </div>
          <div className="Search">
            <input className="searchInput" type="text" />
            <img className="socialImg" src={search} alt="search" />
          </div>
        </div>
      </div>
      <div className="scdHeader">
        <img src={yemenMap} className="headerImg" alt="Facebook" />
        <img src={yemenMap} className="headerImg"  alt="Twitter" />
      </div>
    </header>
  );

  return result;
};

export default Header;
