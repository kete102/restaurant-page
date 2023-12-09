import views from "../views/contact.html";

export default () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = views;

  return divElement;
};
