import Handlebars from "handlebars";
import errorPageTmpl from "./error.tmpl";
import "./error.scss";

export function errorPage (errorCode: string) {
  const tmpl = Handlebars.compile(errorPageTmpl);
  let context = {};

  switch (errorCode) {
    case "404":
      context = {
        errorCode: "404",
        errorText: "Не туда попали"
      };
      break;
    case "500":
      context = {
        errorCode: "500",
        errorText: "Мы уже фиксим"
      };
      break;
  }

  return tmpl(context);
}
