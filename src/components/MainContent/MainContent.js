import { FormGroup, Grid, Typography, withStyles } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import './MainContent.css';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import WeeklyTable from './WeeklyTable';
import DailyTable from './DailyTable';

const MainContent = () => {
  const [info, setInfo] = useState([]);
  const [toggled, setToggled] = useState({ checked: false });

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

  // Making Toggle Switch
  const AntSwitch = withStyles((theme) => ({
    root: {
      width: 40,
      height: 20,
      padding: 0,
      display: 'flex'
    },
    switchBase: {
      padding: 3,
      color: theme.palette.grey[500],
      '&$checked': {
        transform: 'translateX(20px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: '#DE6552',
          borderColor: '#DE6552'
        }
      }
    },
    thumb: {
      width: 14,
      height: 14,
      boxShadow: 'none'
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 16 / 1,
      opacity: 1,
      backgroundColor: theme.palette.common.white
    },
    checked: {}
  }))(Switch);

  const handleChange = (event) => {
    setToggled({ ...toggled, checked: event.target.checked });
  };

  return (
    <div className='main-content'>
      <Header></Header>
      <div className='comparison-section m-4'>
        <div className='table-top d-flex justify-content-between align-items-center p-4'>
          <p className='m-0'>
            Hotel Rate Comparison{' '}
            <FontAwesomeIcon
              icon={faCaretDown}
              size='lg'
              style={{ color: '#000000' }}
            />
          </p>
          <FormGroup>
            <Typography component='div'>
              <Grid component='label' container alignItems='center' spacing={2}>
                <Grid item>
                  <span className='m-0'>Weekly View</span>
                </Grid>
                <Grid item>
                  <AntSwitch
                    checked={toggled.checked}
                    onChange={handleChange}
                    name='checked'
                  />
                </Grid>
              </Grid>
            </Typography>
          </FormGroup>
        </div>
        {/* Comparison Table */}
        <div className='comparison-table p-4'>
          {toggled.checked === true ? (
            <WeeklyTable></WeeklyTable>
          ) : (
            <DailyTable></DailyTable>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
