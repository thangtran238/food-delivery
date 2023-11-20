import { useNavigation } from "@react-navigation/native";

const GET_NAV = ():any => {
  const navigation = useNavigation();
  return navigation.getState().routeNames[0];
};


export {GET_NAV}