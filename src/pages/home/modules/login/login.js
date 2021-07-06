import Templator from "../../../../utils/templator";
import loginTmpl from "./login.tmpl.js";
import './login.scss';
import input from '../../../../components/input';
import button from '../../../../components/button';


export default function login() {
    const tmpl = new Templator(loginTmpl);

    const context = {
        loginInput: input({
            name: "login",
            text: "Логин",
            required: true,
            errorMessage: "Неверный логин"
        }),
        passwordInput: input({
            name: "password",
            text: "Пароль",
            type: "password",
            required: true,
            errorMessage: "Неверный пароль"
        }),
        button: button({
            body: "Авторизоваться"
        })
    };

    const renderedTemplate = tmpl.compile(context);

    return renderedTemplate;
}