import "./Hotel.css";
import React from "react";
import durationDash from "../../images/hotel-duration-divider.svg";
import starActive from "../../images/star-present.svg";
import starInactive from "../../images/star-absent.svg";

function Hotel({ hotel }) {
  return (
    <div className="hotel">
      <img
        className="hotel__image"
        //заглушка
        src="https://www.ahstatic.com/photos/b8l9_ho_00_p_1024x768.jpg"
        alt={hotel.hotelName}
      />
      <p className="hotel__name">{hotel.hotelName}</p>
      <button className="hotel__like"></button>
      <div className="hotel__duration">
        <p className="hotel__date">7 июля 2020</p>
        <img className="hotel__dash" src={durationDash} alt="Серое тире" />
        <p className="hotel__days">1 день</p>
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

export default Hotel;
