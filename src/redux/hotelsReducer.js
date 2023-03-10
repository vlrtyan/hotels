const initialState = {
  searchResult: [],
  favouriteHotels: [],
  sortCriteria: {
    criterion: "sortByRating",
    isAscending: false,
  },
};

const hotelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_HOTELS_SUCCESS":
      return {
        ...state,
        searchResult: action.payload,
      };
    case "ADD_TO_FAVOURITE":
      const liked = action.payload;
      liked.date = action.search.date;
      liked.days = action.search.days;
      return {
        ...state,
        favouriteHotels: [...state.favouriteHotels, action.payload],
      };
    case "DELETE_FROM_FAVOURITE":
      return {
        ...state,
        favouriteHotels: [
          ...state.favouriteHotels.filter(
            (hotel) => hotel.hotelId !== action.payload.hotelId
          ),
        ],
      };
    case "SORT_FAVOURITE_HOTELS":
      return {
        ...state,
        favouriteHotels: [
          ...state.favouriteHotels.sort((a, b) => {
            switch (action.payload.criterion) {
              case "sortByRating":
                return action.payload.isAscending
                  ? a.stars > b.stars
                    ? 1
                    : -1
                  : a.stars > b.stars
                  ? -1
                  : 1;
              case "sortByPrice":
                return action.payload.isAscending
                  ? a.priceAvg > b.priceAvg
                    ? 1
                    : -1
                  : a.priceAvg > b.priceAvg
                  ? -1
                  : 1;
              default:
                return a.stars > b.stars ? 1 : -1;
            }
          }),
        ],
      };
    case "CHANGE_SORT_CRITERIA":
      const {criterion, isAscending} = action.payload;
      return {
        ...state,
        sortCriteria: {criterion, isAscending}
      };
    default:
      return state;
  }
};

export default hotelsReducer;
