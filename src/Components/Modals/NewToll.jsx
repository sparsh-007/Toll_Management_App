import React from "react";
import "./NewToll.css";

function NewToll({ closeModal }) {
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
                <input type="text" id="toll_name" required placeholder="Enter Toll Name"/>
              </div>
              <label htmlFor="Vehicle fare details">
                <h5>
                  Vehicle fare details<span>*</span>
                </h5>
              </label>
              <div className="list_cont">
                <div className="list">
                  <input list="vehicle" placeholder="Select Vehicle type" />
                  <datalist id="vehicle">
                    <option value="Car/Jeep" />
                    <option value="LCV" />
                    <option value="Truck/Bus" />
                    <option value="Heavy Vehicles" />
                  </datalist>
                  <input type="number" placeholder="Single Journey" />
                  <input type="number" placeholder="Return Journey" />
                </div>
                <div className="list">
                  <input list="vehicle" placeholder="Select Vehicle type" />
                  <datalist id="vehicle">
                    <option value="Car/Jeep" />
                    <option value="LCV" />
                    <option value="Truck/Bus" />
                    <option value="Heavy Vehicles" />
                  </datalist>
                  <input type="number" placeholder="Single Journey" />
                  <input type="number" placeholder="Return Journey" />
                </div>
                <div className="list">
                  <input list="vehicle" placeholder="Select Vehicle type" />
                  <datalist id="vehicle">
                    <option value="Car/Jeep" />
                    <option value="LCV" />
                    <option value="Truck/Bus" />
                    <option value="Heavy Vehicles" />
                  </datalist>
                  <input type="number" placeholder="Single Journey" />
                  <input type="number" placeholder="Return Journey" />
                </div>
                <div className="list">
                  <input list="vehicle" placeholder="Select Vehicle type" />
                  <datalist id="vehicle">
                    <option value="Car/Jeep" />
                    <option value="LCV" />
                    <option value="Truck/Bus" />
                    <option value="Heavy Vehicles" />
                  </datalist>
                  <input type="number" placeholder="Single Journey" />
                  <input type="number" placeholder="Return Journey" />
                </div>
              </div>
              <button type="submit" className="form_btn"> Add Details</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewToll;
