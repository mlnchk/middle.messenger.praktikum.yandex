import Handlebars from "handlebars";
import buttonTmpl from "./button.tmpl.js";
import "./button.scss";

export function Button({ body }) {

    const tmpl = Handlebars.compile(buttonTmpl);
    const context = { body };

    return tmpl(context);
}