import React from 'react';
import './Meeting.css';
export default function Meetings({ meetings }) {
  return (
    <div className='meeting_container'>
      <div className='meeting_container_heading'>
        <p className='heading_text'>Today's Schedule</p>
        <p className='see_all_text'>see all</p>
      </div>
      <div className='meetings_content'>
        {meetings?.map((meeting) => (
          <div className='meeting_content'>
            <p className='meeting_title'>{meeting?.title}</p>
            <p className='meeting_time'>{meeting?.time}</p>
            <p className='meeting_vanue'>{meeting?.vanue}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
