import React from 'react'
import MenuCardHeading1 from '../../conponents/MenuCard/MenuCardHeading1'
import MenuCardfluid from '../../conponents/MenuCard/MenuCardfluid'
import StartCardC from '../../conponents/StatCard/StartCardC'
import MenuCardBottom from '../../conponents/MenuCard/MenuCardBottom'
import PosCardHeading from '../../conponents/PosCard/PosCardHeading'
import PosCardA from '../../conponents/PosCard/PosCardA'
import StatCardB from '../../conponents/StatCard/StatCardB'
import PosCArdB from '../../conponents/PosCard/PosCArdB'
function PosPage() {
  return (
   <>
   <div className="container mdR mdD " style={{backgroundColor:'rgba(255, 255, 255, 1)'}}>
   <div className="row">
    <div className="col-12 menuPageHeading ">
        <div className='Font24and600'>POS</div>
{/*        
        <a className='menuPageHeadingLeft Font14and500' href="#">Add Menu +</a> */}
    </div>
   </div>
   <div className=" row">
    <div className="col-12 col-lg-8">
        <div className="row">
            <div className="col-12 ">
            <PosCardHeading 
            Title1={"Sales"}
            Title2={"Most Selling"}
            Title3={"Less Selling"}
            className="paddingsfor"
            />
            </div>
        </div>
        <div className="row ">
           <div className='col-12 overflow-auto'>
            <PosCArdB/>
            </div> 
          
        </div>
       


    </div>
    <div className="col-12 col-lg-4 "> 
     <PosCardA 
     
     />
    
    </div>
   </div>
   </div>
   </>
  )
}

export default PosPage