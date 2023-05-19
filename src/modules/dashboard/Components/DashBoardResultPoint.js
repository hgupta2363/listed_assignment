import React from 'react';
import revenue from '../../../assets/revenue.png';
import './DashBoardResultPoint.css';
export default function DashBoardResultPoint({
  color,
  firstText,
  secondText,
  imageUrl,
}) {
  return (
    <div
      className='dashboard_result_conatiner'
      style={{ backgroundColor: color }}
    >
      <div style={{ display: 'flex', justifyContent: 'end' }}>
        <img src={imageUrl} alt='revenue' className='icon' />
      </div>
      <div style={{ display: 'flex', justifyContent: 'start' }}>
        <p className='first_text'>{firstText}</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'start' }}>
        <p className='second_text'>{secondText}</p>
      </div>
    </div>
  );
}
