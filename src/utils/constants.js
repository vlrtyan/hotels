import image1 from "../images/carousel/img-1.webp";
import image2 from "../images/carousel/img-2.webp";
import image3 from "../images/carousel/img-3.webp";
import image4 from "../images/carousel/img-4.webp";
export const carouselImages = [
  { name: "Дом в лесу", src: image1 },
  { name: "Лес", src: image2 },
  { name: "Дорога в лесу", src: image3 },
  { name: "Дорога в лесу", src: image4 },
  { name: "Дорога в лесу", src: image4 },
  { name: "Дорога в лесу", src: image4 },
  { name: "Дорога в лесу", src: image4 },
  { name: "Дорога в лесу", src: image4 },
];

export const getNoun = (number, one, two, five) => {
  let n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return five;
  }
  n %= 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return two;
  }
  return five;
};

export const getPrice = (number) => {
  return Math.ceil(number).toLocaleString("ru") + " ₽";
};

export const formatDate = (date, format) => {
  if (format === "long") {
    return `${new Date(date).toLocaleDateString("ru", {
      day: "2-digit",
      month: "long",
    })} ${new Date(date).getFullYear()}`;
  }
  if (format === "iso") {
    return date.toISOString().split("T")[0];
  }
};

export const today = formatDate(new Date(), "iso");
