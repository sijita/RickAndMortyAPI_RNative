import React, { useEffect, useContext } from "react";
import { Text, View, ScrollView } from "react-native";
import { useParams } from "react-router-native";
import tw from "twrnc";
import { useBackHandler } from '@react-native-community/hooks'
import { useNavigate } from 'react-router-native';
import CharactersExtend from "../components/CharactersExtend";
import useSWR from "swr"

export default function Detalles() {

  let { id } = useParams();
  let navigate = useNavigate();

  const { data } = useSWR(`https://rickandmortyapi.com/api/character/${id}`);
  const characters = []
  characters.push(data)

  const backActionHandler = () => {
    navigate("/personajes")
    return true
  }

  useBackHandler(backActionHandler)

  return (
    <View>
      <Text
        style={tw`text-center text-3xl mt-15 mb-5 text-gray-900 font-bold`}
      >
        {
          characters.map((character) => {return character.species})
        }
      </Text>
      <ScrollView contentContainerStyle={tw`pb-45 pt-5`}>
        <View style={tw`flex items-center justify-center bg-white px-10`}>
          {
            characters.map((character) => {
              return (
              <CharactersExtend key={character.id} 
                imagen={{uri: character.image}}
                nombre={character.name}
                status={character.status}
                genero={character.gender}
                origen={character.origin.name}
                locacion={character.location.name}
              /> 
            )})
          }
        </View>
      </ScrollView>
    </View>
  );
}
