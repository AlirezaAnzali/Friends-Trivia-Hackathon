import "./Header.scss"
import logo from "../../assets/images/friends.svg";
import central from "../../assets/images/Central-Perk-Logo.png";

function Header () {

    return (
      <header className="header">
        <div className="header__left">
            <img className="header__left__logo" src={logo} alt="friends logo" />
        </div>
        <div className="header__right">
          <img className="header__right__logo" src={central} alt="central perk logo" />
        </div>
      </header>
    );
};

export default Header;