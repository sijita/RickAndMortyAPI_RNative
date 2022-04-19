import { Suspense } from "react";
import { View, Image, Text } from "react-native";
import { SWRConfig } from "swr";
import { NativeRouter, Route, Routes } from "react-router-native";
import Home from "./screens/Home";
import Personajes from "./screens/Personaje";
import Ubicaciones from "./screens/Ubicaciones";
import tw from "twrnc";
import Loading from "./assets/mortydance.gif";
import Detalles from "./screens/Detalles";
import LocationsExtend from "./components/LocationsExtend";
import { AuthProvider } from "./context/PageContext";

export default function App() {
  return (
    <SWRConfig
      value={{
        fetcher: (...args) => fetch(...args).then((res) => res.json()),
        suspense: true,
      }}
    >
      <Suspense
        fallback={
          <View style={tw`flex h-full items-center justify-center`}>
            <Image source={Loading} style={tw`w-50 h-50`} />
            <Text style={tw`text-2xl p-5`}>Loading</Text>
          </View>
        }
      >
        <AuthProvider>
          <NativeRouter>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/personajes" element={<Personajes />} />
              <Route path="/ubicaciones" element={<Ubicaciones />} />
              <Route path="/personajes/:id" element={<Detalles />} />
              <Route path="/ubicaciones/:id" element={<LocationsExtend />} />
            </Routes>
          </NativeRouter>
        </AuthProvider>
      </Suspense>
    </SWRConfig>
  );
}
