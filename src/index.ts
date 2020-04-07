import UniversalRouter from "universal-router";
import "./simple.ts";

const routes = [
  {
    path: "/", // optional
    action: () => `<hello-world></hello-world>`,
  },
  {
    path: "/home", // optional
    action: () => `<div>hello</div>`,
  },
];

const router = new UniversalRouter(routes);

router.resolve("/").then((html) => {
  document.body.innerHTML = html.toString();
});

setTimeout(() => {
  router.resolve("/home").then((html) => {
    document.body.innerHTML = html.toString();
  });
}, 5000);
