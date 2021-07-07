import Handlebars from "handlebars";
import profilePageTmpl from "./profile.tmpl";
import profileView from "./modules/profileView";
import profileEdit from "./modules/profileEdit";
import passwordEdit from "./modules/passwordEdit";

import './profile.scss';

export default function profilePage(inner = "profileView") {
    const tmpl = Handlebars.compile(profilePageTmpl);
    let context = {};

    switch (inner) {
        case "profileEdit":
            context = {
                content: profileEdit
            }
            break;
        case "passwordEdit":
            context = {
                content: passwordEdit
            }
            break;
        default:
            context = { header: "Иван", content: profileView }
            break;
    }

    return tmpl(context);
}