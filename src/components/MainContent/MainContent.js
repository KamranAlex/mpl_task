import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';

const MainContent = () => {
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
  return (
    <div className='main-content'>
      <Header></Header>
    </div>
  );
};

export default MainContent;
