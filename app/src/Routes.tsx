import Chat from "./scenes/Chat";
import Cart from "./scenes/Cart";
import IconCom, { Icons as IconTypes } from "./components/Icon";
import colors from "../res/colors";
import HomeStack from "./scenes/home/homeStack";
import Filter from "./scenes/home/screen/Filter";
import Profile from "./scenes/Profile";
import Voucher from "./scenes/Voucher";
import Notification from "./scenes/Notification";
import Food from "./scenes/Food";
import Restaurant from "./scenes/Restaurant";
import Login from "./scenes/Login";
import Signup from "./scenes/Signup";
import ChatBox from "./scenes/ChatBox";
import TabNavigator from "./TabNavigator";
import OrderDetail from "./scenes/Order";
import Payment from "./scenes/Payment";
import Shipping from "./scenes/Shipping";
import Destination from "./scenes/Destination";

type ComponentType = React.FC<any>;

interface Path {
  route: string;
  label: string;
  iconType: any;
  icon: string;
  component: ComponentType;
  color: string;
  alphaClr: string;
  display?: string;
}
interface Screen {
  name: string;
  component: ComponentType;
  option: boolean;
}
//define routes here for react-navigation
export const Nav: Path[] = [
  {
    route: "Home",
    label: "Home",
    iconType: IconTypes.Feather,
    icon: "home",
    component: HomeStack,
    color: colors.secondary,
    alphaClr: colors.secondary,
  },
  {
    route: "Profile",
    label: "Profile",
    iconType: IconTypes.Feather,
    icon: "user",
    component: Profile,
    color: colors.secondary,
    alphaClr: colors.secondary,
  },
  {
    route: "Cart",
    label: "Cart",
    iconType: IconTypes.Feather,
    icon: "shopping-cart",
    component: Cart,
    color: colors.secondary,
    alphaClr: colors.secondary,
    display: "none"
  },
  {
    route: "Chat",
    label: "Chat",
    iconType: IconTypes.Feather,
    icon: "message-circle",
    component: Chat,
    color: colors.secondary,
    alphaClr: colors.secondary,
  },
];

export const Screen: Screen[] = [
  {
    name: "Chat Box",
    component: ChatBox,
    option: false,
  },
  {
    name: "Filter",
    component: Filter,
    option: false,
  },
  {
    name: "Voucher",
    component: Voucher,
    option: false,
  },
  {
    name: "Notification",
    component: Notification,
    option: false,
  },
  {
    name: "Food",
    component: Food,
    option: false,
  },
  {
    name: "Restaurant",
    component: Restaurant,
    option: false,
  },
  {
    name: "Order Detail",
    component: OrderDetail,
    option: false,
  },
  {
    name: "Payment",
    component: Payment,
    option: false,
  },
  {
    name: "Shipping",
    component: Shipping,
    option: false,
  },
  // {
  //   name: "Destination",
  //   component: Destination,
  //   option: false
  // }
];

export const Access: Screen[] = [
  {
    name: "Log In",
    component: Login,
    option: false,
  },
  {
    name: "Sign Up",
    component: Signup,
    option: false,
  },
];
