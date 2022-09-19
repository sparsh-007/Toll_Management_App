import React from "react";
import "./NewVehicle.css";

function NewVehicle({closeModal}) {
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
            <form>
              <label>
                <h5>Name</h5>
                <select id="cars" name="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="fiat">Fiat</option>
                  <option value="audi">Audi</option>
                </select>
              </label>
              <button type="submit">add entry</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewVehicle;
