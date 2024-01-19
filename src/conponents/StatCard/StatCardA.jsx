import React from 'react'

import ReChart1 from '../Echarts/ReChart1'
function StatCardA() {



  return (
    <>

<div className="card cardborderset "  >
            <div className="card-body ">
                <div className='d-flex cardheader '>
                    <div className='headerText'>Income Statistics</div>
                    <div className='cardheaderR'>
                        <span className='cartheadertxtr'>1D</span>
                        <span className='cartheadertxtr'>1W</span>
                        <span className='cartheadertxtr'>1M</span>
                        <span className='text1y'> 1Y</span>
                    </div>
                </div>
              
                <div className='graphleftvalue1'>
                       <ReChart1/>
                    </div>
            </div>
        </div>
    
    </>
  )
}

export default StatCardA