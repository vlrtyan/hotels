import "./Login.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { validation } from "../../utils/validation";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    login: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({ login: "", password: "" });
  const isValid = errors.login === undefined && errors.password === undefined;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: validation(name, value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ login: "", password: "" });
    navigate("/");
  };
  return (
    <main className="login">
      <form className="login__form" onSubmit={handleSubmit}>
        <h1 className="login__title">Simple Hotel Check</h1>
        <label
          className={`login__label ${
            errors.login ? "login__label_type_error" : ""
          }`}
        >
          Логин
        </label>
        <input
          className="login__input"
          type="email"
          placeholder="Введите e-mail"
          value={formData.login}
          onChange={handleChange}
          name="login"
          id="login"
          required
        />
        <p
          className={`login__error-message ${
            !errors.login ? "" : "login__error-message_shown"
          }`}
        >
          {errors.login}
        </p>
        <label
          className={`login__label ${
            errors.password ? "login__label_type_error" : ""
          }`}
        >
          Пароль
        </label>
        <input
          className="login__input"
          type="password"
          placeholder="Введите пароль"
          value={formData.password}
          onChange={handleChange}
          name="password"
          id="password"
          required
        />
        <p
          className={`login__error-message ${
            !errors.password ? "" : "login__error-message_shown"
          }`}
        >
          {errors.password}
        </p>
        <button
          className="login__button"
          type="submit"
          onSubmit={handleSubmit}
          disabled={!isValid}
        >
          Войти
        </button>
      </form>
    </main>
  );
}

export default Login;
