import "./Catalogue.css";
import React from "react";
import { connect, useSelector } from "react-redux";
import Hotel from "../Hotel/Hotel";
import breadcrumbDivider from "../../images/breadcrumb-divider.svg";
import { carouselImages, getNoun, formatDate } from "../../utils/constants";
import { getHotelsRequest } from "../../redux/actions";

function Catalogue({ search, hotels, getHotelsRequest }) {
  const carousel = document.querySelector(".catalogue-carousel__container");
  const favouriteHotels = useSelector((state) => state.hotels.favouriteHotels);

  const handleCarouselClick = (e) => {
    const img = carousel.querySelector(".catalogue-carousel__photo");
    const buttonType = e.currentTarget.id;
    const imgWidth = img.clientWidth + 12;
    if (buttonType === "rightButton") {
      carousel.scrollLeft += imgWidth;
    } else if (buttonType === "leftButton") {
      carousel.scrollLeft -= imgWidth;
    }
  };

  React.useEffect(() => {
    getHotelsRequest(search);
  }, [getHotelsRequest, search]);

  return (
    <div className="catalogue">
      <div className="catalogue__header">
        <ul className="breadcrumb-navigation">
          <li className="breadcrumb-navigation__item">
            Отели
            <img
              className="breadcrumb-navigation__divider"
              src={breadcrumbDivider}
              alt="Стрелка вправо"
            />
          </li>
          <li className="breadcrumb-navigation__item">
            {search.city}
            <img
              className="breadcrumb-navigation__divider"
              src={breadcrumbDivider}
              alt="Стрелка вправо"
            />
          </li>
        </ul>
        <p className="catalogue__checkin-date">
          {formatDate(search.date, "long")}
        </p>
      </div>
      <div className="catalogue-carousel">
        <div
          className="catalogue-carousel__nav catalogue-carousel__nav_type_left"
          onClick={handleCarouselClick}
          id="leftButton"
        ></div>
        <div className="catalogue-carousel__container">
          {carouselImages.map((image, index) => (
            <img
              key={index}
              className="catalogue-carousel__photo"
              src={image.src}
              alt={image.name}
            />
          ))}
        </div>
        <div
          className="catalogue-carousel__nav catalogue-carousel__nav_type_right"
          onClick={handleCarouselClick}
          id="rightButton"
        ></div>
      </div>
      <p className="catalogue__favourites">
        Добавлено в Избранное:
        <span className="catalogue__span">{favouriteHotels.length}</span>
        {getNoun(favouriteHotels.length, "отель", "отеля", "отелей")}
      </p>
      <ul className="catalogue__list">
        {hotels.map((hotel) => (
          <Hotel
            key={hotel.hotelId}
            hotel={hotel}
            favouriteHotels={favouriteHotels}
          />
        ))}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    search: state.search,
    hotels: state.hotels.searchResult,
  };
}

export default connect(mapStateToProps, { getHotelsRequest })(Catalogue);
