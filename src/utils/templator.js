import get from './get';

export default class Templator {
    TEMPLATE_REGEXP = /\{\{(.*?)\}\}/gi;

    constructor(template) {
        this._template = template;
    }

    compile(ctx) {
        return this._compileTemplate(ctx);
    }

    _compileTemplate = (ctx) => {
        let tmpl = this._template;
        let key = null;
        const regExp = this.TEMPLATE_REGEXP;

        // Важно делать exec именно через константу, иначе уйдёте в бесконечный цикл
        while ((key = regExp.exec(tmpl))) {
            if (key[1]) {
                const tmplValue = key[1].trim();
                // get — функция, написанная ранее в уроке
                const data = get(ctx, tmplValue);
                tmpl = tmpl.replace(new RegExp(key[0], "gi"), data);
            }
        }

        return tmpl;
    }
}