import "./Favourites.css"
import sortIcon from "../../images/sort-icon.svg";
import FavouriteHotel from "../FavouriteHotel/FavouriteHotel";

function Favourites() {
  return (
    <div className="favourites">
      <h2 className="favourites__title">Избранное</h2>
      <div className="favourites__sorting">
        <button className="sort-button">
          <span className="sort-button__text">Рейтинг</span>
          <img className="sort-button__image" src={sortIcon} />
        </button>
        <button className="sort-button">
          <span className="sort-button__text">Цена</span>
          <img className="sort-button__image" src={sortIcon} />
        </button>
      </div>
      <div className="favourites__list">
        <FavouriteHotel />
      </div>
    </div>
  );
}

export default Favourites;
