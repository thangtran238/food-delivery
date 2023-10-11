import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Animated,
  PanResponder,
  Platform,
} from "react-native";
import React, { useRef } from "react";
import R from "../R";
import Button from "../components/Button";
import IconCom from "../components/Icon";
import FontAwesome5IconButton from "react-native-vector-icons/FontAwesome5";

const BOTTOM_SHEET_MAX_HEIGHT = R.dimensions.height;
const BOTTOM_SHEET_MIN_HEIGHT = R.dimensions.height * 0.65;
const MAX_UPWARD_TRANSLATE_Y =
  BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT + 48;
const MAX_DOWNWARD_TRANSLATE_Y = 0;
const DRAG_THRESHOLD = 40;
type Props = {};
const Profile = (props: Props) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const lastGestureDy = useRef(0);
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        animatedValue.setOffset(lastGestureDy.current);
      },
      onPanResponderMove: (e, gesture) => {
        animatedValue.setValue(gesture.dy);
      },
      onPanResponderRelease: (e, gesture) => {
        animatedValue.flattenOffset();
        lastGestureDy.current += gesture.dy;

        if (gesture.dy > 0) {
          // dragging down
          if (gesture.dy <= DRAG_THRESHOLD) {
            springAnimation("up");
          } else {
            springAnimation("down");
          }
        } else {
          // dragging up
          if (gesture.dy >= -DRAG_THRESHOLD) {
            springAnimation("down");
          } else {
            springAnimation("up");
          }
        }
      },
    })
  ).current;

  const springAnimation = (direction: any) => {
    console.log("direction", direction);
    lastGestureDy.current =
      direction === "down" ? MAX_DOWNWARD_TRANSLATE_Y : MAX_UPWARD_TRANSLATE_Y;
    Animated.spring(animatedValue, {
      toValue: lastGestureDy.current,
      useNativeDriver: true,
    }).start();
  };

  const bottomSheetAnimation = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
          outputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
          extrapolate: "clamp",
        }),
      },
    ],
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{
          width: "100%",
          height: "65%",
        }}
        resizeMode="cover"
        source={require(`../../res/${R.images.profile}`)}
      />
      <Animated.View style={[styles.bottomSheet, bottomSheetAnimation]}>
        <View style={styles.draggableArea} {...panResponder.panHandlers}>
          <View style={styles.dragHandle} />
        </View>

        <View style={styles.info}>
          <View>
          <Button
            styleType="custom"
            style={{
              backgroundColor: R.colors.primaryDark,
              borderRadius: 18.5,
              width: 111,
              height: 34,
              padding: 6,
              fontsize: 14,
            }}
            text={{ text: "Member Gold" }}
          />
          <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
            <Text style={styles.name}>Arash Ranjbaran</Text>
            <FontAwesome5IconButton
              name="edit"
              color={R.colors.secondary}
              size={25}
            />
          </View>
          </View>
          <Text style={{color: R.colors.substance, marginVertical: 12}}>awdesign.ar@gmail.com</Text>
            <View>
              
            </View>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  info: {
    padding: 24,
  },
  name: {
    fontSize: R.strings.h1,
    fontWeight: R.fonts.bold,
  },
  bottomSheet: {
    position: "absolute",
    width: "100%",
    height: BOTTOM_SHEET_MAX_HEIGHT,
    bottom: BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT,
    ...Platform.select({
      android: { elevation: 3 },
      ios: {
        shadowColor: "#a8bed2",
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowOffset: {
          width: 2,
          height: 2,
        },
      },
    }),
    backgroundColor: "white",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  draggableArea: {
    width: 132,
    height: 32,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  dragHandle: {
    width: 100,
    height: 6,
    backgroundColor: R.colors.substance,
    borderRadius: 10,
  },
});

export default Profile;
