import React from 'react'

function MenuCardBottom() {
    return (
        <>
            <div class="card  cardborderset  " >
                <div class="card-body">
                    <div className=' cardheader1 '>
                        <div className='headerText'>Favourite Menu</div>
                        <div class="d-flex  align-items-center justify-content-center">
                            <span >
                                Today
                            </span>
                            <img className=' givmargin' src="Assets/arrow-ios-down.png" alt="" />
                        </div>
                    </div>

<div className='main '>
                    <div class="Menupercentage">
                        <div class="single-chart">
                            <svg viewBox="0 0 36 36" class="circular-chart orange">
                                <path class="circle-bg"
                                    d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <path class="circle"
                                    stroke-dasharray="50, 100"
                                    d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <text x="18" y="20.35" class="percentage">50%</text>
                            </svg>
                        </div>




                    </div>
                    <div className='menucardper'>
                   <h6>Income Resto</h6>
                   <h1>$1495</h1>
                   </div>
                    </div>
               <div className='d-flex marginTop1'>
               
               <div className='box11 card text-start m-2'>
                
                <h4 className='boxText1'>50</h4>
                <div className='boxText2'>Online</div>
               
               </div>
               <div className='box11 card text-start m-2'>
                
                <h4 className='boxText1'>80</h4>
                <div className='boxText2'>Drive in</div>
               
               </div>
               <div className='box11 card text-start m-2'>
                
                <h4 className='boxText1'>50</h4>
                <div className='boxText2'>Drive thru</div>
               
               </div>
               </div>

                </div>
            </div>
        </>
    )
}

export default MenuCardBottom