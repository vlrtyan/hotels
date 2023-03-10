import React from "react";
import { connect } from "react-redux";
import "./SearchForm.css";
import { changeSearch } from "../../redux/actions";

function SearchForm({ search, changeSearch }) {
  const [formData, setFormData] = React.useState({
    city: search.city,
    date: search.date,
    days: search.days,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    changeSearch(formData);
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
        type="submit"
        onSubmit={handleSubmit}
      >
        <span className="span_type_search-button">Найти</span>
      </button>
    </form>
  );
}

function mapStateToProps(state) {
  return {
    search: state.search,
  };
}

export default connect(mapStateToProps, { changeSearch })(SearchForm);
