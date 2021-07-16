import Handlebars from "handlebars";
import profileEditTmpl from "./profileEdit.tmpl";
import "./profileEdit.scss";
import { Input } from "../../../../components/input";
import { Button } from "../../../../components/button";

export function profileEdit() {

    const tmpl = Handlebars.compile(profileEditTmpl);
    const context = {
        mailInput: Input({
            name: "email",
            text: "Почта",
            value: "pochta@yandex.ru",
            required: true,
            type: "email",
            errorMessage: "Неверная почта",
            isProfile: true
        }),
        loginInput: Input({
            name: "login",
            text: "Логин",
            value: "ivanivanov",
            required: true,
            errorMessage: "Неверный логин",
            isProfile: true
        }),
        firstNameInput: Input({
            name: "first_name",
            text: "Имя",
            value: "Иван",
            required: true,
            errorMessage: "Неверное имя",
            isProfile: true
        }),
        secondNameInput: Input({
            name: "second_name",
            text: "Фамилия",
            value: "Иванов",
            errorMessage: "Неверная фамилия",
            isProfile: true
        }),
        displayNameInput: Input({
            name: "display_name",
            text: "Имя в чате",
            value: "Ивашка",
            errorMessage: "Неверное имя в чате",
            isProfile: true
        }),
        phoneInput: Input({
            name: "phone",
            text: "Телефон",
            value: "+7 (909) 967 30 30",
            type: "tel",
            required: true,
            errorMessage: "Неверный телефон",
            isProfile: true
        }),
        button: Button({ body: "Сохранить" })
    };

    return tmpl(context);
}