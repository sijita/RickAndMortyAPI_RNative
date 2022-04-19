import React from "react";
import {  Text, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import tw from "twrnc";

export function ButtonNext({action}) {
  return (
    <TouchableOpacity
      style={tw`my-5 bg-lime-300 flex justify-center w-40 h-15 rounded-full`}
      onPress={action}
    >
      <Text style={tw`text-xl text-gray-800 text-center font-bold`}>
        Next&nbsp;
        <AntDesign name="right" size={16} color="black" />
      </Text>
    </TouchableOpacity>
  );
}

export function ButtonBack({action}) {
  return (
    <TouchableOpacity 
      style={tw`mb-5 mt-1 bg-cyan-500 flex justify-center items-center w-40 h-15 rounded-full`}
      onPress={action}
    >
      <Text style={tw`text-xl text-gray-100 text-center font-bold`}>
      <AntDesign name="left" size={16} color="white" />
      &nbsp;Back
      </Text>
    </TouchableOpacity>
  );
}
