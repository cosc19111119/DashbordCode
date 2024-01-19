import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import SidBar from './SidBar'; // Assuming SidBar is in the same directory

function Navbar() {
  const [isVisible, setIsVisible] = useState();


  return (
    <div className="">
      <section className={` small-sidebar ${isVisible ? 'd-block' : "d-none"} `} onClick={
        () => {
          setIsVisible(!isVisible)
        }
      } >
        <SidBar />
      </section>
      <div className='col d-none ' ></div>
      <nav style={{ backgroundColor: '#FFFFFF' }} className="navbar navbar-light col col-12 col-md-12 ">
        <div className="container-fluid pdR">
          <div className="search-container overflow-auto ">
            <input className='inputfeil' type="text" id="searchInput" placeholder="Search..." />
            <IoIosSearch className="search-icon" />
          </div>
          <button
            // Toggle the state when the button is clicked
            onClick={() => {
              setIsVisible(!isVisible);
            }}
            className="navbar-toggler d-md-none d-block"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>




        </div>
      </nav>



    </div>
  );
}

export default Navbar;
