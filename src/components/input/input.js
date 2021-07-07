import Handlebars from "handlebars";
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

    const tmpl = Handlebars.compile(template);

    const context = { name, text, type, required, value, disabled, errorMessage };

    return tmpl(context);

}