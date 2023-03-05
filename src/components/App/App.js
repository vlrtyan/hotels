import "./App.css";
import "../../vendor/fonts/roboto.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Favourites from "../Favourites/Favourites";
import { Link } from "react-router-dom";
import durationDash from "../../images/hotel-duration-divider.svg";
import breadcrumbDivider from "../../images/breadcrumb-divider.svg";
import star from "../../images/star-present.svg";

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="hotels">
          <div className="hotels__container">
            <SearchForm />
            <Favourites />
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
                <p className="catalogue__checkin-date">07 июля 2020</p>
              </div>
              <div className="catalogue-carousel">
                <img
                  className="catalogue-carousel__photo"
                  src="https://images.unsplash.com/photo-1603969486441-663f43794a50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                />
                <img
                  className="catalogue-carousel__photo"
                  src="https://images.unsplash.com/photo-1603969486441-663f43794a50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                />{" "}
                <img
                  className="catalogue-carousel__photo"
                  src="https://images.unsplash.com/photo-1603969486441-663f43794a50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                />
                <img
                  className="catalogue-carousel__photo"
                  src="https://images.unsplash.com/photo-1603969486441-663f43794a50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                />
              </div>
              <p className="catalogue__favourites">
                Добавлено в Избранное:<span className="catalogue__span">3</span>
                отеля
              </p>
              <ul className="catalogue__list">
                <div className="hotel">
                  <img
                    className="hotel__image"
                    src="https://images.unsplash.com/photo-1603969486441-663f43794a50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                  />
                  <p className="hotel__name">Moscow Marriott Grand Hotel</p>
                  <button className="hotel__like"></button>
                  <div className="hotel__duration">
                    <p className="hotel__date">7 июля 2020</p>
                    <img
                      className="hotel__dash"
                      src={durationDash}
                      alt="Серое тире"
                    />
                    <p className="hotel__days">1 день</p>
                  </div>
                  <div className="hotel__rating">
                    <img className="hotel_star" src={star} />
                    <img className="hotel_star" src={star} />
                    <img className="hotel_star" src={star} />
                    <img className="hotel_star" src={star} />
                    <img className="hotel_star" src={star} />
                  </div>
                  <p className="hotel__price">
                    Price:{" "}
                    <span className="span_type_hotel-price">23 924 ₽</span>
                  </p>
                </div>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
