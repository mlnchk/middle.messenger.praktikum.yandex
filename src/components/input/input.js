import Templator from "../../utils/templator";
import inputTmpl from "./input.tmpl.js";
import inputProfile from "./inputProfile.tmpl.js";
import './input.scss';

export default function input({ name, text, type = "text", value = null, required = false, disabled = false, errorMessage = "Неправильные данные", className = null }) {

    let template = inputTmpl;

    switch (className) {
        case "profile":
            template = inputProfile;
            break;
    }

    const tmpl = new Templator(template);

    const context = { name, text, type, required, value, disabled, errorMessage };

    const renderedTemplate = tmpl.compile(context);

    return renderedTemplate;

}