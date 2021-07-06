import './index.scss';

import homePage from './pages/home';
import profilePage from './pages/profile';

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


}
if (inner != null) {
    root.innerHTML = inner;
}