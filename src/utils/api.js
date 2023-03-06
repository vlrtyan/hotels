const URI =
  "https://engine.hotellook.com/api/v2/cache.json?location=Moscow&currency=rub&checkIn=2023-03-10&checkOut=2023-03-14&limit=10";
const getResponseData = (res) => {
  console.log(res);
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
};

export const getHotels = () => {
  return fetch(URI, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    }
  }).then(getResponseData);
};
