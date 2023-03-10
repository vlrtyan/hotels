import React from "react";
import { connect, useSelector } from "react-redux";

import "./FavouriteHotel.css";
import starActive from "../../images/star-present.svg";
import starInactive from "../../images/star-absent.svg";
import durationDash from "../../images/hotel-duration-divider.svg";
import { deleteFromFavourite } from "../../redux/actions";
import { getNoun, getPrice, formatDate } from "../../utils/constants";

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
        <p className="favourite__date">{formatDate(favouriteHotel.date, "long")}</p>
        <img className="favourite__dash" src={durationDash} alt="Серое тире" />
        <p className="favourite__days">{`${favouriteHotel.days}  ${getNoun(favouriteHotel.days, "день", "дня", "дней")}`}</p>
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
        <span className="span_type_favourite-price">{getPrice(favouriteHotel.priceFrom)}</span>
      </p>
    </div>
  );
}

export default connect(null, { deleteFromFavourite })(FavouriteHotel);
