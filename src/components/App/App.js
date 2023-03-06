import "./App.css";
import "../../vendor/fonts/roboto.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Login from "../Login/Login";

function App() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <>
            <Header />
            <Main />
          </>
        }
      />
      <Route path="/sign-in" element={<Login />} />
    </Routes>
  );
}

export default App;
