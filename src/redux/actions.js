export function changeSearch(formData) {
  return {
    type: "CHANGE_SEARCH",
    data: formData,
  };
}

export function getHotelsRequest(search) {
  return {
    type: "GET_HOTELS_REQUEST",
    search: search
  };
}

export function getHotelsSuccess(hotels) {
  return {
    type: "GET_HOTELS_SUCCESS",
    payload: hotels,
  };
}

export function addToFavourite(hotel, search) {
  return {
    type: "ADD_TO_FAVOURITE",
    payload: hotel,
    search: search,
  };
}

export function deleteFromFavourite(hotel) {
  return {
    type: "DELETE_FROM_FAVOURITE",
    payload: hotel,
  };
}

export function sortFavouriteHotels (criterion, ascendingOrder) {
  return {
    type: "SORT_FAVOURITE_HOTELS",
    criterion: criterion,
    ascendingOrder: ascendingOrder,
  };
}