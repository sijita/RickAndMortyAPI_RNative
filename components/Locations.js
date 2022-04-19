import { Text, View } from "react-native";
import { Link } from "react-router-native";
import tw from "twrnc";

export default function Locations({ nombre, tipo, id }) {

  return (
    <Link to={`/ubicaciones/${id}`} activeOpacity={0.6} underlayColor="#ddddd" style={tw.style('flex items-start justify-center p-6 my-5 shadow-md bg-gray-50 w-80 h-25 rounded-3')} >
      <View >
          <Text style={tw`text-gray-700 text-xl font-bold`}>
            {nombre}
          </Text>
          <Text style={tw`text-gray-700 text-lg`}>{tipo}</Text>
      </View>
    </Link>
  );
}
