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
    color: colors.primary,
    alphaClr: colors.primaryAlpha,
  },
  {
    route: 'Profile',
    label: 'Profile',
    iconType: IconTypes.Feather,
    icon: 'home',
    component: Profile,
    color: colors.green,
    alphaClr: colors.greenAlpha,
  },
  {
    route: 'Cart',
    label: 'Cart',
    iconType: IconTypes.Feather,
    icon: 'home',
    component: Cart,
    color: colors.red,
    alphaClr: colors.redAlpha,
  },
  {
    route: 'Chat',
    label: 'Chat',
    iconType: IconTypes.FontAwesome,
    icon: 'home',
    component: Chat,
    color: colors.purple,
    alphaClr: colors.purpleAlpha,
  },
];
