import React,{useContext,useState} from "react";
import {toll} from "./Components/Toll.jsx";

const AppContext=React.createContext();
const AppProvider=({children})=>{
  // eslint-disable-next-line
  const [tollData, setTollData] = useState(toll);

  return <AppContext.Provider value={{tollData,setTollData}}>{children}</AppContext.Provider>;
}
const useGlobalContext = () => {
  return useContext(AppContext);
};
 
export { AppContext, AppProvider, useGlobalContext };

