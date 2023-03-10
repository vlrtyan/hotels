import "./Favourites.css";
import React from "react";
import { connect, useSelector } from "react-redux";
import sortIcon from "../../images/sort-icon.svg";
import FavouriteHotel from "../FavouriteHotel/FavouriteHotel";

function Favourites() {
  const favouriteHotels = useSelector((state) => state.hotels.favouriteHotels);

  

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
        {favouriteHotels.map((favourite) => (
          <FavouriteHotel key={favourite.hotelId} favouriteHotel={favourite} favouriteHotels={favouriteHotels} />
        ))}
      </div>
    </div>
  );
}

export default connect()(Favourites);
