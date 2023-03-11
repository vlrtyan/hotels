import validator from "validator";

const allowedSymbols = /^[a-zA-Z\d.,;:&()*%#-]+$/;

export const validation = (name, value) => {
  if (name === "login") {
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
    } else if (!allowedSymbols.test(value)) {
      return "Поле содержит недопустимые символы";
    }
  }
};
