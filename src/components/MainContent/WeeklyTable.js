import React, { useEffect, useState } from 'react';
import './MainContent.css';

const WeeklyTable = () => {
  const [bodyInfo, setBodyInfo] = useState([]);
  const [labels, setLabels] = useState([]);
  useEffect(() => {
    fetch(
      'https://us-central1-stremlind-app.cloudfunctions.net/api/hotel/rate-comparison'
    )
      .then((res) => res.json())
      .then((data) => {
        setBodyInfo(data.rateBody);
        console.log(data.rateBody[0].day1);
        setLabels(data.rateLabels);
        console.log(data.rateLabels);
      });
  }, []);
  return (
    <>
      {bodyInfo.length > 0 ? (
        <table className='table'>
          <thead className='thead'>
            <tr>
              {labels.map((label, index) => {
                return (
                  <th scope='col' key={index}>
                    {label}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {bodyInfo.map((info) => {
              const getStyle = (price) => {
                let priceColor = '';
                if (price < 0) {
                  priceColor = '#1EB972';
                } else if (price === 0) {
                  priceColor = '#FFC75F';
                } else if (price > 0) {
                  priceColor = '#E94F30';
                }
                return priceColor;
              };
              return (
                <tr>
                  <td>{info.name}</td>
                  <td>
                    {info.day1 === null ? (
                      'null'
                    ) : (
                      <>
                        <span className='other-price'>
                          {info.day1.otherPrice}
                        </span>{' '}
                        <span
                          className='compare-price'
                          style={{ color: getStyle(info.day1.compare) }}
                        >
                          {info.day1.compare}
                        </span>
                      </>
                    )}
                  </td>

                  <td>
                    {info.day2 === null ? (
                      'null'
                    ) : (
                      <>
                        <span className='other-price'>
                          {info.day2.otherPrice}
                        </span>{' '}
                        <span
                          className='compare-price'
                          style={{ color: getStyle(info.day2.compare) }}
                        >
                          {info.day2.compare}
                        </span>
                      </>
                    )}
                  </td>

                  <td>
                    {info.day3 === null ? (
                      'null'
                    ) : (
                      <>
                        <span className='other-price'>
                          {info.day3.otherPrice}
                        </span>{' '}
                        <span
                          className='compare-price'
                          style={{ color: getStyle(info.day3.compare) }}
                        >
                          {info.day3.compare}
                        </span>
                      </>
                    )}
                  </td>

                  <td>
                    {info.day4 === null ? (
                      'null'
                    ) : (
                      <>
                        <span className='other-price'>
                          {info.day4.otherPrice}
                        </span>{' '}
                        <span
                          className='compare-price'
                          style={{ color: getStyle(info.day4.compare) }}
                        >
                          {info.day4.compare}
                        </span>
                      </>
                    )}
                  </td>

                  <td>
                    {info.day5 === null ? (
                      'null'
                    ) : (
                      <>
                        <span className='other-price'>
                          {info.day5.otherPrice}
                        </span>{' '}
                        <span
                          className='compare-price'
                          style={{ color: getStyle(info.day5.compare) }}
                        >
                          {info.day5.compare}
                        </span>
                      </>
                    )}
                  </td>

                  <td>
                    {info.day6 === null ? (
                      'null'
                    ) : (
                      <>
                        <span className='other-price'>
                          {info.day6.otherPrice}
                        </span>{' '}
                        <span
                          className='compare-price'
                          style={{ color: getStyle(info.day6.compare) }}
                        >
                          {info.day6.compare}
                        </span>
                      </>
                    )}
                  </td>

                  <td>
                    {info.day7 === null ? (
                      'null'
                    ) : (
                      <>
                        <span className='other-price'>
                          {info.day7.otherPrice}
                        </span>{' '}
                        <span
                          className='compare-price'
                          style={{ color: getStyle(info.day7.compare) }}
                        >
                          {info.day7.compare}
                        </span>
                      </>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p className='loading'>Loading Data...</p>
      )}
    </>
  );
};

export default WeeklyTable;
