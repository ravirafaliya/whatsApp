import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import React, { useState } from 'react'
import Chats from '../../components/molecules/chats'
import Status from '../../components/molecules/status'
import Calls from '../../components/molecules/calls'
import { scale, verticalScale, moderateScale, s } from 'react-native-size-matters';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';

const Main = () => {
  const [currentPage, setCurrentPage] = useState('chat')

  const activePage = () => {
    switch (currentPage) {
      case 'chat':
        return <Chats />
      case 'status':
        return <Status />
      case 'calls':
        return <Calls />
      default:
        return <Chats />
    }
  }

  const WhatsAppHeader = () => {
    return (
      <View style={styles.WhatsAppHeaderStyle}>
        <Text style={styles.whatsappText}>WhatsApp</Text>
        <View style={styles.iconContainer}>
        <AntDesign name="search1" style={styles.headerIcon} />
        <Entypo name="dots-three-vertical" style={styles.headerIcon} />
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#008069" style="light"/>
      <WhatsAppHeader />
      <View style={styles.topBarContainer}>
        {
          ["chat", "status", "calls"].map((item, index) => {
            return (
                <TouchableOpacity 
                key={index} 
                onPress={() => setCurrentPage(item)} 
                style={[styles.topBarButton,item === currentPage ? { borderColor: "#fff" } : {}]}>
                  <Text style={styles.topBarButtonText}>{item}</Text>
                </TouchableOpacity>
            )
          })
        }
      </View>
      {activePage()}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    
  },
  topBarContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal: scale(12),
    backgroundColor: "#008069",
    gap: scale(10),
  },
  topBarButton:{
    flex: 1,
    alignItems: "center",
    borderBottomWidth: 3,
    paddingBottom: verticalScale(10),
    borderColor:"#008069"
  },
  topBarButtonText:{
    fontSize: moderateScale(14),
    fontWeight: "bold",
    color: "#fff",
    textTransform: "uppercase",
  },
  headerIcon:{
    fontSize: moderateScale(24),
    color: "#fff",
  },
  WhatsAppHeaderStyle:{
    backgroundColor: "#008069",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: scale(15),
    paddingBottom: verticalScale(17),
    paddingTop: verticalScale(10),
  },
  iconContainer:{
    flexDirection: "row",
    gap: scale(10),
  },
  whatsappText:{
    fontSize: moderateScale(20),
    fontWeight: "bold",
    color: "#fff",
  }
})

export default Main