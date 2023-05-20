import React from 'react';
import { CChart } from '@coreui/react-chartjs';
import './Activies.css';
export default function Activities() {
  return (
    <div className='activity_container'>
      <div className='activity_container_header'></div>
      <div className='activity_graph'>
        <CChart
          type='line'
          data={{
            labels: ['Week1', 'Week2', 'Week3', 'Week4'],
            datasets: [
              {
                label: 'User',
                backgroundColor: '#9BDD7C',
                borderColor: '#9BDD7C',
                pointBackgroundColor: '#9BDD7C',
                pointBorderColor: '#9BDD7C',
                tension: 0.4,

                data: [40, 20, 12, 39],
              },
              {
                label: 'Guest',
                backgroundColor: '#E9A0A0',
                borderColor: '#E9A0A0',
                pointBackgroundColor: '#E9A0A0',
                pointBorderColor: '#E9A0A0',
                data: [50, 12, 28, 29],
                tension: 0.4,
              },
            ],
          }}
          options={{
            aspectRatio: 3.6,

            tooltips: {
              enabled: true,
            },
          }}
        />
      </div>
    </div>
  );
}
