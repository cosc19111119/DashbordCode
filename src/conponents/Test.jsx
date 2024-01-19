import React, { useState } from 'react';
import { LuLayoutDashboard } from "react-icons/lu";
import { CgMenuBoxed } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import Navbar from './Navbar';

function Test() {
  const [showText, setShowText] = useState(true);

  const handleToggle = () => {
    setShowText(!showText);
  };

  return (
    <>
      <nav
        className={`bg-white sidebar ${showText ? '' : 'collapsed'}`}
        style={{ width: showText ? '240px' : '50px' }}
      >
        <div className={`position-sticky ${showText ? '' : 'collapsed'}`}>
          <div className="list-group list-group-flush mx-3">


            <a className={`handl_Logo ${showText ? '' : 'toggle-btn'}`}
              href="#">
              <span className={`toggle-btn  ${showText ? '' : 'collapsed'}`} onClick={handleToggle}>

                <button class="navbar-toggler" type="button">
                  <span class="navbar-toggler-icon"></span>
                </button>
              </span>

              {showText && <a

                href="#"
                className="log-main list-group-item   "
              >
                <img className='img-fluid logo-image fa-lock fas  fa-fw me-3 ' src="/Assets/Vector.png" alt="logo" />

                <>
                  <>
                    <span style={{ color: "#3A3F51", letterSpacing: 0, textDecoration: "none", fontSize: "24", fontWeight: "800" }}>
                      Dine
                    </span>
                    <span style={{ color: "#069AF3", letterSpacing: 0, textDecoration: "none", fontSize: "24", fontWeight: "800" }}>
                      Bot
                    </span>
                  </>

                </>


              </a>}

            </a>


            <NavLink
              to="/DashboardMain"
              className={`icon-color mt-3 list-group-item-action py-2 ripple ${showText ? '' : 'icon-only'}`}
            >
              <i className='icon_height fa-lock fas fa-fw me-3 '><LuLayoutDashboard /></i>
              {showText && <span>Dashboard</span>}
            </NavLink>
            {/* Repeat the pattern for other NavLink elements */}
            {/* NavLink for PosPage */}


            <NavLink
              to="/MenuPage"
              className={`icon-color list-group-item-action py-2 ripple ${showText ? '' : 'icon-only'}`}
            >
              <i className='icon_height fa-lock fas fa-fw me-3 '><CgMenuBoxed />

              </i>
              {showText && <span>Menu</span>}
            </NavLink>
            <NavLink
              to="/PosPage"
              className={`icon-color list-group-item-action py-2 ripple ${showText ? '' : 'icon-only'}`}
            >
              <img className='img-fluid fa-lock fas fa-fw me-3 ' src="/Assets/icon3.png" alt="logo" />
              {showText && <span>POS</span>}
            </NavLink>
            <NavLink
              to="/SocialMediaPage"
              className={`icon-color list-group-item-action py-2 ripple ${showText ? '' : 'icon-only'}`}
            >
              <img className='img-fluid fa-lock fas fa-fw me-3 ' src="/Assets/icon4.png" alt="logo" />
              {showText && <span>Social Media</span>}
            </NavLink>
            <NavLink
              to="FeedBacks"
              className={`icon-color list-group-item-action py-2 ripple ${showText ? '' : 'icon-only'}`}
            >
              <img className='img-fluid fa-lock fas fa-fw me-3 ' src="/Assets/icon5.png" alt="logo" />
              {showText && <span>FeedBacks</span>}
            </NavLink>
            <NavLink
              to="Analysis"
              className={`icon-color list-group-item-action py-2 ripple ${showText ? '' : 'icon-only'}`}
            >
              <img className='img-fluid fa-lock fas fa-fw me-3 ' src="/Assets/icon6.png" alt="logo" />
              {showText && <span>Analysis</span>}
            </NavLink>

            <div className='bottomIcon'>

              <a
                href="#"
                className={`icon-color list-group-item-action py-2 ripple ${showText ? '' : 'icon-only'}`}
              >
                <img className='img-fluid fa-lock fas fa-fw me-3 ' src="/Assets/settings.png" alt="logo" />
                {showText && <span>Settings</span>}
              </a>

              <a
                href="#"
                className={`icon-color list-group-item-action py-2 ripple ${showText ? '' : 'icon-only'}`}
              >
                <img className='img-fluid fa-lock fas fa-fw me-3 ' src="/Assets/logout.png" alt="logo" />
                {showText && <span>Logout</span>}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Test;
