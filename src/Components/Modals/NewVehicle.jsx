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
          </div>
        </div>
      </div>
    </>
  );
}

export default NewVehicle;
