import { HomePage } from "../../page/home";
export const home = {
  path: "/home",
  action: () => {
    customElements.define(HomePage.is, HomePage);
    return "<home-page></home-page>";
  },
};
