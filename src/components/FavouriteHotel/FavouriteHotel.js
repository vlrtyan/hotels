import "./FavouriteHotel.css";
import starActive from "../../images/star-present.svg";
import starInactive from "../../images/star-absent.svg";
import durationDash from "../../images/hotel-duration-divider.svg";

function FavouriteHotel() {
  return (
    <div className="favourite">
      <p className="favourite__name">Moscow Marriott Grand Hotel</p>
      <button className="favourite__like favourite__like_active"></button>
      <div className="favourite__duration">
        <p className="favourite__date">28 June, 2020</p>
        <img className="favourite__dash" src={durationDash} alt="Серое тире" />
        <p className="favourite__days">1 день</p>
      </div>
      <div className="favourite__rating">
        {[...Array(5)].map((star, index) =>
          index < 5 ? (
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
        <span className="span_type_favourite-price">23 924 ₽</span>
      </p>
    </div>
  );
}

export default FavouriteHotel;
