import Handlebars from "handlebars";
import loginTmpl from "./login.tmpl";
import "./login.scss";
import { Input } from "../../../../components/input";
import { Button } from "../../../../components/button";
import { Form } from "../../../../components/form";
import { submitFormData, formValidation } from "../../../../components/form/utils";

export function login () {
  const tmpl = Handlebars.compile(loginTmpl);

  const loginInput = new Input({
    name: "login",
    text: "Логин",
    required: true,
    validationType: "login",
    events: {
      focus: (event: Event) => {
        formValidation(event);
      },
      blur: (event: Event) => {
        formValidation(event);
      },
      input: (event: Event) => {
        formValidation(event);
      }
    }
  }).toString();

  const passwordInput = new Input({
    name: "password",
    text: "Пароль",
    type: "password",
    validationType: "password",
    required: true,
    events: {
      focus: (event: Event) => {
        formValidation(event);
      },
      blur: (event: Event) => {
        formValidation(event);
      },
      input: (event: Event) => {
        formValidation(event);
      }
    }
  }).toString();

  const btn = new Button({
    text: "Авторизоваться",
    type: "submit",
    disabled: true
  });

  const context = {
    loginInput,
    passwordInput,
    button: btn.toString()
  };

  const form = new Form({
    name: "loginForm",
    body: tmpl(context),
    events: {
      submit: (event: Event) => {
        submitFormData(event);
      }
    },
    novalidate: true,
    settings: {
      withInternalID: true
    }
  });

  return form.toString();
}
