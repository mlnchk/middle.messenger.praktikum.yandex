import Templator from "../../utils/templator";
import profilePageTmpl from "./profile.tmpl";
import profileView from "./modules/profileView";
import profileEdit from "./modules/profileEdit";

import './profile.scss';

export default function profilePage(inner = "profileView") {
    const tmpl = new Templator(profilePageTmpl);
    let context = {};

    switch (inner) {
        case "profileEdit":
            context = {
                header: "Иван",
                content: profileEdit
            }
            break;
        default:
            context = { header: "Иван", content: profileView }
            break;
    }

    const renderedTemplate = tmpl.compile(context);

    return renderedTemplate;
}