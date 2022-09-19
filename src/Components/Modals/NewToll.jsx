import React from "react";
import "./NewToll.css";

function NewToll({ closeModal }) {
  return (
    <>
      <div className="overlay">
        <div className="modalCont">
          <div className="head">
            <h2>Add New Toll</h2>
           <p onClick={()=>{
            closeModal(false);
           }}>X</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewToll;
