import { LoginPage } from "../../page/login";
export const login = {
  path: "/login",
  action: () => {
    customElements.define(LoginPage.is, LoginPage);
    return "<login-page></login-page>";
  },
};
