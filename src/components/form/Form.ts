import Handlebars from "handlebars";
import "./form.scss";
import formTmpl from "./form.tmpl";
import { Block } from "../../modules/block";
import { Props } from "../../types";

export class Form extends Block {
  constructor (props: Props) {
    super("div", props);
  }

  render (): string {
    const { name, body, autocomplete = "on", novalidate = false } = this.props;
    const id = this.getId();
    const tmpl = Handlebars.compile(formTmpl);
    const context = { name, body, autocomplete, id, novalidate };
    return tmpl(context);
  }
}
