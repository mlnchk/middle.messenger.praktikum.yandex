import "./index.scss";
import { homePage } from "./pages/home";
import { profilePage } from "./pages/profile";
import { chatPage } from "./pages/chat";
import { errorPage } from "./pages/errors";

const root: Element | null = document.querySelector("#root");
let inner: string | null;

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

  case "/500/":
    inner = errorPage("500");
    break;

  default:
    inner = errorPage("404");
    break;
}

if (root !== null) {
  root.innerHTML = inner;
}
