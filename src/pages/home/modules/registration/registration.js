import Handlebars from "handlebars";
import registrationTmpl from "./registration.tmpl.js";
import "./registration.scss";
import { Input } from "../../../../components/input";
import { Button } from "../../../../components/button";

export function registration() {

    const tmpl = Handlebars.compile(registrationTmpl);
    const context = {
        mailInput: Input({
            name: "email",
            text: "Почта",
            required: true,
            type: "email",
            errorMessage: "Неверная почта"
        }),
        loginInput: Input({
            name: "login",
            text: "Логин",
            required: true,
            errorMessage: "Неверный логин"
        }),
        firstNameInput: Input({
            name: "first_name",
            text: "Имя",
            required: true,
            errorMessage: "Неверное имя"
        }),
        secondNameInput: Input({
            name: "second_name",
            text: "Фамилия",
            errorMessage: "Неверная фамилия"
        }),
        phoneInput: Input({
            name: "phone",
            text: "Телефон",
            type: "tel",
            required: true,
            errorMessage: "Неверный телефон"
        }),
        passwordInput: Input({
            name: "password",
            text: "Пароль",
            type: "password",
            required: true,
            errorMessage: "Неверный пароль"
        }),
        button: Button({ body: "Зарегистрироваться" })
    };

    return tmpl(context);
}