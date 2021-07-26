export default
`
  <form class="form" name="{{ name }}" autocomplete="{{ autocomplete }}" data-id="{{ id }}" 
    {{#if novalidate}} 
      novalidate
    {{/if}}
  >
    {{{ body }}}
  </form>
`;
