import UniversalRouter from "universal-router";
import { routes } from "./routes";
import { rootStore } from "./module";

const router = new UniversalRouter(routes);

const render = (location: string) => {
  router.resolve(location).then((html) => {
    document.body.innerHTML = html.toString();
  });
};

console.log(rootStore.getState());
render(window.location.pathname);
