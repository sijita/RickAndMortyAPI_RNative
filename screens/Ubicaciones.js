import { useEffect, useContext } from "react";
import { View, Text, ScrollView } from "react-native";
import Locations from "../components/Locations";
import tw from "twrnc";
import { ButtonNext, ButtonBack } from "../components/Buttons";
import { useBackHandler } from '@react-native-community/hooks'
import { useNavigate } from 'react-router-native';
import PageContext from "../context/PageContext";

export default function Ubicaciones() {

  let navigate = useNavigate();

  const { onNext, onPrev, info, locations, setLocations } = useContext(PageContext)

  const backActionHandler = () => {
    if(info.info["prev"] != null){
      onPrev()
    }else{
      navigate("/");
    }
    return true;
  }

  useBackHandler(backActionHandler)

  useEffect(() => { 
    setLocations(info.results)
  }, [info])

  return (
    <View>
      <Text
        style={tw`text-center text-3xl mt-15 mb-5 text-gray-900 font-bold`}
      >
        Locations
      </Text>
      <ScrollView contentContainerStyle={tw`pb-35`}>
        <View style={tw`flex items-center justify-center bg-white px-5`}>
          {locations.map((location) => {
            return (
              <Locations
                key={location.id}
                nombre={location.name}
                tipo={location.type}
                id={location.id}
              />
            );
          })}
          { info.info["next"] === null ? null : <ButtonNext action={onNext} />}

          { info.info["prev"] === null ? null : <ButtonBack action={onPrev} />}
        </View>
      </ScrollView>
    </View>
  );
}
