import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React, { useState } from "react";
import ButtonComp from "../../components/atoms/ButtonComp";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { AntDesign } from "@expo/vector-icons";
import OTPInput from "@codsod/react-native-otp-input";
import { router } from "expo-router";

const VerifyOtp = () => {
  const [otp, setOTP] = useState("");
  
  const onPress = () => {}

  const returnToLodIn = () => {
    router.push("/(auth)/login")
  }
    
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <AntDesign name="arrowleft" style={styles.backButton} onPress={returnToLodIn}/>
        <Text style={styles.headTitle}>Enter OTP Code</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.otpSendText}>
          Code has been send to +91 90******73
        </Text>
        <OTPInput
        length={4}
        onOtpComplete={(txt) => setOTP(txt)}
        style={styles.otpContainer}
        inputStyle={styles.inputStyle}
      />
        <Text style={styles.otpSendText}>
          Resend Code in <Text style={styles.counterText}>56</Text>s
        </Text>
      </View>
      <View style={styles.footer}>
        <ButtonComp
          title={"Verify"}
          onPress={onPress}
          style={styles.verifyButton}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    padding:moderateScale(20),
    flex:1,
    justifyContent:"space-between",
    paddingTop:verticalScale(30)
  },
  head:{
    flexDirection:"row",
    alignItems:"center",
    gap:scale(10)
  },
  backButton:{
    fontSize:moderateScale(24),
    color:"black",
    fontWeight:"bold"
  },
  headTitle:{
    fontSize:moderateScale(20),
    color:"black",
    fontWeight:"bold"
  },
  body:{
    alignItems:"center",
    gap:verticalScale(25)
  },
  counterText:{
    color:"#00A884"
  },
  otpSendText:{
    fontSize:moderateScale(16),
    fontWeight:"400"
  },
  verifyButton:{
    borderRadius:moderateScale(30),
    marginBottom:moderateScale(50),
    marginHorizontal:moderateScale(50)
  },
  inputStyle:{
    borderColor:"black",
    borderRadius:moderateScale(15),
    height:verticalScale(50),
    width:scale(50)
  },
  otpContainer:{
    gap:scale(10)
  }
});

export default VerifyOtp;
