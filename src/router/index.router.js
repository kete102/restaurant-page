import { pages } from "../controller/index.controller";

const router = (route) => {
  let content = document.querySelector("#content");
  content.innerHTML = "";

  if (route == "#/") {
    content.appendChild(pages.home());
  } else if (route == "#/about") {
    content.appendChild(pages.about());
  } else if (route == "#/contact") {
    content.appendChild(pages.contact());
  } else if (route == "#/menu") {
    content.appendChild(pages.menu());
  } else {
    content.appendChild(pages.notFound());
  }
};

export { router };
