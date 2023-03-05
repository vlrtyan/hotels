import "./Header.css";
import exitLogo from "../../images/exit-logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Simple Hotel Check</h1>
      <Link className="header-link">
        <p className="header-link__text">Выйти</p>
        <img
          className="header-link__logo"
          src={exitLogo}
          alt="Значок выхода: дверь со стрелочкой"
        />
      </Link>
    </header>
  );
}

export default Header;
