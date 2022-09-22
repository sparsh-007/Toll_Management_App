import React,{useContext,useState} from "react";
import {toll} from "./Components/Toll.jsx";

const AppContext=React.createContext();
const AppProvider=({children})=>{
  // eslint-disable-next-line
  const [tollData, setTollData] = useState(toll);
    const [vehicle, setVehicleData] = useState([]);

  return <AppContext.Provider value={{tollData,setTollData,vehicle,setVehicleData}}>{children}</AppContext.Provider>;
}
const useGlobalContext = () => {
  return useContext(AppContext);
};
 
export { AppContext, AppProvider, useGlobalContext };

