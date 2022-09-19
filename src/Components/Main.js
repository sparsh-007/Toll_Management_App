import React, { useState } from "react";
import "./css/Main.css";
import { Icon } from "@iconify/react";
import NewToll from "./Modals/NewToll";
import Table from "./Table";
import NewVehicle from "./Modals/NewVehicle";
import TollTable from "./TollTable";

function Main() {
  const [openModal, setOpenModal] = useState(false);
  const [openVehicle, setOpenVehicle] = useState(false);
  const [toggleTable, setToggleTable] = useState(false);

  return (
    <>
      <div className="main">
        <h2>Toll Management Application</h2>
        <hr className="line1" />
        <div className="utility">
          <div className="left">
            <h3>Toll entries/Vehicle entries</h3>
            <Icon icon="foundation:filter" />
            <input
              className="search"
              type="search"
              placeholder="search vehicles"
              results={0}
            />
          </div>
          <div className="right">
            <button
              className="btn"
              onClick={() => {
                setOpenVehicle(true);
              }}
            >
              Add Vehicle Entry
            </button>
            <button
              className="btn"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Add New Toll
            </button>
            {!toggleTable && (
              <button
                className="btn"
                onClick={() => {
                  setToggleTable(true);
                }}
              >
                View All Toll
              </button>
            )}
            {toggleTable && (
              <button
                className="btn"
                onClick={() => {
                  setToggleTable(false);
                }}
              >
                Back to main
              </button>
            )}
          </div>
        </div>
        {!toggleTable && <Table />}
      </div>
      {openModal && <NewToll closeModal={setOpenModal} />}
      {openVehicle && <NewVehicle closeModal={setOpenVehicle} />}
      {toggleTable && <TollTable />}
    </>
  );
}

export default Main;
