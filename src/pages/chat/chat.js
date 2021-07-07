import Handlebars from "handlebars";
import chatPageTmpl from "./chat.tmpl";

import './chat.scss';

export default function chatPage() {
    const tmpl = Handlebars.compile(chatPageTmpl);
    const context = {
        content: "Страница в разработке"
    }
    return tmpl(context);
}