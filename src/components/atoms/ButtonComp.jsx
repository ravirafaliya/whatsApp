import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const ButtonComp = ({title}) => {
  return (
    <TouchableOpacity style={[styles.buttonContainer]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor:"#00A884",
        width:"100%",
        paddingVertical:verticalScale(10),
        paddingHorizontal:scale(10),
        borderRadius:moderateScale(4)
    },
    buttonText:{
        fontSize:moderateScale(14),
        color:"white",
        textAlign:"center"
    }
})

export default ButtonComp