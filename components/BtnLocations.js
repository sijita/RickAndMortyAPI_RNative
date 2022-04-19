import React from 'react'
import { Text, View } from 'react-native'
import tw from 'twrnc'

export default function BtnLocations({titulo}) {
  return(
    <View style={tw`shadow-md bg-lime-300 w-80 h-15 rounded-3 flex justify-center items-center`}>
        <Text style={tw`text-gray-700 text-center text-xl font-bold`}>
          {titulo}
        </Text>
    </View>
  )
}
