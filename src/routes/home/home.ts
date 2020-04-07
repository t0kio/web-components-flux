import { HomePage } from "../../page/home";
export const home = {
  path: "/",
  action: () => {
    customElements.define(HomePage.is, HomePage);
    return "<home-page></home-page>";
  },
};
