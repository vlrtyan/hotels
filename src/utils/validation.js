import validator from "validator";

const nameSymbols = /^[a-zA-Zа-яёА-ЯЁ\s-]+$/;

export const validation = (name, value) => {
  if (name === "city") {
    if (!value) {
      return "Поле не может быть пустым";
    } else if (!nameSymbols.test(value)) {
      return "Поле содержит недопустимые символы";
    }
  } else if (name === "date") {
    if (!value) {
      return "Поле не может быть пустым";
    }
  } else if (name === "days") {
    if (!value) {
      return "Поле не может быть пустым";
    } else if (typeof value !== Number) {
      return "Поле должно содержать число";
    }
  } else if (name === "login") {
    if (!value) {
      return "Поле не может быть пустым";
    } else if (!validator.isEmail(value.toLowerCase())) {
      return "Некорректный e-mail";
    }
  } else if (name === "password") {
    if (!value) {
      return "Поле не может быть пустым";
    } else if (value.length < 8) {
      return "Минимум 8 символов";
    }
  }
};
