import React from "react";
import "./NewVehicle.css";

function NewVehicle({ closeModal }) {
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
            <form action="" className="form_section2">
              <label htmlFor="TollName">
                <h5>
                  Select Toll Name <span>*</span>
                </h5>
              </label>
              <div className="Toll_List">
                <input list="Toll_data" placeholder="Select Vehicle type" />
                <datalist id="Toll_data">
                  <option value="TOLL2" />
                  <option value="TOLL3" />
                  <option value="TOll4" />
                  <option value="TOLL5" />
                </datalist>
              </div>
              <label htmlFor="vehicle"><h5>Select Vehicle Type<span>*</span></h5></label>
              <div className="vehicle_list">
                <input list="vehicle" placeholder="Select Vehicle type" />
                <datalist id="vehicle">
                  <option value="Car/Jeep" />
                  <option value="LCV" />
                  <option value="Truck/Bus" />
                  <option value="Heavy Vehicles" />
                </datalist>
              </div>
              <label htmlFor="vehicle_number"><h5>Enter Vehicle Number<span>*</span></h5></label>
              <input type="text" name="vehicle_number" placeholder="Enter Number"/>
              <label htmlFor="tariff"><h5>Tariff<span>*</span></h5></label>
              <input type="text" name="tariff" placeholder="Amount"  disabled/>
              <button type="submit">Add Entry</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewVehicle;
