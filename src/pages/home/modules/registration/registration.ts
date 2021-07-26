import Handlebars from "handlebars";
import registrationTmpl from "./registration.tmpl";
import "./registration.scss";
import { Input } from "../../../../components/input";
import { Button } from "../../../../components/button";
import { Form } from "../../../../components/form";
import { submitFormData, formValidation } from "../../../../components/form/utils";

export function registration () {
  const tmpl = Handlebars.compile(registrationTmpl);

  const mailInput = new Input({
    name: "email",
    text: "Почта",
    required: true,
    type: "email",
    validationType: "email",
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

  const firstNameInput = new Input({
    name: "first_name",
    text: "Имя",
    required: true,
    validationType: "name",
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

  const secondNameInput = new Input({
    name: "second_name",
    text: "Фамилия",
    validationType: "name",
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

  const phoneInput = new Input({
    name: "phone",
    text: "Телефон",
    type: "tel",
    validationType: "phone",
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
    text: "Зарегистрироваться",
    type: "submit"
  });

  const context = {
    mailInput,
    loginInput,
    firstNameInput,
    secondNameInput,
    phoneInput,
    passwordInput,
    button: btn.toString()
  };

  const form = new Form({
    name: "registrationForm",
    body: tmpl(context),
    events: {
      submit: (event: Event) => {
        submitFormData(event);
      }
    },
    settings: {
      withInternalID: true
    },
    novalidate: true
  });

  return form.toString();
}
