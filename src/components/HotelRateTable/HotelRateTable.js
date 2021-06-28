import React, { useEffect, useState } from 'react';

const HotelRateTable = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch(
      'https://us-central1-stremlind-app.cloudfunctions.net/api/hotel/rate-comparison'
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInfo(data);
      });
  }, []);
  return <div></div>;
};

export default HotelRateTable;
