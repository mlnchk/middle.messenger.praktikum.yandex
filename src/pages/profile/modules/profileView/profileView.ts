import Handlebars from "handlebars";
import profileViewTmpl from "./profileView.tmpl";
import "./profileView.scss";
import { Input } from "../../../../components/input";

export function profileView (): string {
  const tmpl = Handlebars.compile(profileViewTmpl);

  const mailInput = new Input({
    name: "email",
    text: "Почта",
    value: "pochta@yandex.ru",
    required: true,
    disabled: true,
    type: "email",
    isProfile: true
  }).toString();

  const loginInput = new Input({
    name: "login",
    text: "Логин",
    value: "ivanivanov",
    required: true,
    disabled: true,
    isProfile: true
  }).toString();

  const firstNameInput = new Input({
    name: "first_name",
    text: "Имя",
    value: "Иван",
    required: true,
    disabled: true,
    isProfile: true
  }).toString();

  const secondNameInput = new Input({
    name: "second_name",
    text: "Фамилия",
    value: "Иванов",
    disabled: true,
    isProfile: true
  }).toString();

  const displayNameInput = new Input({
    name: "display_name",
    text: "Имя в чате",
    value: "Ивашка",
    disabled: true,
    isProfile: true
  }).toString();

  const phoneInput = new Input({
    name: "phone",
    text: "Телефон",
    value: "+7 (909) 967 30 30",
    type: "tel",
    required: true,
    disabled: true,
    isProfile: true
  }).toString();

  const context = {
    mailInput,
    loginInput,
    firstNameInput,
    secondNameInput,
    displayNameInput,
    phoneInput
  };

  return tmpl(context);
}
