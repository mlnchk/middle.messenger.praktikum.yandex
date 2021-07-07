import Handlebars from "handlebars";
import passwordEditTmpl from "./passwordEdit.tmpl";
import './passwordEdit.scss';
import input from '../../../../components/input';
import button from '../../../../components/button';


export default function passwordEdit() {
    const tmpl = Handlebars.compile(passwordEditTmpl);

    const context = {
        inputs: {
            oldPassword: input({
                name: "oldPassword",
                text: "Старый пароль",
                type: "password",
                required: true,
                errorMessage: "Неверный пароль",
                className: "profile"
            }),
            newPassword: input({
                name: "newPassword",
                text: "Новый пароль",
                type: "password",
                required: true,
                className: "profile"
            }),
            repeatPassword: input({
                name: "repeatPassword",
                text: "Повторите новый пароль",
                type: "password",
                required: true,
                errorMessage: "Пароли не совпадают",
                className: "profile"
            }),
        },
        button: button({ body: "Сохранить" })
    };

    return tmpl(context);
}