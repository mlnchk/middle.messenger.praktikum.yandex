import Handlebars from "handlebars";
import loginTmpl from "./login.tmpl.js";
import "./login.scss";
import { Input } from "../../../../components/input";
import { Button } from "../../../../components/button";

export function login() {

    const tmpl = Handlebars.compile(loginTmpl);
    const context = {
        loginInput: Input({
            name: "login",
            text: "Логин",
            required: true,
            errorMessage: "Неверный логин"
        }),
        passwordInput: Input({
            name: "password",
            text: "Пароль",
            type: "password",
            required: true,
            errorMessage: "Неверный пароль"
        }),
        button: Button({
            body: "Авторизоваться"
        })
    };

    return tmpl(context);
}