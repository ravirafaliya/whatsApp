import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import ButtonComp from "../../components/atoms/ButtonComp";
import { AntDesign } from "@expo/vector-icons";

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Enter your phone number</Text>
          <Text style={styles.description}>
            WhatsApp will need to verify your phone number.
            <Text style={styles.linkDescription}> What's my number?</Text>
          </Text>
        </View>
        <View style={styles.inputMainContainer}>
          <View style={styles.dropDownContainer}>
            <View />
            <Text style={styles.dropDownTitle}>India</Text>
            <AntDesign
              name="caretdown"
              size={moderateScale(14)}
              color="black"
            />
          </View>
          <View style={styles.horizontalLine} />
         <View style={styles.inputContainer}>
          <View style={styles.countryCode}>
            <Text style={styles.countryCodeText}>+ 91</Text>
            <View style={styles.horizontalLine} />
          </View>
          <View style={{gap:verticalScale(10),flex:1}}>
          <TextInput style={styles.input} placeholder="Enter Your Phone Number"/>
          <View style={styles.horizontalLine} />
          </View>
         </View>
        </View>
      </View>
      <View style={styles.footer}>
        <ButtonComp title="Next" style={{ paddingHorizontal: scale(29) }} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: verticalScale(50),
    alignItems: "center",
    paddingHorizontal: scale(40),
  },
  header: {
    gap: verticalScale(50),
  },
  headingContainer: {
    gap: verticalScale(20),
  },
  inputMainContainer: {},
  inputContainer: {
    
    paddingVertical: verticalScale(12),
    flexDirection: "row",
    alignItems: "center",
    gap: scale(20),
  },
  heading: {
    fontSize: moderateScale(20),
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    fontSize: moderateScale(13),
    fontWeight: "400",
    color: "black",
  },
  linkDescription: {
    color: "#002AC0",
  },
  footer: {},
  horizontalLine: {
    height: verticalScale(1),
    backgroundColor: "#00A884",
  },
  dropDownContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(20),
  },
  dropDownTitle: {
    fontSize: moderateScale(16),
    fontWeight: "600",
    color: "black",
  },
  countryCode: {
    gap: verticalScale(10),
    fontWeight: "500",
    color: "black",
  },
  input: {
    fontSize:moderateScale(16)
  },
  countryCodeText: {
    fontSize: moderateScale(16),
    fontWeight: "500",
    color: "black",
  },
  numberInput:{
    gap: verticalScale(10),
    width:"100%"
  }
});

export default Login;
