import React from "react";
import { View, Image, Text } from "react-native";
import tw from "twrnc";

export default function BtnCharacters({imagen, titulo}) {
  return (
    <View
      style={tw`my-5 shadow-md bg-cyan-500 w-80 h-70 rounded-3 flex items-center`}
    >
      <Image style={tw`w-80 h-55 rounded-t-3 mb-3`} source={imagen} />
      <Text style={tw`text-gray-100 text-xl font-bold`}>{titulo}</Text>
    </View>
  );
}
