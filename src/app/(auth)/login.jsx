import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import ButtonComp from "../../components/atoms/ButtonComp";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import CountryPicker from "react-native-country-picker-modal";

const Login = () => {
  const [visible, setVisible] = useState("false");
  const [countryName, setCountryName] = useState("India");
  const [countryCode, setCountryCode] = useState("+91");
  const [buttonPlace, setButtonPlace] = useState(false);
  const [error, setError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleInputChange = (text) => {
    if (/^\d{0,10}$/.test(text)) {
      setPhoneNumber(text);
    }
  };

  const validatePhoneNumber = () => {
    if (phoneNumber.trim() === "") {
      setError("Phone number is required");
      setModalVisible(true);
      return false;
    } else if (phoneNumber.length !== 10) {
      setError("Phone number must be 10 digits");
      setModalVisible(true);
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    if (validatePhoneNumber()) {
      router.push("/(auth)/verifyOtp");
    }
  };

  const closeModal = () => {
    setModalVisible(false);
    setError("");
  };

  return (
    <SafeAreaView
      style={[styles.container, buttonPlace && styles.alternateContainer]}
    >
      <View style={styles.header}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Enter your phone number</Text>
          <Text style={styles.description}>
            WhatsApp will need to verify your phone number.
            <Text style={styles.linkDescription}> What's my number?</Text>
          </Text>
        </View>
        <View style={styles.inputMainContainer}>
          <TouchableOpacity
            style={styles.dropDownContainer}
            onPress={() => setVisible(true)}
          >
            <View />
            <Text style={styles.dropDownTitle}>{countryName}</Text>
            <AntDesign
              name="caretdown"
              size={moderateScale(14)}
              color="black"
            />
          </TouchableOpacity>
          <View style={styles.horizontalLine} />
          <View style={styles.inputContainer}>
            <View style={styles.countryCode}>
              <Text style={styles.countryCodeText}>{countryCode}</Text>
              <View style={styles.horizontalLine} />
            </View>
            <View style={{ gap: verticalScale(10), flex: 1 }}>
              <TextInput
                style={styles.input}
                placeholder="Enter Your Phone Number"
                keyboardType="number-pad"
                maxLength={10}
                value={phoneNumber}
                onChangeText={handleInputChange}
                onBlur={validatePhoneNumber}
                onFocus={() => setButtonPlace(true)}
              />

              <View style={styles.horizontalLine} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <ButtonComp
          title="Next"
          style={[styles.nextButton, buttonPlace && styles.nextButtonAlternate]}
          onPress={handleSubmit}
        />
      </View>

      {/* Error Modal */}
      <Modal
        transparent
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalInnerContainer}>
            <Text style={styles.modalText}>{error}</Text>
            <TouchableOpacity onPress={closeModal} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {visible && (
        <CountryPicker
          visible={true}
          withFilter
          onClose={() => setVisible(false)}
          onSelect={(e) => {
            setCountryCode(" + " + e.callingCode[0] + " ");
            setCountryName(e.name);
          }}
        />
      )}
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
  alternateContainer: {
    lex: 1,
    justifyContent: "flex-start",
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
    fontSize: moderateScale(16),
  },
  countryCodeText: {
    fontSize: moderateScale(16),
    fontWeight: "500",
    color: "black",
  },
  numberInput: {
    gap: verticalScale(10),
    width: "100%",
  },
  nextButton: {
    paddingHorizontal: scale(29),
  },
  nextButtonAlternate: {
    marginVertical: verticalScale(50),
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalInnerContainer: {
    backgroundColor: "white",
    padding: moderateScale(20),
    borderRadius: moderateScale(10),
    alignItems: "center",
    width: 250,
  },
  modalText: {
    color: "red",
    fontSize: moderateScale(16),
    marginBottom: verticalScale(10),
  },
  modalButton: {
    backgroundColor: "red",
    padding: verticalScale(10),
    borderRadius: moderateScale(5),
    width: "100%",
    alignItems: "center",
  },
  modalButtonText: { color: "white", fontWeight: "bold" },
});

export default Login;
