import React, {useContext} from 'react'
import { Text, View, ScrollView } from 'react-native'
import tw from 'twrnc'
import { useBackHandler } from '@react-native-community/hooks'
import { useNavigate } from 'react-router-native';
import { ButtonNext, ButtonBack } from '../components/Buttons';
import PageContext from '../context/PageContext';
import Characters from '../components/Characters';

export default function Personaje() {
  
  const { results, on_Next, on_Prev } = useContext(PageContext)
  
  let navigate = useNavigate();

  const backActionHandler = () => {
    if(results.info["prev"] != null){
      on_Prev()
    }else{
      navigate("/");
    }
    return true;
  }

  useBackHandler(backActionHandler)
  
  return (
    <View>
      <Text style={tw`text-center text-3xl mt-15 mb-10 text-gray-900 font-bold`}>
        Characters
      </Text>
      <ScrollView contentContainerStyle={tw`pb-40`}>
        <View style={tw`flex items-center justify-center bg-white px-5`}>
            {
                results.results.map((pj) => {
                  return(
                    <Characters 
                      key={pj.id} 
                      titulo={pj.name} 
                      imagen={{uri: pj.image}}
                      subtitulo={pj.species}
                      color={pj.status == "Alive" ? "lime" : pj.status == "Dead" ? "red" : "gold"}
                      status={pj.status}
                      id={pj.id}
                    />
                  )
                })
            }
            {
              results.info["next"] === null ? null : <ButtonNext action={on_Next} />
            }
            
            {
              results.info["prev"] === null ? null : <ButtonBack action={on_Prev} />
            }
            
        </View>
      </ScrollView>
    </View>
  )
}
