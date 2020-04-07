import UniversalRouter from "universal-router";
import { routes } from "./routes";

const router = new UniversalRouter(routes);

const render = (location: string) => {
  router.resolve(location).then((html) => {
    document.body.innerHTML = html.toString();
  });
};

render(window.location.pathname);
