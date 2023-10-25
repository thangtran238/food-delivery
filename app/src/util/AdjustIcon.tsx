import HomeIcon from "../components/HomeIcon";
import { HomeIconData } from "../../res/data/IconData"; 

const iconDeclaration = () => {
  return HomeIconData.map((icon, index) => (
    <HomeIcon key={index} name={icon.name}  color={icon.color} />
  ));
}

const focusedIcon = (routeName: string) => {
  const focusedIconData = HomeIconData.find((icon) => routeName === icon.component);
  return focusedIconData ? focusedIconData.name : null;
}

export { iconDeclaration, focusedIcon };
