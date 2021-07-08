import Handlebars from "handlebars";
import inputTmpl from "./input.tmpl.js";
import inputProfile from "./inputProfile.tmpl.js";
import "./input.scss";

export function Input({
    name,
    text,
    type = "text",
    value = null,
    required = false,
    disabled = false,
    errorMessage = "Неправильные данные",
    isProfile = false
}) {

    const template = (isProfile) ? inputProfile : inputTmpl;
    const tmpl = Handlebars.compile(template);
    const context = { name, text, type, required, value, disabled, errorMessage };

    return tmpl(context);
}