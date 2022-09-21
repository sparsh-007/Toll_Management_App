import React, { useState } from "react";
import "./NewToll.css";
import { useGlobalContext } from "../../context";

// 		{
// 			type: 'LCV',
// 			fare: 0,
// 			rf: 0,
// 		},
// 		{
// 			type: 'Truck/Bus',
// 			fare: 0,
// 			rf: 0,
// 		},
// 		{
// 			type: 'Heavy/Vehicle',
// 			fare: 0,
// 			rf: 0,
// 		},

const initialState = {
  toll_name: "",
  vehicle: [
    { type: "", fare: "", rf: "" },
    { type: "", fare: "", rf: "" },
    { type: "", fare: "", rf: "" },
    { type: "", fare: "", rf: "" },
  ],
};

function NewToll({ closeModal }) {
  const {setTollData}=useGlobalContext();
  const [newTollData, setNewTollData] = useState(initialState);

  const handleChange = (e, i) => {
    const { name, value } = e.target;

    // console.log(name, value, i);

    setNewTollData((prev) => {
      prev.vehicle[i][name] = value;
      return { ...prev };
    });
  };

  const handleChangeDropdown = (e, i) => {
    const { name, value } = e.target;
    // console.log(name, value, i);

    if (value !== "" && newTollData.vehicle.some((e) => e.type === value)) {
      alert("Please select a unique vehicle type");
    }

    setNewTollData((prev) => {
      prev.vehicle[i].type = value;
      return prev;
    });
  };

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
            <form
              className="form_section"
              onSubmit={(e) => {
                e.preventDefault();

                const data = newTollData;
                const carJeep = data.vehicle.filter(
                  (e) => e.type === "Car/Jeep"
                )[0];

                const LCV = data.vehicle.filter((e) => e.type === "LCV")[0];

                const truckBus = data.vehicle.filter(
                  (e) => e.type === "Truck/Bus"
                )[0];

                const Heavy = data.vehicle.filter(
                  (e) => e.type === "Heavy Vehicles"
                )[0];

                const finalData = [carJeep, LCV, truckBus, Heavy];

                data.vehicle = finalData;

                console.log(data);
                setTollData(current=>[...current,data]);
                setNewTollData(initialState);
  
                
              }}
            >
              <div className="tollname">
                <label htmlFor="TollName">
                  <h5>
                    Toll Name<span>*</span>
                  </h5>
                </label>
                <input
                  onChange={(e) =>
                    setNewTollData((prev) => ({
                      ...prev,
                      toll_name: e.target.value,
                    }))
                  }
                  type="text"
                  id="toll_name"
                  required
                  name="toll_name"
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
                  <input
                    onChange={(e) => handleChangeDropdown(e, 0)}
                    list="vehicle"
                    name="vehicle_type"
                    placeholder="Select Vehicle type"
                  />
                  <datalist id="vehicle" value={newTollData.vehicle[0].type}>
                    <option value="Car/Jeep" />
                    <option value="LCV" />
                    <option value="Truck/Bus" />
                    <option value="Heavy Vehicles" />
                  </datalist>
                  <input
                    onChange={(e) => handleChange(e, 0)}
                    type="number"
                    name="fare"
                    placeholder="Single Journey"
                    value={newTollData.vehicle[0].fare}
                  />
                  <input
                    onChange={(e) => handleChange(e, 0)}
                    type="number"
                    name="rf"
                    placeholder="Return Journey"
                    value={newTollData.vehicle[0].rf}
                  />
                </div>
                <div className="list">
                  <input
                    onChange={(e) => handleChangeDropdown(e, 1)}
                    list="vehicle"
                    placeholder="Select Vehicle type"
                    name="vehicle_type"
                  />
                  <datalist id="vehicle" value={newTollData.vehicle[1].type}>
                    <option value="Car/Jeep" />
                    <option value="LCV" />
                    <option value="Truck/Bus" />
                    <option value="Heavy Vehicles" />
                  </datalist>
                  <input
                    onChange={(e) => handleChange(e, 1)}
                    type="number"
                    name="fare"
                    placeholder="Single Journey"
                    value={newTollData.vehicle[1].fare}
                  />
                  <input
                    onChange={(e) => handleChange(e, 1)}
                    type="number"
                    name="rf"
                    placeholder="Return Journey"
                    value={newTollData.vehicle[1].rf}
                  />
                </div>
                <div className="list">
                  <input
                    onChange={(e) => handleChangeDropdown(e, 2)}
                    list="vehicle"
                    name="vehicle_type"
                    placeholder="Select Vehicle type"
                  />
                  <datalist id="vehicle" value={newTollData.vehicle[2].type}>
                    <option value="Car/Jeep" />
                    <option value="LCV" />
                    <option value="Truck/Bus" />
                    <option value="Heavy Vehicles" />
                  </datalist>
                  <input
                    onChange={(e) => handleChange(e, 2)}
                    type="number"
                    name="fare"
                    placeholder="Single Journey"
                    value={newTollData.vehicle[2].fare}
                  />
                  <input
                    onChange={(e) => handleChange(e, 2)}
                    type="number"
                    name="rf"
                    placeholder="Return Journey"
                    value={newTollData.vehicle[2].rf}
                  />
                </div>
                <div className="list">
                  <input
                    onChange={(e) => handleChangeDropdown(e, 3)}
                    list="vehicle"
                    name="vehicle_type"
                    placeholder="Select Vehicle type"
                  />
                  <datalist id="vehicle" value={newTollData.vehicle[3].type}>
                    <option value="Car/Jeep" />
                    <option value="LCV" />
                    <option value="Truck/Bus" />
                    <option value="Heavy Vehicles" />
                  </datalist>
                  <input
                    onChange={(e) => handleChange(e, 3)}
                    type="number"
                    name="fare"
                    placeholder="Single Journey"
                    value={newTollData.vehicle[3].fare}
                  />
                  <input
                    onChange={(e) => handleChange(e, 3)}
                    type="number"
                    name="rf"
                    placeholder="Return Journey"
                    value={newTollData.vehicle[3].rf}
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
