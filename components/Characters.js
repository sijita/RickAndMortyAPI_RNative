import React from "react";
import { Link } from "react-router-native";
import { View, Image, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import tw from "twrnc";

export default function Characters({ titulo, subtitulo, imagen, color, status, id}) {

  return (
    <Link to={`/personajes/${id}`} activeOpacity={0.6} underlayColor="#ddddd">
      <View style={tw`my-5 shadow-md bg-gray-50 w-80 h-80 rounded-3 `}>
        <Image style={tw`w-80 h-50 rounded-t-3`} source={imagen} />
        <View style={tw`flex items-center justify-center`}>
          <Text style={tw`text-gray-700 text-sm mt-3 mb-2`}>
            <FontAwesome name="circle" size={10} color={color} />
            &nbsp;
            {status}
          </Text>
          <Text style={tw`text-gray-700 text-xl font-bold`}>{titulo}</Text>
          <Text style={tw`text-gray-700 text-lg `}>{subtitulo}</Text>
        </View>
      </View>
    </Link>
  );
}
