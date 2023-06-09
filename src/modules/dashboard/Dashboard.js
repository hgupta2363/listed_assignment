import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import './Dashboard.css';
import Menubar from './Components/Menubar';
import DashBoardResultPoint from './Components/DashBoardResultPoint';
import revenue from '../../assets/revenue.png';
import transaction from '../../assets/transaction.png';
import like from '../../assets/like.png';
import users from '../../assets/users.png';
import { fetchDashboardData } from '../../api';
import TopProductsChart from './Components/TopProductsChart';
import Meetings from './Components/Meetings';
import Activities from './Components/Activities';
import notification from '../../assets/notification.png';
import userAvatar from '../../assets/userAvatar.png';
const iconUrls = [revenue, transaction, like, users];

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
        <Grid xs={12} sm={12} md={2.4} className='grid_left'>
          <Menubar />
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={9.5}
          className='dashboard_right_grid_container'
        >
          <div className='right_container'>
            <div className='dashboard_header'>
              <p className='dashboard_heading_text'>Dashboard</p>
              <div className='dashboard_right_header'>
                <input
                  className='search_input_style'
                  placeholder='Search'
                  type='search'
                />
                <img src={notification} alt='' className='noti_image_style' />
                <img src={userAvatar} alt='' className='user_image_style' />
              </div>
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
              {dashboardData?.resultPoint.map((point, index) => (
                <Grid xs={12} sm={12} md={2.6}>
                  <DashBoardResultPoint
                    color={point?.color ?? ''}
                    firstText={point?.first_text ?? ''}
                    secondText={point?.second_text ?? ''}
                    imageUrl={iconUrls[index]}
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
                gap: '5%',
                width: '100%',
                paddingBottom: '80px',
              }}
            >
              <Grid xs={12} sm={12} md={5.7}>
                <TopProductsChart topProducts={dashboardData?.topProducts} />
              </Grid>
              <Grid xs={12} sm={12} md={5.7}>
                <Meetings meetings={dashboardData?.meetings} />
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
