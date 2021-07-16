import Handlebars from "handlebars";
import passwordEditTmpl from "./passwordEdit.tmpl";
import "./passwordEdit.scss";
import { Input } from "../../../../components/input";
import { Button } from "../../../../components/button";

export function passwordEdit() {

    const tmpl = Handlebars.compile(passwordEditTmpl);
    const context = {
        oldPassword: Input({
            name: "oldPassword",
            text: "Старый пароль",
            type: "password",
            required: true,
            errorMessage: "Неверный пароль",
            className: "profile"
        }),
        newPassword: Input({
            name: "newPassword",
            text: "Новый пароль",
            type: "password",
            required: true,
            className: "profile"
        }),
        repeatPassword: Input({
            name: "repeatPassword",
            text: "Повторите новый пароль",
            type: "password",
            required: true,
            errorMessage: "Пароли не совпадают",
            className: "profile"
        }),
        button: Button({ body: "Сохранить" })
    };

    return tmpl(context);
}