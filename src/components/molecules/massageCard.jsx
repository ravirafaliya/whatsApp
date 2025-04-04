import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import imagePath from "@/src/constants/imagePath";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

const MassageCard = ({ name, massage, time, massageCount, image }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <View style={styles.leftContainer}>
        <Image source={image} style={styles.image} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.massage}>{massage}</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.time}>{time}</Text>
        {massageCount > 0 && (
          <View style={styles.massageCountContainer}>
            <Text style={styles.massageCount}>{massageCount}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(10),
  },
  image: {
    height: moderateScale(53),
    width: moderateScale(53),
    borderRadius: moderateScale(53),
  },
  name: {
    fontSize: moderateScale(14),
    fontWeight: "bold",
    color: "#000",
  },
  massage: {
    fontSize: moderateScale(13),
    color: "#889095",
    fontWeight: "500",
  },
  time: {
    color: "#998E8E",
    fontSize: moderateScale(12),
    fontWeight: "bold",
  },
  massageCountContainer: {
    backgroundColor: "#036A01",
    width: moderateScale(22),
    height: moderateScale(22),
    borderRadius: moderateScale(22),
    justifyContent: "center",
    alignItems: "center",
  },
  massageCount: {
    color: "#fff",
    fontSize: moderateScale(12),
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(10),
  },
  rightContainer: {
    alignItems: "flex-end",
    gap: verticalScale(7),
  },
});

export default MassageCard;
