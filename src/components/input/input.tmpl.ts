export default
`
  <div class="input {{ className }}">
    <input
      data-id="{{ id }}"
      data-validation-type="{{ validationType }}"
      type="{{ type }}" 
      name="{{ name }}" 
      class="input__input"
      placeholder="{{ text }}" 
      required={{ required }} />
    <div class="error-message input__error-message hide"></div>
  </div>
`;
