import React, { useState,useEffect} from "react";
import "./NewToll.css";

function NewToll({ closeModal }) {
  const initialState = {
    toll_name: "",
    vehicle: [
      { type: "car/jeep", fare: 0, rf: 0 },
      {
        type: "LCV",
        fare: 0,
        rf: 0,
      },
      {
        type: "Truck/Bus",
        fare: 0,
        rf: 0,
      },
      {
        type: "Heavy/Vehicle",
        fare: 0,
        rf: 0,
      },
    ],
  };
  const [newTollData, setNewTollData] = useState(initialState);

  const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value
   setNewTollData({...newTollData,toll_name:value})
    
    console.log(name,value);
  }
  useEffect(()=>{
    console.log(newTollData);
  },[newTollData])

  return (
    <>
      <div className="overlay">
        <div className="modalCont">
          <div className="head">
            <h2>Add New Toll</h2>
            <p
              onClick={() => {
                closeModal(false);
              }}
            >
              X
            </p>
          </div>
          <div className="form">
            <form action="" className="form_section">
              <div className="tollname">
                <label htmlFor="TollName">
                  <h5>
                    Toll Name<span>*</span>
                  </h5>
                </label>
                <input onChange={handleChange}
                  type="text"
                  id="toll_name"
                  required
                  name="tollname"
                  placeholder="Enter Toll Name"
                />
              </div>
              <label htmlFor="Vehicle fare details">
                <h5>
                  Vehicle fare details<span>*</span>
                </h5>
              </label>
              <div className="list_cont">
                <div className="list">
                  <input onChange={handleChange}
                    list="vehicle"
                    name="vehicle_type"
                    placeholder="Select Vehicle type"
                  />
                  <datalist id="vehicle">
                    <option value="Car/Jeep" />
                    <option value="LCV" />
                    <option value="Truck/Bus" />
                    <option value="Heavy Vehicles" />
                  </datalist>
                  <input onChange={handleChange}
                    type="number"
                    name="single_journey"
                    placeholder="Single Journey"
                  />
                  <input onChange={handleChange} type="number" name="return_journey" placeholder="Return Journey" />
                </div>
                <div className="list">
                  <input onChange={handleChange}
                    list="vehicle"
                    placeholder="Select Vehicle type"
                    name="vehicle_type"
                  />
                  <datalist id="vehicle">
                    <option value="Car/Jeep" />
                    <option value="LCV" />
                    <option value="Truck/Bus" />
                    <option value="Heavy Vehicles" />
                  </datalist>
                  <input onChange={handleChange}
                    type="number"
                    name="single_journey"
                    placeholder="Single Journey"
                  />
                  <input onChange={handleChange}
                    type="number"
                    name="return_journey"
                    placeholder="Return Journey"
                  />
                </div>
                <div className="list">
                  <input onChange={handleChange}
                    list="vehicle"
                    name="vehicle_type"
                    placeholder="Select Vehicle type"
                  />
                  <datalist id="vehicle">
                    <option value="Car/Jeep" />
                    <option value="LCV" />
                    <option value="Truck/Bus" />
                    <option value="Heavy Vehicles" />
                  </datalist>
                  <input onChange={handleChange}
                    type="number"
                    name="single_journey"
                    placeholder="Single Journey"
                  />
                  <input onChange={handleChange}
                    type="number"
                    name="return_journey"
                    placeholder="Return Journey"
                  />
                </div>
                <div className="list">
                  <input onChange={handleChange}
                    list="vehicle"
                    name="vehicle_type"
                    placeholder="Select Vehicle type"
                  />
                  <datalist id="vehicle">
                    <option value="Car/Jeep" />
                    <option value="LCV" />
                    <option value="Truck/Bus" />
                    <option value="Heavy Vehicles" />
                  </datalist>
                  <input onChange={handleChange}
                    type="number"
                    name="single_journey"
                    placeholder="Single Journey"
                  />
                  <input onChange={handleChange}
                    type="number"
                    name="return_journey"
                    placeholder="Return Journey"
                  />
                </div>
              </div>
              <button type="submit" className="form_btn">
                {" "}
                Add Details
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewToll;
