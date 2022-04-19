import React from "react";
import { View, Image } from "react-native";
import { Link } from "react-router-native";
import Logo from "../assets/logo.png";
import tw from "twrnc";
import bannerPrincipal from "../assets/rickymorty.jpg";
import BtnCharacters from "../components/BtnCharacters";
import BtnLocations from "../components/BtnLocations";

export default function Home() {

  return (
    <View style={tw`flex h-full items-center justify-center bg-white px-5`}>
      <Image style={tw`w-11/12 h-30 mb-5`} source={Logo} />
      <Link to="/personajes" activeOpacity={0.6} underlayColor="#ddddd">
        <BtnCharacters titulo="Characters" imagen={bannerPrincipal} />
      </Link>
      <Link to="/ubicaciones" activeOpacity={0.6} underlayColor="#ddddd">
        <BtnLocations titulo="Locations" />
      </Link>
    </View>
  );
}
