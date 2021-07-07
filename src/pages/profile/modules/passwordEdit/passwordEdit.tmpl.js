const profileEditTmpl =
    `
        <div class="password-edit">
            {{{ inputs.oldPassword }}}
            {{{ inputs.newPassword }}}
            {{{ inputs.repeatPassword }}}

            <div class="password-edit__button">
                {{{ button }}}
            </div>
        </div>
    `;

export default profileEditTmpl;