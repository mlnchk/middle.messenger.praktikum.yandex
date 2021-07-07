const registrationTmpl =
    `
    <div class="registration">
        <div class="registration__inputs">
            {{{ mailInput }}}
            {{{ loginInput }}}
            {{{ firstNameInput }}}
            {{{ secondNameInput }}}
            {{{ phoneInput }}}
            {{{ passwordInput }}}
         </div>

         <div class="registration__footer">
            {{{ button }}}
            <a class="registration__enter-link" href="/">Войти</a>
         </div>
    </div>
    `;

export default registrationTmpl;