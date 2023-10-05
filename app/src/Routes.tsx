import Home from "./scenes/Home";
import Chat from "./scenes/Chat";
import Cart from "./scenes/Cart";
import Profile from "./scenes/Profile";

//define routes here for react-navigation
export const Routes: Path[] = [
  {
    name: "Home",
    component: Home,
    index: true,
  },
  {
    name: "Profile",
    component: Profile,
  },
  {
    name: "Cart",
    component: Cart,
  },
  {
    name: "Chat",
    component: Chat,
  },
];
