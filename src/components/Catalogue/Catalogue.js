import "./Catalogue.css";
import React from "react";
import { connect, useSelector } from "react-redux";
import Hotel from "../Hotel/Hotel";
import { Link } from "react-router-dom";
import breadcrumbDivider from "../../images/breadcrumb-divider.svg";
import { carouselImages, getNoun } from "../../utils/constants";
import { getHotelsRequest } from "../../redux/actions";

function Catalogue({ search, hotels, getHotelsRequest }) {

  const favouriteHotels = useSelector((state) => state.hotels.favouriteHotels);

  React.useEffect(() => {
    getHotelsRequest(search);
  }, [getHotelsRequest, search]);

  return (
    <div className="catalogue">
      <div className="catalogue__header">
        <ul className="breadcrumb-navigation">
          <li className="breadcrumb-navigation__item">
            <Link className="breadcrumb-navigation__link">Отели</Link>
            <img
              className="breadcrumb-navigation__divider"
              src={breadcrumbDivider}
              alt="Стрелка вправо"
            />
          </li>
          <li className="breadcrumb-navigation__item">
            <Link className="breadcrumb-navigation__link">{search.city}</Link>
            <img
              className="breadcrumb-navigation__divider"
              src={breadcrumbDivider}
              alt="Стрелка вправо"
            />
          </li>
        </ul>
        <p className="catalogue__checkin-date">
          {`${new Date(search.date).toLocaleDateString("ru", {
            day: "2-digit",
            month: "long",
          })} ${new Date(search.date).getFullYear()}`}
        </p>
      </div>
      <div className="catalogue-carousel">
        {carouselImages.map((image, index) => (
          <img
            key={index}
            className="catalogue-carousel__photo"
            src={image.src}
            alt={image.name}
          />
        ))}
      </div>
      <p className="catalogue__favourites">
        Добавлено в Избранное:<span className="catalogue__span">{favouriteHotels.length}</span>
        {getNoun(favouriteHotels.length, "отель", "отеля", "отелей")}
      </p>
      <ul className="catalogue__list">
        {hotels
          ? hotels.map((hotel) => (
              <Hotel
                key={hotel.hotelId}
                hotel={hotel}
                favouriteHotels={favouriteHotels}
              />
            ))
          : ""}
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
