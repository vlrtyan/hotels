import "./SearchForm.css";

function SearchForm() {
  return (
    <form className="search">
      <label className="search__label">Локация</label>
      <input className="search__input" />
      <label className="search__label">Дата заселения</label>
      <input className="search__input" />
      <label className="search__label">Количество дней</label>
      <input className="search__input" />
      <button className="search__button" type="button">
        <span className="span_type_search-button">Найти</span>
      </button>
    </form>
  );
}

export default SearchForm;
