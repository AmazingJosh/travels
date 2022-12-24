import { View, Text, Platform ,Image, TextInput, ScrollView, TouchableOpacity, ActivityIndicator} from 'react-native'
import React,{useEffect, useState,useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { StatusBar,SafeAreaView,StyleSheet } from 'react-native'
import { Avatar,Restaurants,Hotels,Attractions,Bar,Restaurant, NotFound} from '../assets'
import Menu from '../components/Menu'
import {FontAwesome} from '@expo/vector-icons'
import ItemCard from '../components/ItemCard'




const Discover = () => {
  const [type,setType]=useState("Restaurants")
  const [isLoading,setIsLoading]=useState(true)
 const navigation =useNavigation()
 useLayoutEffect(()=>{
    navigation.setOptions({
        headerShown:false
    })
 },[])

 useEffect(()=>{
  setTimeout(() => {
    setIsLoading(false)
  }, 1000);
 },[])



  return (
    <SafeAreaView style={styles.safearea}>
      <View className="flex-row items-center justify-between px-8">
        <View>
        <Text className="text-[40px] text-[#0B646B] font-bold">Discover</Text>
        <Text className="text-[#636567] text-[30px]" >the beauty today</Text>
        </View>
       <View className="w-12 h-12 rounded-full bg-gray-400 items-center justify-center">
     <Image source={Avatar} 
     className="w-full h-full rounded-full object-cover shadow-lg"
     />
    
       </View>
      </View>
       <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg mt-4">
        <TextInput
        className="w-full border border-gray-50 border-y-gray-200 p-2 placeholder:text-base shadow-xl bg-white"
        placeholder='Search'
        />

       </View>

{/* menu container */}
{
isLoading? (<View className="flex-1 justify-center items-center">
  <ActivityIndicator size="large" color="#06B46B"/>
</View>):
<ScrollView>
  <View className="flex-row items-center justify-between px-8 mt-8">
    <Menu key={"hotel"} 
    title="Hotels" 
    imageSrc={Hotels}
    type={type}
    setType={setType}/>
    
    <Menu key={"attractions"} 
    title="Attraction" 
    imageSrc={Attractions}
    type={type}
    setType={setType}/>
    
    
    <Menu key={"restaurants"} 
    title="Restaurants"
    imageSrc={Restaurants}
    type={type}
    setType={setType}/>
    </View>
    <View>
      <View className="flex-row px-8 mt-8 items-center justify-between">
        <Text className="text-[20px] text-[#237777] font-bold">Hot Tips</Text>
        <TouchableOpacity className="flex-row items-center space-x-2">
          <Text className="text-[20px] text-[#bfbbbb] font-semibold">Explore</Text>
          <FontAwesome name='long-arrow-right' color="#ADC4C7" size={24}/>
        </TouchableOpacity>
        </View>

        <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
         
    
 <ItemCard key="100" title="Restaurant" location="Abuja Nigeria" imageSrc={Bar}/>
 <ItemCard key="101" title="Restaurant" location="Abuja Nigeria" imageSrc={Restaurant}/>
 <ItemCard key="103" title="Restaurant" location="Abuja Nigeria" imageSrc={Bar}/>
 <ItemCard key="104" title="Restaurant" location="Abuja Nigeria" imageSrc={Bar}/>
 <ItemCard key="105" title="Restaurant" location="Abuja Nigeria" imageSrc={Bar}/>
 <ItemCard key="106" title="Restaurant" location="Abuja Nigeria" imageSrc={Bar}/>
 <ItemCard key="107" title="Restaurant" location="Abuja Nigeria" imageSrc={Bar}/>
 <ItemCard key="108" title="Restaurant" location="Abuja Nigeria" imageSrc={Bar}/>
 <ItemCard key="109" title="Restaurant" location="Abuja Nigeria" imageSrc={Bar}/>
 <ItemCard key="110" title="Restaurant" location="Abuja Nigeria" imageSrc={Bar}/>
       
          
      {/* </>:<View className="flex items-center justify-center">
        <Image
        source={NotFound}
        className="w-32 h-32 object-cover"
        />
        <Text className="text-2xl text-[#42B268] font-semibold">
          oops not found!
        </Text>
        
        </View>} */}
       
       </View>
    </View>

   
</ScrollView>
}


    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
    safearea:{
     paddingTop:Platform.OS==="android"? StatusBar.currentHeight :0,
     flex:1,
     backgroundColor:"white",
     position:'relative'
    }
})



export default Discover