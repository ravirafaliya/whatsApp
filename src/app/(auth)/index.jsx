import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import imagePath from "../../constants/imagePath";
import {verticalScale, moderateScale } from "react-native-size-matters";
import { router } from "expo-router";

const Auth = () => {
    const [isLoading, setIsLoading] = useState(false);

    let navigateToWelcome = () => {
        router.push("/(auth)/termsAgree")
    }

    let loadingTime = () => {
        setIsLoading(true)
        setTimeout(navigateToWelcome,3000)
    }

    useEffect(()=>{
        setTimeout(loadingTime,2000)
    },[])
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.body}>
        <Image
          source={imagePath.logo}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.whatsAppText}>WhatsApp</Text>
      </View>
      <View style={styles.footer}>
        {
            isLoading ? (
                <>
                    <ActivityIndicator size={moderateScale(48)} color={"#0CCC83"}/>
                    <Text style={styles.loadingText}>Loading...</Text>
                </>
            ) : (
                <>
                <Text style={styles.fromText}>From</Text>
                <Text style={styles.facebookText}>FACEBOOK</Text>
                </>
            )
        }
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: verticalScale(50),
  },
  header: {},
  body: {
    alignItems: "center",
    gap: moderateScale(10),
  },
  footer: {
    alignItems: "center",
    height: verticalScale(80),
    justifyContent:"flex-end"
  },
  fromText: {
    fontSize: moderateScale(12),
    color: "#867373",
  },
  facebookText: {
    fontSize: moderateScale(15),
    color: "#000",
  },
  logo: {
    width: moderateScale(70),
    height: moderateScale(70),
    borderRadius: moderateScale(10),
  },
  whatsAppText: {
    fontSize: moderateScale(35),
    color: "#000",
    fontWeight: "bold",
  },
  loadingText: {
    fontSize: moderateScale(20),
    color: "#00A884",
    fontWeight: "bold",
    marginTop: verticalScale(15),
  },
});

export default Auth;
