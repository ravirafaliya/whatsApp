import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import imagePath from '../../constants/imagePath'
import ButtonComp from '../../components/atoms/ButtonComp'
import { router } from 'expo-router'

const TermsAgree = () => {
    const onAgree = () => {
        router.push("(auth)/login")
    }
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.welcomeText}>Welcome to WhatsApp</Text>
            <Image source={imagePath.welcome} style={styles.welcomeImage} resizeMode='cover'/>
            <Text style={styles.descriptionText}>Read our <Text style={styles.linkText}>Privacy Policy.</Text> Tap “Agree and continue” to 
            accept the <Text style={styles.linkText}>Teams of Service.</Text></Text>
            <View style={{width:moderateScale(300)}}>
                <ButtonComp title="AGREE AND CONTINUE" onPress={onAgree}/>
                </View>
        </View>
        <View style={styles.footer}>
            <Text style={styles.fromText}>From</Text>
            <Text style={styles.facebookText}>FACEBOOK</Text>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignContent:'center',
        justifyContent:'space-between',
        paddingVertical:verticalScale(84), 
        paddingHorizontal:moderateScale(30)
    },
    header:{
        alignItems:'center',
        gap:verticalScale(30)
    },
    footer:{
        alignItems:'center',
    },
    fromText:{
        fontSize:moderateScale(12),
        color:'#867373',
    },
    facebookText:{
        fontSize:moderateScale(15),
        color:'#000',
        textTransform:'uppercase',
        fontWeight:"600"
    },
    welcomeText:{
        fontSize:moderateScale(30),
        color:'#000',
        fontWeight:"bold",
        marginBottom:verticalScale(10)
    },
    welcomeImage:{
      width:moderateScale(250),
      height:moderateScale(250),
      borderRadius:moderateScale(250)
    },
    descriptionText:{
        textAlign:"center",
        fontSize:moderateScale(13),
        color:"black"
    },
    linkText:{
        color:"#0C42CC"
    }
})

export default TermsAgree