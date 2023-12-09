import "../index.css";
import "../form.css";

import { router } from "../router/index.router";

const init = () => {
  router(window.location.hash);

  window.addEventListener("hashchange", () => {
    router(window.location.hash);
  });
};

window.addEventListener("load", init);
