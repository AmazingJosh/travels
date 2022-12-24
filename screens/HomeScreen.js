import { View, Text ,SafeAreaView, StyleSheet, Platform, Image, TouchableOpacity} from 'react-native'
import React,{useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import { HeroImage } from '../assets';
import * as Animatable from 'react-native-animatable'


const HomeScreen = () => {
    const navigation=useNavigation()
    useLayoutEffect(() => {
    navigation.setOptions({
        headerShown:false
    })
    }, [])
  return (
   <SafeAreaView className="bg-white relative flex-1" style={styles.safe}>
   {/* first section */}
   <View className="flex-row px-5 mt-4 items-center space-x-2">
<View className="bg-[#0f0f31] h-12 w-12 rounded-full items-center justify-center">
    <Text className="text-[#58b8b5] text-2xl font-semiboldra">Go</Text>
</View>
<Text className="text-[#1e1143] text-3xl font-semibold">Travel</Text>
   </View>
   {/* second section */}
   <View className="px-5 mt-2 space-y-2">
    <Text className="text-[40px] text-[#0f1357]">Enjoy the trip with</Text>
    <Text className="text-[30px] text-[#39d1da] font-bold">Good moments</Text>
   </View>
    <Text className="text-base text-[#060d32] px-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illum id dolore scruntia, aredos!</Text>
{/* circle section */}
<View className="bg-[#39d1da] h-[300px] w-[300px] absolute bottom-16 -right-24 rounded-full"></View>
<View className="bg-[#e0a61f] h-[300px] w-[300px] absolute -bottom-16 -left-16 rounded-full"></View>
 {/* image */}
 <View className="flex-1 relative items-center justify-center">
    <Animatable.Image source={HeroImage} 
    animation="fadeIn"
    easing='ease-in-out'
    className="object-cover mt-28 w-full h-[130%]"/>
<TouchableOpacity
onPress={()=>navigation.navigate("Discover")}
className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#39d1da] rounded-full items-center justify-center">
    <Animatable.View animation={"pulse"} easing="ease-in-out" iterationCount={"infinite"} className="h-20 w-20 bg-[#39d1da] items-center justify-center rounded-full">
    <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>

</Animatable.View>
    </TouchableOpacity>
</View>
 </SafeAreaView>
  )
}
const styles =StyleSheet.create({
    safe:{
        paddingTop:Platform.OS==='android'?StatusBar.currentHeight :0
    }
})

export default HomeScreen