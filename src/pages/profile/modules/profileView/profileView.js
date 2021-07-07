import Handlebars from "handlebars";
import profileViewTmpl from "./profileView.tmpl.js";
import './profileView.scss';
import input from '../../../../components/input';
import button from '../../../../components/button';


export default function profileView() {
    const tmpl = Handlebars.compile(profileViewTmpl);

    const context = {

        mailInput: input({
            name: "email",
            text: "Почта",
            value: "pochta@yandex.ru",
            required: true,
            disabled: true,
            type: "email",
            errorMessage: "Неверная почта",
            className: "profile"
        }),
        loginInput: input({
            name: "login",
            text: "Логин",
            value: "ivanivanov",
            required: true,
            disabled: true,
            errorMessage: "Неверный логин",
            className: "profile"
        }),
        firstNameInput: input({
            name: "first_name",
            text: "Имя",
            value: "Иван",
            required: true,
            disabled: true,
            errorMessage: "Неверное имя",
            className: "profile"
        }),
        secondNameInput: input({
            name: "second_name",
            text: "Фамилия",
            value: "Иванов",
            disabled: true,
            errorMessage: "Неверная фамилия",
            className: "profile"
        }),
        displayNameInput: input({
            name: "display_name",
            text: "Имя в чате",
            value: "Ивашка",
            disabled: true,
            errorMessage: "Неверное имя в чате",
            className: "profile"
        }),
        phoneInput: input({
            name: "phone",
            text: "Телефон",
            value: "+7 (909) 967 30 30",
            type: "tel",
            required: true,
            disabled: true,
            errorMessage: "Неверный телефон",
            className: "profile"
        })
    };

    return tmpl(context);
}