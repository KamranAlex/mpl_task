import React from 'react';
import './MainContent.css';
import fakeData from '../fakeData';

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
      {fakeData.length > 0 ? (
        <tbody>
          {fakeData.map((data, index) => {
            const priceDiff = data.todaysPrice - data.comparePrice;
            const status = (difference) => {
              let color = '';
              let text = '';
              let borderColor = '';
              if (difference < 0) {
                borderColor = '#1eb97233';
                color = '#1EB972';
                text = 'Lower';
              } else if (difference === 0) {
                borderColor = '#f1ae2d33';
                color = '#FFC75F';
                text = 'Even';
              } else if (difference > 0) {
                borderColor = '#e94f3033';
                color = '#E94F30';
                text = 'Higher';
              }
              return { borderColor, color, text };
            };
            return (
              <tr key={index}>
                <td
                  style={{
                    borderLeft: '6px solid' + status(priceDiff).borderColor
                  }}
                >
                  {data.name}
                </td>
                <td>${data.todaysPrice}</td>
                <td>${data.comparePrice}</td>
                <td style={{ color: status(priceDiff).color }}>${priceDiff}</td>
                <td style={{ color: status(priceDiff).color }}>
                  {status(priceDiff).text}
                </td>
              </tr>
            );
          })}
        </tbody>
      ) : (
        <tbody>
          <p className='loading'>Loading Data...</p>
        </tbody>
      )}
    </table>
  );
};

export default DailyTable;
