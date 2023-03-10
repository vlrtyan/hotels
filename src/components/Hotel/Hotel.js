import "./Hotel.css";
import React from "react";
import { connect } from "react-redux";

import durationDash from "../../images/hotel-duration-divider.svg";
import starActive from "../../images/star-present.svg";
import starInactive from "../../images/star-absent.svg";
import { addToFavourite, deleteFromFavourite } from "../../redux/actions";
import { getNoun } from "../../utils/constants";

function Hotel({
  favouriteHotels,
  hotel,
  addToFavourite,
  deleteFromFavourite,
  search,
}) {
  const handleLikeClick = () => {
    favouriteHotels.includes(hotel)
      ? deleteFromFavourite(hotel)
      : addToFavourite(hotel);
  };

  const likeButtonClass = `hotel__like ${
    favouriteHotels.includes(hotel) ? "hotel__like_active" : ""
  }`;

  return (
    <div className="hotel">
      <img
        className="hotel__image"
        //заглушка
        src="https://www.ahstatic.com/photos/b8l9_ho_00_p_1024x768.jpg"
        alt={hotel.hotelName}
      />
      <p className="hotel__name">{hotel.hotelName}</p>
      <button className={likeButtonClass} onClick={handleLikeClick}></button>
      <div className="hotel__duration">
        <p className="hotel__date">{`${new Date(search.date).toLocaleDateString(
          "ru",
          {
            day: "2-digit",
            month: "long",
          }
        )} ${new Date(search.date).getFullYear()}`}</p>
        <img className="hotel__dash" src={durationDash} alt="Серое тире" />
        <p className="hotel__days">{`${search.days}  ${getNoun(search.days, "день", "дня", "дней")}`}</p>
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
        <span className="span_type_hotel-price">{`${hotel.priceFrom.toLocaleString(
          "ru"
        )} ₽`}</span>
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
