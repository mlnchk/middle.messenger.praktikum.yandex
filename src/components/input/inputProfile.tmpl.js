export default
    `
        <div class="input-profile">
            <label for="{{ name }}" class="input-profile__label">{{ text }}</label>
            <input 
                type="{{ type }}" 
                name="{{ name }}" 
                required="{{ required }}"
                value = "{{ value }}"
                {{#if disabled}}
                    disabled
                {{/if}}
                class="input-profile__input" />
            <div class="input-profile__error-message hide">{{ errorMessage }}</div>
        </div>
    `;