import React from "react";
import { useGlobalContext } from "../context";

function TollTable() {
  const tollData = useGlobalContext();
  return (
    <table>
      <tbody>
        <tr id="row1">
          <th>Toll Name</th>
          <th>{tollData[0].vehicle[0].type}</th>
          <th>{tollData[0].vehicle[1].type}</th>
          <th>{tollData[0].vehicle[2].type}</th>
          <th>{tollData[0].vehicle[3].type}</th>
        </tr>
        {tollData.map((item, index) => (
          <tr key={index}>
            <td>{item.toll_name}</td>
            {item.vehicle.map((item2, index2) => {
              return <td key={index2}>{item2.fare}/{item2.rf}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default TollTable;
