import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const ButtonComp = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, style]}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#00A884",
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(10),
    borderRadius: moderateScale(4),
    alignItems: "center",
  },
  buttonText: {
    fontSize: moderateScale(14),
    color: "white",
  },
});

export default ButtonComp;
