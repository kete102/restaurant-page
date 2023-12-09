import Home from "./home.controller";
import About from "./about.controller";
import Menu from "./menu.controller";
import Contact from "./contact.controller";
import notFound from "./404.controller";

const pages = {
  home: Home,
  about: About,
  menu: Menu,
  contact: Contact,
  notFound: notFound,
};

export { pages };
