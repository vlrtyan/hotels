import "./App.css";
import "../../vendor/fonts/roboto.css";
import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Login from "../Login/Login";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const navigate = useNavigate();

  const onLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem("login");
    navigate("/sign-in");
  };

  const login = (formData) => {
    localStorage.setItem("login", formData.login);
    navigate("/");
    setLoggedIn(true);
  };

  React.useEffect(() => {
    if (localStorage.getItem("login")) {
      setLoggedIn(true);
    }
  }, []);

  React.useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  }, [loggedIn, navigate]);

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <ProtectedRoute loggedIn={loggedIn}>
            <Header logout={onLogout} />
            <Main />
          </ProtectedRoute>
        }
      />
      <Route path="/sign-in" element={<Login login={login} />} />
    </Routes>
  );
}

export default App;
