import Handlebars from "handlebars";
import registrationTmpl from "./registration.tmpl.js";
import './registration.scss';
import input from '../../../../components/input';
import button from '../../../../components/button';


export default function registration() {
    const tmpl = Handlebars.compile(registrationTmpl);

    const context = {

        mailInput: input({
            name: "email",
            text: "Почта",
            required: true,
            type: "email",
            errorMessage: "Неверная почта"
        }),
        loginInput: input({
            name: "login",
            text: "Логин",
            required: true,
            errorMessage: "Неверный логин"
        }),
        firstNameInput: input({
            name: "first_name",
            text: "Имя",
            required: true,
            errorMessage: "Неверное имя"
        }),
        secondNameInput: input({
            name: "second_name",
            text: "Фамилия",
            errorMessage: "Неверная фамилия"
        }),
        phoneInput: input({
            name: "phone",
            text: "Телефон",
            type: "tel",
            required: true,
            errorMessage: "Неверный телефон"
        }),
        passwordInput: input({
            name: "password",
            text: "Пароль",
            type: "password",
            required: true,
            errorMessage: "Неверный пароль"
        }),
        button: button({ body: "Зарегистрироваться" })
    };

    return tmpl(context);
}