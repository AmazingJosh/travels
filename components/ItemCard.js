import { View, Text, TouchableOpacity ,Image} from 'react-native'
import React from 'react'
import {FontAwesome} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const ItemCard = ({imageSrc,title,location}) => {
  const navigation=useNavigation()
  return (
   <TouchableOpacity className="rounded-md border-gray-300 space-y-2 px-3 py-2 bg-white border width-[182px]">
    <Image source={imageSrc} className="rounded-md object-cover h-40 w-40    " />

    <Text className="text-[18px] font-bold text-[#0d7171]">{title?.length>10? `${title.slice(0,10)}...`:title}</Text>
    <View className="flex-row items-center space-x-2">
<FontAwesome name='map-marker' size={20} color="#8597A2" />
<Text className="text-[18px] font-bold text-[#0d7171]">{location?.length>10? `${location.slice(0,10)}...`:location}</Text>
    </View>
   </TouchableOpacity>
  )
}

export default ItemCard