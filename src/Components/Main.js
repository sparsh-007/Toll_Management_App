import React from "react";
import "./css/Main.css";
import { Icon } from "@iconify/react";
import Table from "./Table";

function Main() {
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
            <button className="btn">Add Vehicle Entry</button>
            <button className="btn">Add New Toll</button>
            <button className="btn">View All Toll</button>
          </div>
        </div>
        <Table />
      </div>
    </>
  );
}

export default Main;
