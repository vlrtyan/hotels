import "./App.css";
import "../../vendor/fonts/roboto.css";
import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Favourites from "../Favourites/Favourites";
import Catalogue from "../Catalogue/Catalogue";


function App() {
  return (
    <>
      <Header />
      <main>
        <section className="hotels">
          <div className="hotels__container">
            <SearchForm />
            <Favourites />
            <Catalogue />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
