export default
    `
        <div class="input">
            <input 
                type="{{ type }}" 
                name="{{ name }}" 
                class="input__input"
                placeholder="{{ text }}" 
                required={{ required }} />
            <div class="input__error-message hide">{{ errorMessage }}</div>
        </div>
    `;