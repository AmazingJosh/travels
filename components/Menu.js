import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'

const Menu = ({title,imageSrc,type,setType}) => {
    const handlePress=()=>{
        setType(title)
    }
  return (
    <TouchableOpacity onPress={handlePress} className="items-center justify-center space-y-2">
      <View className={`w-24 h-24 shadow-md rounded-full items-center justify-center ${type===title? 'bg-gray-200':""}`}>
      <Image source={imageSrc} className="w-full h-full object-contain "/>
      </View>
      <Text className="text-[#33d6d6] font-semibold text-xl">{title}</Text>
    </TouchableOpacity>
  )
}

export default Menu