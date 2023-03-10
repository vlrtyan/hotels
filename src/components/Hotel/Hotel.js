import "./Hotel.css";
import React from "react";
import { connect } from "react-redux";

import durationDash from "../../images/hotel-duration-divider.svg";
import starActive from "../../images/star-present.svg";
import starInactive from "../../images/star-absent.svg";
import { addToFavourite, deleteFromFavourite } from "../../redux/actions";
import { getNoun, getPrice, formatDate } from "../../utils/constants";

function Hotel({
  favouriteHotels,
  hotel,
  addToFavourite,
  deleteFromFavourite,
  search,
}) {
  const hotelIsLiked = favouriteHotels.find((i) => i.hotelId === hotel.hotelId);
  const handleLikeClick = () => {
    hotelIsLiked ? deleteFromFavourite(hotel) : addToFavourite(hotel, search);
    
  };

  const likeButtonClass = `hotel__like ${
    hotelIsLiked ? "hotel__like_active" : ""
  }`;

  return (
    <div className="hotel">
      <img
        className="hotel__image"
        src="https://www.ahstatic.com/photos/b8l9_ho_00_p_1024x768.jpg"
        alt={hotel.hotelName}
      />
      <p className="hotel__name">{hotel.hotelName}</p>
      <button className={likeButtonClass} onClick={handleLikeClick}></button>
      <div className="hotel__duration">
        <p className="hotel__date">{formatDate(search.date, "long")}</p>
        <img className="hotel__dash" src={durationDash} alt="Серое тире" />
        <p className="hotel__days">{`${search.days}  ${getNoun(
          search.days,
          "день",
          "дня",
          "дней"
        )}`}</p>
      </div>
      <div className="hotel__rating">
        {[...Array(5)].map((star, index) =>
          index < hotel.stars ? (
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
      <p className="hotel__price">
        Price:{" "}
        <span className="span_type_hotel-price">
          {getPrice(hotel.priceFrom)}
        </span>
      </p>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    search: state.search,
  };
}

export default connect(mapStateToProps, {
  addToFavourite,
  deleteFromFavourite,
})(Hotel);
