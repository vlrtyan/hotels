import sortIcon from "../../images/sort-icon.svg";
import star from "../../images/star-present.svg";
import durationDash from "../../images/hotel-duration-divider.svg";

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
        <div className="favourite">
          <p className="favourite__name">Moscow Marriott Grand Hotel</p>
          <button className="favourite__like"></button>
          <div className="favourite__duration">
            <p className="favourite__date">28 June, 2020</p>
            <img
              className="favourite__dash"
              src={durationDash}
              alt="Серое тире"
            />
            <p className="favourite__days">1 день</p>
          </div>
          <div className="favourite__rating">
            <img className="favourite__star" src={star} />
            <img className="favourite__star" src={star} />
            <img className="favourite__star" src={star} />
            <img className="favourite__star" src={star} />
            <img className="favourite__star" src={star} />
          </div>
          <p className="favourite__price">
            Price:
            <span className="span_type_favourite-price">23 924 ₽</span>
          </p>
        </div>
        <div className="favourite">
          <p className="favourite__name">Moscow Marriott Grand Hotel</p>
          <button className="favourite__like"></button>
          <div className="favourite__duration">
            <p className="favourite__date">28 June, 2020</p>
            <img
              className="favourite__dash"
              src={durationDash}
              alt="Серое тире"
            />
            <p className="favourite__days">1 день</p>
          </div>
          <div className="favourite__rating">
            <img className="favourite__star" src={star} />
            <img className="favourite__star" src={star} />
            <img className="favourite__star" src={star} />
            <img className="favourite__star" src={star} />
            <img className="favourite__star" src={star} />
          </div>
          <p className="favourite__price">
            Price:
            <span className="span_type_favourite-price">23 924 ₽</span>
          </p>
        </div>
        <div className="favourite">
          <p className="favourite__name">Moscow Marriott Grand Hotel</p>
          <button className="favourite__like"></button>
          <div className="favourite__duration">
            <p className="favourite__date">28 June, 2020</p>
            <img
              className="favourite__dash"
              src={durationDash}
              alt="Серое тире"
            />
            <p className="favourite__days">1 день</p>
          </div>
          <div className="favourite__rating">
            <img className="favourite__star" src={star} />
            <img className="favourite__star" src={star} />
            <img className="favourite__star" src={star} />
            <img className="favourite__star" src={star} />
            <img className="favourite__star" src={star} />
          </div>
          <p className="favourite__price">
            Price:
            <span className="span_type_favourite-price">23 924 ₽</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Favourites;
