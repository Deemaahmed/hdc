import React from 'react'
import CoinTable from ''

export default function CoinTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {
          props.data.map(row => (
            <tr>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.type}</td>
         
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}