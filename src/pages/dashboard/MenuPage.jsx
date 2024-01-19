import React, { useState } from 'react'
import MenuCardHeading1 from '../../conponents/MenuCard/MenuCardHeading1'
import MenuCardfluid from '../../conponents/MenuCard/MenuCardfluid'
import StartCardC from '../../conponents/StatCard/StartCardC'
import MenuCardBottom from '../../conponents/MenuCard/MenuCardBottom'
import Model1 from '../../conponents/Models/Model1'
function MenuPage() {
    const [showModal,setShowModal] = useState(false);
    const closeModal = ()=>{
        setShowModal(false);
    }
    const openModal = ()=>{
        setShowModal(true);
    }
  return (
   <>
   <div className="container-fluid mdR mdD" style={{backgroundColor:'rgba(255, 255, 255, 1)'}}>
   <div className="row">
    <div className="col-12 pdR7 menuPageHeading ">
        <div className='Font24and600'>Mazz Pizza</div>
       
        <a onClick={openModal} className='menuPageHeadingLeft  Font14and500' href="#">Add Menu +</a>
        <Model1 showModal = {showModal} closeModal={closeModal}  />
    </div>
   </div>
   <div className="row ">
    <div className="col-12 col-lg-8">
        <div className="row">
            <div className="col-12  ">
            <MenuCardHeading1/>
            </div>
        </div>
        <div className="row mt-5  dnone mb-3 ">
            <div className="col-12 col-sm-6 d-md-4 d-flex justify-content-around MarginTop col-lg-4 ">
                <MenuCardfluid/>

            </div>
            <div className="col-12 col-sm-6 d-md-4 d-flex justify-content-around  MarginTop col-lg-4 ">
            <MenuCardfluid/>
            </div>
           
            <div className="col-12 col-sm-6 d-md-4 d-flex justify-content-around  d-none MarginTop  d-lg-block col-lg-4">
            <MenuCardfluid/>
            </div>
          
        </div>
        <div className="row mt-5  dnone mb-3">
            <div className="col-12 col-sm-6 d-md-4 d-flex justify-content-around  col-lg-4">
            <MenuCardfluid/>
            </div>
            <div className="col-12 col-sm-6 d-md-4 d-flex justify-content-around  MarginTop col-lg-4">
            <MenuCardfluid/>
            </div>

            <div className="col-12 col-sm-6 d-none  d-flex justify-content-around  d-md-4 MarginTop d-lg-block  dnone col-lg-4">
            <MenuCardfluid/>
            </div>

        </div>


    </div>
    <div className="col-12 col-lg-4 "> 
    
    <StartCardC  />
    <MenuCardBottom/>
    
    
    </div>
   </div>
   </div>
   </>
  )
}

export default MenuPage