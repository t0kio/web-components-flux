import UniversalRouter from "universal-router";
import { routes } from "./routes";

const router = new UniversalRouter(routes);

router.resolve("/").then((html) => {
  document.body.innerHTML = html.toString();
});
