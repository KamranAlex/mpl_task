import React from 'react';
import './MainContent.css';

const DailyTable = () => {
  return (
    <table className='table'>
      <thead className='thead'>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>our today’s rate</th>
          <th scope='col'>competitor rate</th>
          <th scope='col'>difference</th>
          <th scope='col'>our rate is</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>Larry</td>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  );
};

export default DailyTable;
