import "./Header.css";
import exitLogo from "../../images/exit-logo.svg";

function Header({logout}) {
  return (
    <header className="header">
      <h1 className="header__title">Simple Hotel Check</h1>
      <button className="header-link" type="button" onClick={logout}>
        <span className="header-link__text">Выйти</span>
        <img
          className="header-link__logo"
          src={exitLogo}
          alt="Значок выхода: дверь со стрелочкой"
        />
      </button>
    </header>
  );
}

export default Header;
