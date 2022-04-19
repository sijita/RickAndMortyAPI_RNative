import { createContext } from "react";
import React, {  useState } from "react";
import useSWR from "swr";

const PageContext = createContext();

const AuthProvider = ({ children }) => {
    
  const [locations, setLocations] = useState([])
  const [page, setPage] = useState("https://rickandmortyapi.com/api/location");
  const { data: info } = useSWR(page);

  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character")
  const { data: results } = useSWR(url);

  const onNext = () => {
    setPage(info.info["next"]);
  };

  const onPrev = () => {
    setPage(info.info["prev"]);
  };

  const on_Next = () =>{
    setUrl(results.info["next"])
   }
  
   const on_Prev = () =>{
    setUrl(results.info["prev"])
   }

  const data = {onNext, onPrev, info, locations, setLocations, results, url, setUrl, on_Next, on_Prev};

  return <PageContext.Provider value={data}>{children}</PageContext.Provider>;
};

export { AuthProvider };
export default PageContext;


