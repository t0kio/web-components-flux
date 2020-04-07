import UniversalRouter from "universal-router";
import "./simple.js";

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
  console.log(html);
  document.body.innerHTML = html; // renders: <h1>Posts</h1>
});

setTimeout(() => {
  router.resolve("/home").then((html) => {
    document.body.innerHTML = html; // renders: <h1>Posts</h1>
  });
}, 5000);
