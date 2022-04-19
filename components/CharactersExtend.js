import { Text, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";

export default function CharactersExtend({ imagen, nombre, status, genero, origen, locacion }) {
  return (
    <View style={tw`flex justify-center items-center`}>
      <View style={tw`shadow-md bg-gray-50 w-70 h-70 rounded-3`}>
        <Image style={tw`w-70 h-70 rounded-3`} source={imagen} />
      </View>
      <Text style={tw`text-2xl text-center font-bold my-10`}>{nombre}</Text>
      <View style={tw`flex-row bg-gray-100 rounded-3 p-5 w-79`}>
        <Text style={tw`text-lg font-bold text-gray-800`}>
          <Ionicons
            name="ellipse"
            size={15}
            color={
              status === "Alive" ? "lime" : status == "Dead" ? "red" : "gold"
            }
          />
          &nbsp;&nbsp;Status:{" "}
        </Text>
        <Text style={tw`text-lg text-gray-500`}>{status}</Text>
      </View>
      <View style={tw`flex-row mt-5 bg-gray-100 rounded-3 p-5 w-79`}>
        <Text style={tw`text-lg font-bold text-gray-800`}>
          {genero === "Male" ? (
            <Ionicons name="male" size={15} color="deepskyblue" />
          ) 
          : 
          genero === "Female" ?
          (
            <Ionicons name="female" size={15} color="magenta" />
          )
          :
          (
            <Ionicons name="male-female" size={15} color="teal" />
          )
          }
          &nbsp;&nbsp;Gender:{"  "}
        </Text>
        <Text style={tw`text-lg text-gray-500`}>{genero}</Text>
      </View>
      <View style={tw`flex-row mt-5 bg-gray-100 rounded-3 p-5 `}>
        <Text style={tw`text-lg font-bold text-gray-800`}>
          <Ionicons name="planet" size={15} color="orange" />
          &nbsp;&nbsp;Origin:{"  "}
        </Text>
        <Text
          style={tw.style("text-lg text-gray-500", { flex: 1, flexShrink: 1 })}
        >
          {origen}
        </Text>
      </View>
      <View style={tw`flex-row mt-5 bg-gray-100 rounded-3 p-5`}>
        <Text style={tw`text-lg font-bold text-gray-800`}>
          <Ionicons name="location-sharp" size={15} color="slategray" />
          &nbsp;&nbsp;Location:{"  "}
        </Text>
        <Text
          style={tw.style("text-lg text-gray-500", { flex: 1, flexShrink: 1 })}
        >
          {locacion}
        </Text>
      </View>
    </View>
  );
}
