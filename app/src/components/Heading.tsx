import { View, Text } from "react-native";
import React from "react";
import IconPress from "./IconPress";
import R from "../R";





type Props = {
  navigation: string;
};

const Heading = (props: Props) => {
  const mainHeading = () => {
    return (
      <View>
        <Text>Find Your Favorite Food</Text>
        <IconPress
          color={R.colors.primary}
          size={24}
          icon={"notifications-outline"}
          style={{
            borderRadius: 6,
            backgroundColor: R.colors.primary,
            boxShadow: "1px 2px 4px 2px #ccc",
          }}
        />
      </View>
    );
  };

  const subHeading = () => {
    return (
      <View>
        <IconPress
          color={R.colors.primary}
          size={24}
          icon={"chevron-back-outline"}
          style={{
            borderRadius: 6,
            backgroundColor: 'white',
            boxShadow: "1px 2px 4px 2px #ccc",
          }}
        />
      </View>
    );
  };

  const choseHeading = () => {
    return props.navigation === "Home" ? mainHeading() : subHeading();
  };

  return choseHeading()
};

export default Heading;

// import { View, Text } from 'react-native'
// import React from 'react'

// type Props = {}

// const Heading = (props: Props) => {
//   return (
//     <View>
//       <Text>Heading</Text>
//     </View>
//   )
// }

// export default Heading
