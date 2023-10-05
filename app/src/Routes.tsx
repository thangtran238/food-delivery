import Home from "./scenes/Home";
import Chat from "./scenes/Home";
import Cart from "./scenes/Home";
import Profile from "./scenes/Home";
import Order from "./scenes/Home";
import Shipping from "./scenes/Home";

//define routes here for react-navigation
export const Routes = [
  {
    name: "Home",
    component: Home ,
  },
  {
    name: "Chat",
    component: Chat ,
  },
  {
    name: "Cart",
    component: Cart ,
  },
  {
    name: "Profile",
    component:  Profile ,
  },
  {
    name: "Order",
    component: Order ,
  },
  {
    name: "Shipping",
    component:  Shipping ,
  },

];
