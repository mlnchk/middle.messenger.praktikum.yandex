import Handlebars from "handlebars";
import profileViewTmpl from "./profileView.tmpl.js";
import "./profileView.scss";
import { Input } from "../../../../components/input";

export function profileView() {

    const tmpl = Handlebars.compile(profileViewTmpl);
    const context = {
        mailInput: Input({
            name: "email",
            text: "Почта",
            value: "pochta@yandex.ru",
            required: true,
            disabled: true,
            type: "email",
            errorMessage: "Неверная почта",
            isProfile: true
        }),
        loginInput: Input({
            name: "login",
            text: "Логин",
            value: "ivanivanov",
            required: true,
            disabled: true,
            errorMessage: "Неверный логин",
            isProfile: true
        }),
        firstNameInput: Input({
            name: "first_name",
            text: "Имя",
            value: "Иван",
            required: true,
            disabled: true,
            errorMessage: "Неверное имя",
            isProfile: true
        }),
        secondNameInput: Input({
            name: "second_name",
            text: "Фамилия",
            value: "Иванов",
            disabled: true,
            errorMessage: "Неверная фамилия",
            isProfile: true
        }),
        displayNameInput: Input({
            name: "display_name",
            text: "Имя в чате",
            value: "Ивашка",
            disabled: true,
            errorMessage: "Неверное имя в чате",
            isProfile: true
        }),
        phoneInput: Input({
            name: "phone",
            text: "Телефон",
            value: "+7 (909) 967 30 30",
            type: "tel",
            required: true,
            disabled: true,
            errorMessage: "Неверный телефон",
            isProfile: true
        })
    };

    return tmpl(context);
}