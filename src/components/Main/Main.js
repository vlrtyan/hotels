import SearchForm from "../SearchForm/SearchForm";
import Favourites from "../Favourites/Favourites";
import Catalogue from "../Catalogue/Catalogue";

function Main () {
    return(
        <main className="main">
        <div className="hotels__container">
          <SearchForm />
          <Favourites />
          <Catalogue />
        </div>
      </main>
    )
}

export default Main