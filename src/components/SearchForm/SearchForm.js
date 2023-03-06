import React from "react";
import "./SearchForm.css";
// import { validation } from "../../utils/validation";

function SearchForm({ handleSearch }) {
  const today = new Date().toISOString().split("T")[0];
  const [formData, setFormData] = React.useState({
    city: "Москва",
    date: today,
    days: "1",
  });
  // const [errors, setErrors] = React.useState({ city: "", date: "", days: "" });
  // const isValid = errors.email === undefined && errors.password === undefined;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // setErrors({ ...errors, [name]: validation(name, value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(formData);
  };

  return (
    <form className="search" lang="ru" onSubmit={handleSubmit}>
      <label className="search__label">Локация</label>
      <input
        className="search__input"
        type="text"
        name="city"
        id="city"
        onChange={handleChange}
        value={formData.city}
        required
      />
      <label className="search__label">Дата заселения</label>
      <input
        className="search__input"
        type="date"
        name="date"
        id="date"
        onChange={handleChange}
        value={formData.date}
        required
      />
      <label className="search__label">Количество дней</label>
      <input
        className="search__input"
        type="number"
        name="days"
        id="days"
        onChange={handleChange}
        value={formData.days}
        required
      />
      <button
        className="search__button"
        type="button"
        onSubmit={handleSubmit}
        // disabled={!isValid}
      >
        <span className="span_type_search-button">Найти</span>
      </button>
    </form>
  );
}

export default SearchForm;
