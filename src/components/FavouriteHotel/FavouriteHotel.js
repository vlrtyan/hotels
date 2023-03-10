import React from "react";
import { connect } from "react-redux";

import "./FavouriteHotel.css";
import starActive from "../../images/star-present.svg";
import starInactive from "../../images/star-absent.svg";
import durationDash from "../../images/hotel-duration-divider.svg";
import { deleteFromFavourite } from "../../redux/actions";

function FavouriteHotel({
  favouriteHotel,
  favouriteHotels,
  deleteFromFavourite,
}) {
  const handleLikeClick = () => {
    deleteFromFavourite(favouriteHotel);
  };

  const likeButtonClass = `favourite__like ${
    favouriteHotels.includes(favouriteHotel) ? "favourite__like_active" : ""
  }`;

  return (
    <div className="favourite">
      <p className="favourite__name">{favouriteHotel.hotelName}</p>
      <button className={likeButtonClass} onClick={handleLikeClick}></button>
      <div className="favourite__duration">
        <p className="favourite__date">28 June, 2020</p>
        <img className="favourite__dash" src={durationDash} alt="Серое тире" />
        <p className="favourite__days">1 день</p>
      </div>
      <div className="favourite__rating">
        {[...Array(5)].map((star, index) =>
          index < favouriteHotel.stars ? (
            <img
              key={index}
              className="hotel_star"
              src={starActive}
              alt="Желтая звезда"
            />
          ) : (
            <img
              key={index}
              className="hotel_star"
              src={starInactive}
              alt="Серая звезда"
            />
          )
        )}
      </div>
      <p className="favourite__price">
        Price:
        <span className="span_type_favourite-price">{`${favouriteHotel.priceFrom.toLocaleString(
          "ru"
        )} ₽`}</span>
      </p>
    </div>
  );
}

export default connect(null, { deleteFromFavourite })(FavouriteHotel);
