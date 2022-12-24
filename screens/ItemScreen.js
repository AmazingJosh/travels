import { View, Text, StyleSheet, Platform, StatusBar, SafeAreaView } from 'react-native'
import React,{useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'

const ItemScreen = () => {
    const navigation =useNavigation()
    useLayoutEffect(() => {
    navigation.setOptions({
    headerShown:false
    })
    }, [])
  return (
    <SafeAreaView style={styles.safe}>
      
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
    safe:{
     paddingTop:Platform.OS==="android"? StatusBar.currentHeight :0,
     flex:1,
     backgroundColor:"white",
    
    }
})

export default ItemScreen