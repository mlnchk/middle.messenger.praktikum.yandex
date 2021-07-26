import Handlebars from "handlebars";
import passwordEditTmpl from "./passwordEdit.tmpl";
import "./passwordEdit.scss";
import { Input } from "../../../../components/input";
import { Button } from "../../../../components/button";
import { Form } from "../../../../components/form";
import { submitFormData, formValidation } from "../../../../components/form/utils";

export function passwordEdit (): string {
  const tmpl = Handlebars.compile(passwordEditTmpl);

  const oldPassword = new Input({
    name: "oldPassword",
    text: "Старый пароль",
    type: "password",
    required: true,
    validationType: "password",
    isProfile: true,
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

  const newPassword = new Input({
    name: "newPassword",
    text: "Новый пароль",
    type: "password",
    validationType: "password",
    required: true,
    isProfile: true,
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

  const repeatPassword = new Input({
    name: "repeatPassword",
    text: "Повторите новый пароль",
    type: "password",
    required: true,
    validationType: "password",
    isProfile: true,
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
    text: "Сохранить"
  });

  const context = {
    oldPassword,
    newPassword,
    repeatPassword,
    button: btn.toString()
  };

  const form = new Form({
    name: "passwordEditForm",
    body: tmpl(context),
    events: {
      submit: (event: Event) => {
        submitFormData(event);
      }
    },
    settings: {
      withInternalID: true
    }
  });

  return form.toString();
}
