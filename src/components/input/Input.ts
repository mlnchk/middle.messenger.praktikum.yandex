import Handlebars from "handlebars";
import inputTmpl from "./input.tmpl";
import inputProfile from "./inputProfile.tmpl";
import { Block } from "../../modules/block";
import { Props } from "../../types";
import "./input.scss";

export class Input extends Block {
  constructor (props: Props) {
    super("div", props);
  }

  render () {
    const { isProfile, name, text, type, required, value, disabled, errorMessage, validationType = "text" } = this.props;
    const id = this.getId();
    const template = (isProfile) ? inputProfile : inputTmpl;
    const tmpl = Handlebars.compile(template);
    const context = { name, text, type, required, value, disabled, errorMessage, id, validationType };
    return tmpl(context);
  }
}
