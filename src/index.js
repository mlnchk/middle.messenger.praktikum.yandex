import './index.scss';

import homePage from './pages/home';
import profilePage from './pages/profile';
import chatPage from './pages/chat';
import errorPage from './pages/errors';

const root = document.querySelector('#root');

let inner = null;

switch (document.location.pathname) {
    case "/":
        inner = homePage("login");
        break;
    case "/registration/":
        inner = homePage("registration");
        break;

    case "/profile/":
        inner = profilePage();
        break;

    case "/profile-edit/":
        inner = profilePage("profileEdit");
        break;

    case "/password-edit/":
        inner = profilePage("passwordEdit");
        break;

    case "/chat-page/":
        inner = chatPage();
        break;
    case "/404/":
        inner = errorPage("404");
        break;

    case "/500/":
        inner = errorPage("500");
        break;


}
if (inner != null) {
    root.innerHTML = inner;
}