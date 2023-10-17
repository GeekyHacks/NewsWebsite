import displayDate from '../JS/Date';
import '../styles/Css/Header.css';
const Header = () => {
  displayDate();
  const result = (
    <header>
      <div className="fstHeader">
        <div className="date">
          <p id="date"></p>
          <button type="button">العربية</button>
          <button type="button">English</button>
        </div>
        <div className="socialLinks">
          <img className="socialImg" src="../assets/images/facebook.svg" alt="Facebook" />
          <img className="socialImg" src="../assets/images/twitter.svg" alt="Twitter" />
        </div>
        <div className="Search">
          <input className="searchInput" type="text" />
          <img className="socialImg" src="../assets/images/search.svg" alt="Twitter" />
        </div>
      </div>
      <div className="scdHeader">
        <img className="socialImg" src="../assets/images/facebook.svg" alt="Facebook" />
        <img className="socialImg" src="../assets/images/twitter.svg" alt="Twitter" />
      </div>
    </header>
  );

  return result;
};

export default Header;
