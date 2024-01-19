import { React, useState } from 'react';

import Navbar from '../../conponents/Navbar'
import SidBar from '../../conponents/SidBar'
import { Outlet } from 'react-router-dom'

function Dashboar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarWidth = isOpen ? '240px' : '50px';
  const contentWidth = isOpen ? 'calc(100% - 240px)' : 'calc(100% - 50px)';



  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: sidebarWidth, transition: 'width 0.3s' }}>
        <SidBar sidebarWidth={sidebarWidth} toggleSidebar={toggleSidebar} isOpen={isOpen}/>
         
      </div>
      <div style={{ width: contentWidth, transition: 'width 0.3s' }}>
        <Outlet />
      </div>
      {/* <button onClick={toggleSidebar}>Toggle Sidebar</button> */}
    </div>
  );
}

export default Dashboar