import DisplayDate from '../JS/Date';
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
            <img className="socialImg" src="../assets/images/facebook.svg" alt="Facebook" />
            <img className="socialImg" src="../assets/images/twitter.svg" alt="Twitter" />
          </div>
          <div className="Search">
            <input className="searchInput" type="text" />
            <img className="socialImg" src="../assets/images/search.svg" alt="Twitter" />
          </div>
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
