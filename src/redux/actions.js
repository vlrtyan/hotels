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

export function changeSortCriteria(criterion, isAscending) {
  return {
    type: "CHANGE_SORT_CRITERIA",
    payload: {criterion, isAscending}
  }
}

export function sortFavouriteHotels (criterion, isAscending) {
  return {
    type: "SORT_FAVOURITE_HOTELS",
    payload: {criterion, isAscending}
  };
}