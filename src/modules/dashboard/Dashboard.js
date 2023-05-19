import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import './Dashboard.css';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DashBoardResultPoint from './Components/DashBoardResultPoint';
import revenue from '../../assets/revenue.png';
import { fetchDashboardData } from '../../api';
import TopProductsChart from './Components/TopProductsChart';
import Meetings from './Components/Meetings';
import Activities from './Components/Activities';
export default function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [dashboardData, setDashboardData] = useState();
  useEffect(() => {
    (async () => {
      setLoading(true);
      const dashBoardData = await fetchDashboardData();
      setDashboardData(dashBoardData?.data);
      setLoading(false);
    })();
  }, []);
  console.log(dashboardData);
  return (
    <div className='container'>
      <Grid container justify='space-between'>
        <Grid
          xs={12}
          sm={12}
          md={2.4}
          sx={{
            paddingLeft: '40px',
            paddingBottom: '40px',
            paddingTop: '40px',
          }}
        >
          <div className='left_container'>
            <div className='left_container_content'>
              <p className='board_text_dash'>Board</p>
              <div className='menu'>
                <div className='menu_item'>
                  <AccessTimeOutlinedIcon
                    style={{ height: '18px', width: '18px', color: 'white' }}
                  />
                  <p className='menu_item_text'>Dashboard</p>
                </div>
                <div className='menu_item'>
                  <AccessTimeOutlinedIcon
                    style={{ height: '18px', width: '18px', color: 'white' }}
                  />
                  <p className='menu_item_text'>Transactions</p>
                </div>
                <div className='menu_item'>
                  <WorkHistoryOutlinedIcon
                    style={{ height: '18px', width: '18px', color: 'white' }}
                  />
                  <p className='menu_item_text'>Schedules</p>
                </div>
                <div className='menu_item'>
                  <GroupOutlinedIcon
                    style={{ height: '18px', width: '18px', color: 'white' }}
                  />
                  <p className='menu_item_text'>Users</p>
                </div>
                <div className='menu_item'>
                  <SettingsOutlinedIcon
                    style={{ height: '18px', width: '18px', color: 'white' }}
                  />
                  <p className='menu_item_text'>Settings</p>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={9.5}
          sx={{
            paddingRight: '60px',
            paddingTop: '60px',
            paddingLeft: '60px',
          }}
        >
          <div className='right_container'>
            <div className='header'>
              <p className='dashboard_heading_text'>Dashboard</p>
            </div>
            <Grid
              container
              justify='space-between'
              sx={{
                marginTop: '40px',
                gap: '35px',
                width: '100%',
              }}
            >
              {dashboardData?.resultPoint.map((point) => (
                <Grid xs={12} sm={12} md={2.6}>
                  <DashBoardResultPoint
                    color={point?.color ?? ''}
                    firstText={point?.first_text ?? ''}
                    secondText={point?.second_text ?? ''}
                    imageUrl={revenue}
                  />
                </Grid>
              ))}
            </Grid>
            <Activities />

            <Grid
              container
              justify='space-between'
              sx={{
                marginTop: '40px',
                gap: '40px',
                width: '100%',
                paddingBottom: '80px',
              }}
            >
              <Grid xs={12} sm={12} md={5.5}>
                <TopProductsChart topProducts={dashboardData?.topProducts} />
              </Grid>
              <Grid xs={12} sm={12} md={5.5}>
                <Meetings meetings={dashboardData?.meetings} />
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
