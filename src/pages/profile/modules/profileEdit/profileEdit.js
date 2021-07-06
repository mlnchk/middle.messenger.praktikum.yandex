import Templator from "../../../../utils/templator";
import profileEditTmpl from "./profileEdit.tmpl";
import './profileEdit.scss';
import input from '../../../../components/input';
import button from '../../../../components/button';


export default function profileEdit() {
    const tmpl = new Templator(profileEditTmpl);

    const context = {

        mailInput: input({
            name: "email",
            text: "Почта",
            value: "pochta@yandex.ru",
            required: true,
            type: "email",
            errorMessage: "Неверная почта",
            className: "profile"
        }),
        loginInput: input({
            name: "login",
            text: "Логин",
            value: "ivanivanov",
            required: true,
            errorMessage: "Неверный логин",
            className: "profile"
        }),
        firstNameInput: input({
            name: "first_name",
            text: "Имя",
            value: "Иван",
            required: true,
            errorMessage: "Неверное имя",
            className: "profile"
        }),
        secondNameInput: input({
            name: "second_name",
            text: "Фамилия",
            value: "Иванов",
            errorMessage: "Неверная фамилия",
            className: "profile"
        }),
        displayNameInput: input({
            name: "display_name",
            text: "Имя в чате",
            value: "Ивашка",
            errorMessage: "Неверное имя в чате",
            className: "profile"
        }),
        phoneInput: input({
            name: "phone",
            text: "Телефон",
            value: "+7 (909) 967 30 30",
            type: "tel",
            required: true,
            errorMessage: "Неверный телефон",
            className: "profile"
        }),
        button: button({ body: "Сохранить" })
    };

    const renderedTemplate = tmpl.compile(context);

    return renderedTemplate;
}