const initialState = {
  searchResult: [],
  favouriteHotels: [],
};

const hotelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_HOTELS_SUCCESS":
      return {
        ...state,
        searchResult: action.payload,
      };
      case "ADD_TO_FAVOURITE":
        return {
          ...state,
          favouriteHotels: [...state.favouriteHotels, action.payload]
        }
        case "DELETE_FROM_FAVOURITE":
          return {
            ...state,
            favouriteHotels: [...state.favouriteHotels.filter((hotel) => hotel.hotelId !== action.payload.hotelId)]
          }
    default:
      return state;
  }
};

export default hotelsReducer;
