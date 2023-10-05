import { colors } from "./colors";
import { fonts } from "./fonts";
import { strings } from "./strings";
export const images = {
  //define images here
  thumbnail: {
    restaurant: {
      width: 147,
      height: 184,
      background: colors.substance,
      color: colors.primary,
      title: { weight: fonts.bold, color: colors.fontColor, string: strings.h2 },
      des: { weight: fonts.thin, color:colors.subFontColor,string: strings.h4 },
      borderRadius: "6px"

    },
    item: {
      width: 323,
      height: 87,
      backgroundColor: colors.substance,
      color: colors.fontColor,
      title: {fontWeight: fonts.bold, color: colors.fontColor},
      des: {fontWeight:fonts.thin, color: colors.subFontColor,},
      price: { color: colors.secondary },
      borderRadius: "8px"
    },
    user: {},
  },
  icon: {
    restaurant: {
      width: 90, height: 90, justifyItem: "cover"
    },
    item: {
      width: 64, height: 64, justifyItem: "cover", borderRadius: "6px"
    },
    tabBar: {
      off:{
        width: 24,
        height: 24,
        color: colors.substance,
      },
      on: {
        width: 24,
        height: 24,
        color: colors.secondary,
      }
    }
    
  },
  profile: {},
};
