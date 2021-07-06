const inputTmpl =
    `<div class="input">
        <label class="input__label" for="{{ name }}">{{ text }}</label>
        <input 
            type="{{ type }}" 
            name="{{ name }}" 
            class="input__input"
            placeholder="{{ text }}" 
            required={{ required }} />
        <div class="input__error-message hide">{{ errorMessage }}</div>
    </div>
    `;

export default inputTmpl;