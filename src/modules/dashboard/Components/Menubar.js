import React from 'react';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import './Menubar.css';
export default function Menubar() {
  return (
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
  );
}
