import "./Catalogue.css";
import React from "react";
import Hotel from "../Hotel/Hotel";
import { Link } from "react-router-dom";
import breadcrumbDivider from "../../images/breadcrumb-divider.svg";
import { carouselImages } from "../../utils/constants";
import { getHotels } from "../../utils/api";

function Catalogue() {
  const [hotels, setHotels] = React.useState([
    {
      locationId: 12153,
      priceAvg: 22960.0,
      priceFrom: 22960.0,
      hotelName: "Moscow Marriott Grand Hotel",
      location: {
        name: "Moscow",
        country: "Russia",
        geo: { lon: 37.617508, lat: 55.752041 },
        state: null,
      },
      stars: 5,
      pricePercentile: {
        3: 22960.0,
        99: 22960.0,
        50: 22960.0,
        10: 22960.0,
        35: 22960.0,
        75: 22960.0,
      },
      hotelId: 333578,
    },
    {
      locationId: 12153,
      priceAvg: 28000.0,
      priceFrom: 28000.0,
      hotelName: "Golden Ring Hotel",
      location: {
        name: "Moscow",
        country: "Russia",
        geo: { lon: 37.617508, lat: 55.752041 },
        state: null,
      },
      stars: 5,
      pricePercentile: {
        3: 28000.0,
        99: 28000.0,
        50: 28000.0,
        10: 28000.0,
        35: 28000.0,
        75: 28000.0,
      },
      hotelId: 333643,
    },
    {
      locationId: 12153,
      priceAvg: 32000.0,
      priceFrom: 32000.0,
      hotelName: "Crowne Plaza Moscow World Trade Centre",
      location: {
        name: "Moscow",
        country: "Russia",
        geo: { lon: 37.617508, lat: 55.752041 },
        state: null,
      },
      stars: 5,
      pricePercentile: {
        3: 32000.0,
        99: 32000.0,
        50: 32000.0,
        10: 32000.0,
        35: 32000.0,
        75: 32000.0,
      },
      hotelId: 333548,
    },
    {
      locationId: 12153,
      priceAvg: 18000.0,
      priceFrom: 18000.0,
      hotelName: "AZIMUT Hotel Smolenskaya Moscow",
      location: {
        name: "Moscow",
        country: "Russia",
        geo: { lon: 37.617508, lat: 55.752041 },
        state: null,
      },
      stars: 4,
      pricePercentile: {
        3: 18000.0,
        99: 18000.0,
        50: 18000.0,
        10: 18000.0,
        35: 18000.0,
        75: 18000.0,
      },
      hotelId: 480240,
    },
    {
      locationId: 1491124,
      priceAvg: 14720.0,
      priceFrom: 14720.0,
      hotelName: "Vega Izmailovo Hotel & Convention Center",
      location: {
        name: "Moscow",
        country: "Russia",
        geo: { lon: 37.617508, lat: 55.752041 },
        state: null,
      },
      stars: 4,
      pricePercentile: {
        3: 14720.0,
        99: 14720.0,
        50: 14720.0,
        10: 14720.0,
        35: 14720.0,
        75: 14720.0,
      },
      hotelId: 333570,
    },
    {
      locationId: 1491124,
      priceAvg: 14800.0,
      priceFrom: 14800.0,
      hotelName: "Izmailovo Alpha Hotel",
      location: {
        name: "Moscow",
        country: "Russia",
        geo: { lon: 37.617508, lat: 55.752041 },
        state: null,
      },
      stars: 4,
      pricePercentile: {
        3: 14800.0,
        99: 14800.0,
        50: 14800.0,
        10: 14800.0,
        35: 14800.0,
        75: 14800.0,
      },
      hotelId: 276236,
    },
    {
      locationId: 1416544,
      priceAvg: 12800.0,
      priceFrom: 12800.0,
      hotelName: "SkyPoint Sheremetyevo Hotel",
      location: {
        name: "Moscow",
        country: "Russia",
        geo: { lon: 37.617508, lat: 55.752041 },
        state: null,
      },
      stars: 3,
      pricePercentile: {
        3: 12800.0,
        99: 12800.0,
        50: 12800.0,
        10: 12800.0,
        35: 12800.0,
        75: 12800.0,
      },
      hotelId: 276260,
    },
    {
      locationId: 1416544,
      priceAvg: 18400.0,
      priceFrom: 18400.0,
      hotelName:
        "Holiday Inn Express Moscow - Sheremetyevo Airport, an IHG Hotel",
      location: {
        name: "Moscow",
        country: "Russia",
        geo: { lon: 37.617508, lat: 55.752041 },
        state: null,
      },
      stars: 3,
      pricePercentile: {
        3: 18400.0,
        99: 18400.0,
        50: 18400.0,
        10: 18400.0,
        35: 18400.0,
        75: 18400.0,
      },
      hotelId: 1863310081,
    },
    {
      locationId: 12153,
      priceAvg: 7160.0,
      priceFrom: 7160.0,
      hotelName: "Aristocrat Mini Hotel",
      location: {
        name: "Moscow",
        country: "Russia",
        geo: { lon: 37.617508, lat: 55.752041 },
        state: null,
      },
      stars: 2,
      pricePercentile: {
        3: 7160.0,
        99: 7160.0,
        50: 7160.0,
        10: 7160.0,
        35: 7160.0,
        75: 7160.0,
      },
      hotelId: 27926062,
    },
    {
      locationId: 12153,
      priceAvg: 12000.0,
      priceFrom: 12000.0,
      hotelName: "Mini Hotel Chistoprudniy",
      location: {
        name: "Moscow",
        country: "Russia",
        geo: { lon: 37.617508, lat: 55.752041 },
        state: null,
      },
      stars: 2,
      pricePercentile: {
        3: 12000.0,
        99: 12000.0,
        50: 12000.0,
        10: 12000.0,
        35: 12000.0,
        75: 12000.0,
      },
      hotelId: 27926056,
    },
  ]);

  //   React.useEffect(() => {
  //     getHotels()
  //       .then((res) => {
  //         setHotels(res);
  //         console.log(res);
  //       })
  //       .catch((err) => console.log(err));
  //   }, []);

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
            <Link className="breadcrumb-navigation__link">Москва</Link>
            <img
              className="breadcrumb-navigation__divider"
              src={breadcrumbDivider}
              alt="Стрелка вправо"
            />
          </li>
        </ul>
        <p className="catalogue__checkin-date">
          {`${new Date().toLocaleDateString("ru", { day: "2-digit", month: "long"})} ${new Date().getFullYear()}`}
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
        Добавлено в Избранное:<span className="catalogue__span">3</span>
        отеля
      </p>
      <ul className="catalogue__list">
        {hotels.map((hotel) => (
          <Hotel key={hotel.hotelId} hotel={hotel} />
        ))}
      </ul>
    </div>
  );
}

export default Catalogue;
