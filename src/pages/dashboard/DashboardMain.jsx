import React from 'react'
import StatCard from '../../conponents/StatCard/StatCard'
import StatCardA from '../../conponents/StatCard/StatCardA'
import StatCardB from '../../conponents/StatCard/StatCardB'
import StartCardC from '../../conponents/StatCard/StartCardC'
import StatCardD from '../../conponents/StatCard/StatCardD'
import SocialMediaCard1 from '../../conponents/SocialMedia/SocialMediaCard1'
function DashboardMain() {
    return (
        <>
          
            <div className='container pdD pdD5  '>
            <div  className='row overflow-auto  mt-3'>
                <div className='col-12  col-xs-12 col-sm-12  col-lg-8 '>
                    <div className='row  '>
                    <div className="col-12 col-md-6 mb-2 col-lg-4 pb-sm-2">
                                <SocialMediaCard1
                                    title={"Total Revenue"}
                                    iconLink={"Assets/home-house-price-arrow-up.png"}
                                    graphLink={"Assets/Grafik.png"}
                                    percentage={11}
                                    value={"$500.000"}
                                />
                            </div>
                            <div className="col-12 pd576 col-md-6 MLS pb-sm-2 col-lg-4">
                                <SocialMediaCard1
                                    title={"Total Revenue"}
                                    iconLink={"Assets/home-house-price-arrow-up.png"}
                                    graphLink={"Assets/Grafik.png"}
                                    percentage={11}
                                    value={"$500.000"}
                                />
                            </div>
                            <div className="col-12 pd576 col-md-6 MLSs  pb-sm-2 col-lg-4">
                                <SocialMediaCard1
                                    title={"Total Revenue"}
                                    iconLink={"Assets/home-house-price-arrow-up.png"}
                                    graphLink={"Assets/Grafik.png"}
                                    percentage={11}
                                    value={"$500.000"}
                                />
                            </div>
                    </div>
                    <div className='row mt-3 overflow-auto'>
                        <div className='col-12 overflow-hidden  '>
                            <StatCardA/>
                        </div>
                    </div>
                    <div className='row overflow-auto '>
                        <div  className='col-12   '>
                            <StatCardB />
                        </div>
                    </div>
                </div>
                <div className='col-4 '>

                    <div className=' minwidth330 '>
                    <StartCardC  />
                <StatCardD/>
                    </div>
               
                </div>
            </div>
            </div>
        </>
    )
}

export default DashboardMain