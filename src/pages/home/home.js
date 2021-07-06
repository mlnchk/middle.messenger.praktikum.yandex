import Templator from "../../utils/templator";
import homePageTmpl from "./home.tmpl";
import login from './modules/login';
import registration from './modules/registration';

import './home.scss';

export default function homePage(inner = "login") {
    const tmpl = new Templator(homePageTmpl);
    let context = {};

    switch (inner) {
        case "registration":
            context = { header: "Регистрация", content: registration };
            break;

        default:
            context = { header: "Вход", content: login }
            break;
    }

    const renderedTemplate = tmpl.compile(context);

    return renderedTemplate;
}