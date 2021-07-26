import Handlebars from "handlebars";
import homePageTmpl from "./home.tmpl";
import "./home.scss";
import { login } from "./modules/login";
import { registration } from "./modules/registration";

export function homePage (inner: string = "login") {
  const tmpl = Handlebars.compile(homePageTmpl);
  let context = {};

  switch (inner) {
    case "registration":
      context = { header: "Регистрация", className: "registration", content: registration };
      break;
    default:
      context = { header: "Вход", className: "login", content: login };
      break;
  }

  return tmpl(context);
}
