import React, { useState, useEffect } from "react";
import "./NewVehicle.css";
import { useGlobalContext } from "../../context";

function NewVehicle({ closeModal }) {
  const { vehicle, setVehicleData } = useGlobalContext();
  const [time, setTime] = useState({
    entry_time: "",
    exit_time: "",
  });
  const { tollData } = useGlobalContext();
  const [tariff, setTariff] = useState("");
  const [object, setObject] = useState({
    toll_name: "",
    type: "",
    vehicle_id: "",
    entry_time: "",
    amount: "",
    exit_time: "",
  });
  const initial = {
    tollName: "",
    type: "",
    vehicle_id: "",
  };
  const [data, setData] = useState(initial);
  const handleChange = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  useEffect(() => {
    if (
      data.tollName !== "" &&
      data.type !== "" &&
      data.vehicle_id.length === 6
    )
      calculateAmount();
  }, [data]);

  function diff_hours(dt2, dt1) {
    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60 * 60;
    return Math.abs(Math.round(diff));
  }
  const calculateAmount = () => {
  // const rf= vehicle.map((item,index)=>{

  // })
    if (vehicle.vehicle_id === data.vehicle_id && vehicle.toll_name) {
    } else {
      const entryTime = new Date().toLocaleString();
      setTime((prev) => {
        return { ...prev, entry_time: entryTime };
      });
      tollData.forEach((item, index) => {
        if (item.toll_name === data.tollName) {
          item.vehicle.forEach((item) => {
            if (item.type === data.type) {
              setTariff(item.fare);
            }
          });
        }
      });
    }
  };
  console.log(time);
  const submitHandler = (e) => {
    e.preventDefault();
    setObject({
      toll_name: data.tollName,
      type: data.type,
      amount: tariff,
      vehicle_id: data.vehicle_id,
      entry_time: time.entry_time,
    });
    setData(initial);
    setTariff("");
  };
  useEffect(() => {
    if(object.vehicle_id !=="")
    setVehicleData((prev) => [...prev, object]);
  }, [object]);
  console.log(vehicle);

  return (
    <>
      <div className="overlay">
        <div className="modalContainer">
          <div className="head2">
            <h2>Add New Vehicle</h2>
            <p
              onClick={() => {
                closeModal(false);
              }}
            >
              X
            </p>
          </div>
          <div className="form1">
            <form action="" className="form_section2" onSubmit={submitHandler}>
              <label htmlFor="TollName">
                <h5>
                  Select Toll Name <span>*</span>
                </h5>
              </label>
              <div className="Toll_List">
                <input
                  list="Toll_data"
                  placeholder="Select Toll Name"
                  name="tollName"
                  value={data.tollName}
                  onChange={handleChange}
                />
                <datalist id="Toll_data">
                  {tollData.map((item, index) => {
                    return <option key={index} value={item.toll_name} />;
                  })}
                </datalist>
              </div>
              <label htmlFor="vehicle">
                <h5>
                  Select Vehicle Type<span>*</span>
                </h5>
              </label>
              <div className="vehicle_list">
                <input
                  list="vehicle"
                  value={data.type}
                  placeholder="Select Vehicle type"
                  name="type"
                  onChange={handleChange}
                />
                <datalist id="vehicle">
                  {tollData.map((item, index) => {
                    return (
                      <option key={index} value={item.vehicle[index].type} />
                    );
                  })}
                </datalist>
              </div>
              <label htmlFor="vehicle_number">
                <h5>
                  Enter Vehicle Number<span>*</span>
                </h5>
              </label>
              <input
                type="text"
                name="vehicle_id"
                value={data.vehicle_id}
                placeholder="Enter Number"
                onChange={handleChange}
              />
              <label htmlFor="tariff">
                <h5>
                  Tariff<span>*</span>
                </h5>
              </label>
              <input
                type="text"
                name="tariff"
                value={tariff}
                placeholder="Amount"
                disabled
              />
              <button type="submit">Add Entry</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewVehicle;
