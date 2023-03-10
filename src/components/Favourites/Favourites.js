import "./Favourites.css";
import React from "react";
import { connect, useSelector } from "react-redux";
import FavouriteHotel from "../FavouriteHotel/FavouriteHotel";
import { sortFavouriteHotels } from "../../redux/actions";

function Favourites({ sortFavouriteHotels }) {
  const favouriteHotels = useSelector((state) => state.hotels.favouriteHotels);
  const [sortCriterion, setSortCriterion] = React.useState("sortByRating");
  const [sortOrderAscending, setSortOrderAscending] = React.useState(false);

  const handleSort = (e) => {
    const sort = e.currentTarget.id;
    if (sort === sortCriterion) {
      setSortOrderAscending(!sortOrderAscending);
      sortFavouriteHotels(sortCriterion, !sortOrderAscending);
    } else {
      setSortCriterion(sort);
      sortFavouriteHotels(sort, sortOrderAscending);
    }
  };

  const sortButtonClass = (id) => {
    if (sortCriterion === id) {
      return sortOrderAscending ? "sort-button sort-button_type_ascending" : "sort-button sort-button_type_descending";
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

export default connect(null, { sortFavouriteHotels })(Favourites);
