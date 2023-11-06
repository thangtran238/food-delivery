import Chat from "./scenes/Chat";
import Cart from "./scenes/Cart";
import IconCom, { Icons as IconTypes } from "./components/Icon";
import colors from "../res/colors";
import HomeStack from "./scenes/home/homeStack";
import Filter from "./scenes/home/screen/Filter";
import Profile from "./scenes/Profile";
import Voucher from "./scenes/Voucher";
import Notification from "./scenes/Notification";

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
    display: 'none'
  },
  {
    route: "Cart",
    label: "Cart",
    iconType: IconTypes.Feather,
    icon: "shopping-cart",
    component: Cart,
    color: colors.secondary,
    alphaClr: colors.secondary,
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

export const Screen:Screen[] = [
  {
    name: "Filter",
    component: Filter,
    option: false
  },
  {
    name: "Voucher",
    component: Voucher,
    option: false
  },
  {
    name: "Notification",
    component: Notification,
    option: false
  },
]
