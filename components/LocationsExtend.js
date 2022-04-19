import { useState, useEffect, useContext } from "react";
import Characters from "./Characters";
import tw from "twrnc";
import { Text, View, ScrollView, Image } from "react-native";
import { useParams } from "react-router-native";
import { useBackHandler } from "@react-native-community/hooks";
import { useNavigate } from "react-router-native";
import useSWR from "swr";
import PageContext from "../context/PageContext";
import Rick from '../assets/rick.png'

export default function LocationsExtend() {
  let { id } = useParams();
  parseInt(id);
  const [arr, setArr] = useState([]);
  const [loading, setLoading] = useState(false);
  const { data: locations } = useSWR(
    `https://rickandmortyapi.com/api/location/${id}`
  );
  const { data: characters } = useSWR(() =>
    loading ? `https://rickandmortyapi.com/api/character/${arr}` : null
  );

  let navigate = useNavigate();

  const { info } = useContext(PageContext)

  const backActionHandler = () => {
    if(info.info["prev"] === null){
      navigate("/ubicaciones");
    }else{
      navigate("/ubicaciones");
    }
    return true;
  }

  useBackHandler(backActionHandler)

  useEffect(() => {
    const regex = /(\d+)/g;
    setArr(JSON.stringify(locations.residents).match(regex));
  }, [locations]);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <View>
      <Text
        style={tw`text-center text-3xl mt-15 mb-10 text-gray-900 font-bold px-10`}
      >
        {locations.name}
      </Text>
      <ScrollView contentContainerStyle={tw`pb-50 pt-2`}>
        <View style={tw`flex items-center justify-center bg-white px-5`}>
          {loading ? Array.isArray(characters) ? (characters.map((character) => {
                return (
                  <Characters
                    key={character.id}
                    imagen={{ uri: character.image }}
                    titulo={character.name}
                    status={character.status}
                    subtitulo={character.species}
                    color={character.status == "Alive" ? "lime" : character.status == "Dead" ? "red" : "gold"}
                    id={character.id}
                  />
                );
              })
            ) : arr !== null ? <Characters
                  key={characters.id}
                  imagen={{ uri: characters.image }}
                  titulo={characters.name}
                  status={characters.status}
                  subtitulo={characters.species}
                  color={characters.status == "Alive" ? "lime" : characters.status == "Dead" ? "red" : "gold"}
                  id={characters.id}
                />
              : <View>
                  <Image source={Rick} style={tw`h-100 w-50`} />
                  <Text style={tw`text-2xl text-gray-900 font-bold mt-10`}>Nobody lives here!</Text>
                </View>
              : null
          }
        </View>
      </ScrollView>
    </View>
  );
}
