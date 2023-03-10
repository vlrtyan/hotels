import { takeEvery, put } from "redux-saga/effects";
import { getHotelsSuccess } from "../redux/actions";
import { formatDate } from "../utils/constants";

const getResponseData = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
};

function* watchGetHotelsRequest() {
  yield takeEvery("GET_HOTELS_REQUEST", searchHotels);
}

function* searchHotels(action) {
  const { city, date, days } = action.search;
  let checkOut = new Date(date);
  checkOut.setDate(checkOut.getDate() + Number(days));
  const data = yield fetch(
    `https://engine.hotellook.com/api/v2/cache.json?location=${city}&currency=rub&checkIn=${date}&checkOut=${
      formatDate(checkOut, "iso")
    }&limit=30`
  )
    .then(getResponseData)
    .catch((err) => console.log(err));
  yield put(getHotelsSuccess(data));
}

export default watchGetHotelsRequest;
