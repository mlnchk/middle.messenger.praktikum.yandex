const errorPageTmpl =
    `
<div class="error-page">
    <div class="error-page__code">
        {{ errorCode }}
    </div>
    <div class="error-page__text">
        {{ errorText }}
    </div>
    <div class="error-page__link">
        <a href="/chat">Назад к чатам</a>
    </div>
</div>
`;

export default errorPageTmpl;