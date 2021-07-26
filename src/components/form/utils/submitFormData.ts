import { checkAllForm } from "./formValidation";

export const submitFormData = (event: Event) => {
  const form = event.target as HTMLFormElement;
  if (form != null) {
    if (checkAllForm(form)) {
      printFormData(form);
    }
  }
};

const printFormData = (form: HTMLFormElement) => {
  const inputs = form.querySelectorAll("input");

  if (inputs != null) {
    const data: Record<string, string> = {};

    inputs.forEach((input) => {
      const { name } = input;
      data[name] = input.value;
    });

    console.log(data);
  }
};
