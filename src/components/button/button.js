import Templator from "../../utils/templator";
import buttonTmpl from "./button.tmpl.js";
import './button.scss';

export default function button({ body }) {

    const tmpl = new Templator(buttonTmpl);

    const context = { body };

    const renderedTemplate = tmpl.compile(context);

    return renderedTemplate;

}