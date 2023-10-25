import Home from "./scenes/Home";
import Chat from "./scenes/Chat";
import Cart from "./scenes/Cart";
import Profile from "./scenes/Profile";
import IconCom, { Icons as IconTypes } from "./components/Icon";
import colors from "../res/colors";

type ComponentType = React.FC<any>;

interface Path {
  route: string
  label: string
  iconType: any
  icon: string
  component: ComponentType
  color: string
  alphaClr: string 
}
//define routes here for react-navigation
export const Routes: Path[] = [
  {
    route: 'Home',
    label: 'Home',
    iconType: IconTypes.Feather,
    icon: 'home',
    component: Home,
    color: colors.secondary,
    alphaClr: colors.secondary,
  },
  {
    route: 'Profile',
    label: 'Profile',
    iconType: IconTypes.Feather,
    icon: 'user',
    component: Profile,
    color: colors.secondary,
    alphaClr: colors.secondary,
  },
  {
    route: 'Cart',
    label: 'Cart',
    iconType: IconTypes.Feather,
    icon: 'shopping-cart',
    component: Cart,
    color: colors.secondary,
    alphaClr: colors.secondary,
  },
  {
    route: 'Chat',
    label: 'Chat',
    iconType: IconTypes.Feather,
    icon: 'message-circle',
    component: Chat,
    color: colors.secondary,
    alphaClr: colors.secondary,
  },
];
