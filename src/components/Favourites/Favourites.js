import "./Favourites.css";
import React from "react";
import { connect, useSelector } from "react-redux";
import FavouriteHotel from "../FavouriteHotel/FavouriteHotel";
import { changeSortCriteria } from "../../redux/actions";

function Favourites({ sortCriterion, isAscending, changeSortCriteria }) {
  const favouriteHotels = useSelector((state) => state.hotels.favouriteHotels);

  const handleSort = (e) => {
    const sort = e.currentTarget.id;
    if (sort === sortCriterion) {
      changeSortCriteria(sortCriterion, !isAscending);
    } else {
      changeSortCriteria(sort, isAscending);
    }
  };

  const sortButtonClass = (id) => {
    if (sortCriterion === id) {
      return isAscending
        ? "sort-button sort-button_type_ascending"
        : "sort-button sort-button_type_descending";
    } else {
      return "sort-button sort-button_type_inactive";
    }
  };

  return (
    <div className="favourites">
      <h2 className="favourites__title">Избранное</h2>
      <div className="favourites__sorting">
        <button
          className={sortButtonClass("sortByRating")}
          type="button"
          id="sortByRating"
          onClick={handleSort}
        >
          <span className="sort-button__text">Рейтинг</span>
          <div className="sort-button__image"></div>
        </button>
        <button
          className={sortButtonClass("sortByPrice")}
          type="button"
          id="sortByPrice"
          onClick={handleSort}
        >
          <span className="sort-button__text">Цена</span>
          <div className="sort-button__image"></div>
        </button>
      </div>
      <div className="favourites__list">
        {favouriteHotels.map((favourite) => (
          <FavouriteHotel
            key={favourite.hotelId}
            favouriteHotel={favourite}
            favouriteHotels={favouriteHotels}
          />
        ))}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    sortCriterion: state.hotels.sortCriteria.criterion,
    isAscending: state.hotels.sortCriteria.isAscending,
  };
}

export default connect(mapStateToProps, { changeSortCriteria })(Favourites);
