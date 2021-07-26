const noAvatar = require("./noAvatar.svg") as string;

export default
`
  <div class="profile-page">
    <div class="profile-page__aside">
      <a href="/profile/" class="arrow-button"></a>
    </div>
    <div class="profile-page__content">
      <div class="profile-page__content-container">
        <div class="profile-page__avatar">
          <img src="${noAvatar}" alt="Аватар" class="profile-page__avatar-img">
            <div class="profile-page__avatar-overlay">Поменять аватар</div>
        </div>
      <h1 class="profile-page__header">{{ header }}</h1>
        {{{ content }}}
      </div>
    </div>
  </div>
`;
