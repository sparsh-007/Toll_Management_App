import React from "react";
import "./css/Table.css";
import { useGlobalContext } from "../context";

function Table() {
  const { vehicle } = useGlobalContext();
  return (
    <>
      <table>
        <tbody>
          <tr id="row1">
            <th>Vehicle Type</th>
            <th>Vehicle Number</th>
            <th>Date/Time</th>
            <th>Toll Name</th>
            <th>Tariff</th>
          </tr>
          {vehicle.map((item) => {
            return (
              <>
                <tr>
                  <td key={item.vehicle_id}>{item.type}</td>
                  <td key={item.vehicle_id}>{item.vehicle_id}</td>
                  <td key={item.vehicle_id}>{item.entry_time}</td>
                  <td key={item.vehicle_id}>{item.toll_name}</td>
                  <td key={item.vehicle_id}>{item.amount}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Table;
