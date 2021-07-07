import Handlebars from "handlebars";
import buttonTmpl from "./button.tmpl.js";
import './button.scss';

export default function button({ body }) {

    const tmpl = Handlebars.compile(buttonTmpl);

    const context = { body };

    return tmpl(context);

}