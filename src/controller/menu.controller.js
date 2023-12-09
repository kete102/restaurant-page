import views from "../views/menu.html";

export default () => {
  const divElement = document.createElement("section");
  divElement.innerHTML = views;

  return divElement;
};
