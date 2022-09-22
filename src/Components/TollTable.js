import React from "react";
import { useGlobalContext } from "../context";

function TollTable() {
  const { tollData } = useGlobalContext();
  const { setTollData } = useGlobalContext();
  const handleDelete = (item, e) => {
    const ans = tollData.filter((it) => it.toll_name !== item);
    console.log(ans);
    setTollData(ans);
  };
  console.log(tollData);
  return (
    <table>
      <tbody>
        <tr id="row1">
          <th>Toll Name</th>
          <th>{tollData[0].vehicle[0].type}</th>
          <th>{tollData[0].vehicle[1].type}</th>
          <th>{tollData[0].vehicle[2].type}</th>
          <th>{tollData[0].vehicle[3].type}</th>
          <th>Delete</th>
        </tr>
        {tollData.map((item, index) => (
          <tr key={item.toll_name}>
            <td>{item.toll_name}</td>
            {item.vehicle.map((item2, index2) => {
              return (
                <td key={index2}>
                  {item2.fare}/{item2.rf}
                </td>
              );
            })}
            <td>
              <button id="delete" onClick={(e) => handleDelete(item.toll_name, e)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default TollTable;
