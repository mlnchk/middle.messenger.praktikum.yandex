import Handlebars from "handlebars";
import homePageTmpl from "./home.tmpl";
import login from './modules/login';
import registration from './modules/registration';

import './home.scss';

export default function homePage(inner = "login") {
    const tmpl = Handlebars.compile(homePageTmpl);

    switch (inner) {
        case "registration":
            context = { header: "Регистрация", content: registration };
            break;

        default:
            context = { header: "Вход", content: login }
            break;
    }

    return tmpl(context);
}