const profileEditTmpl =
    `
        <div class="profile-edit">
            {{ mailInput }}
            {{ loginInput }}
            {{ firstNameInput }}
            {{ secondNameInput }}
            {{ displayNameInput }}
            {{ phoneInput }}

            <div class="profile-edit__button">
                {{ button }}
            </div>
        </div>
    `;

export default profileEditTmpl;