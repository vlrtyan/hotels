import { today } from "../utils/constants";

const initialState = {
  city: "Москва",
  date: today,
  days: "1",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_SEARCH":
      const { city, date, days } = action.data;
      return {
        ...state,
        city,
        date,
        days,
      };
    default:
      return state;
  }
};

export default searchReducer;
