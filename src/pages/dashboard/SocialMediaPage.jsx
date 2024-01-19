import React, { useState } from 'react'
import SocialMediaHead from '../../conponents/SocialMedia/SocialMediaHead'
import StatCard from '../../conponents/StatCard/StatCard'
import StatCardA from '../../conponents/StatCard/StatCardA'
import SocialMediaCard1 from '../../conponents/SocialMedia/SocialMediaCard1'
import StatCardD from '../../conponents/StatCard/StatCardD'
import SocialMediaCardBt from '../../conponents/SocialMedia/SocialMediaCardBt'
import Model1 from '../../conponents/Models/Model1'

function SocialMediaPage() {
    const [showModal,setShowModal] = useState(false);
    const closeModal = ()=>{
        setShowModal(false);
    }
    const openModal = ()=>{
        setShowModal(true);
    }
    return (
        <>

            <div style={{backgroundColor:'rgba(255, 255, 255, 1)'}} className='container-fluid mdR pdd1 mdD '>
                <div className="row">
                    <div className="col-12 menuPageHeading ">
                        <div className='Font24and600'>Mazz Pizza</div>

                        <a onClick={openModal} className='menuPageHeadingLeft Font14and500' href="#">Add Menu +</a>
                        <Model1 showModal={showModal}  closeModal={closeModal}/>
                    </div>
                </div>
                <div className="row  ">
                    <div className="col-12  col-lg-8 pdd1">
                        <div className="row overflow-auto ">
                            <div className="col-md-12">
                                <SocialMediaHead />
                            </div>
                        </div>

                        <div className="row mt-2 overflow-auto">
                            <div className="col-12 col-md-12 col-lg-4 ">
                                <SocialMediaCard1
                                    title={"Total Revenue"}
                                    iconLink={"Assets/home-house-price-arrow-up.png"}
                                    graphLink={"Assets/Grafik.png"}
                                    percentage={11}
                                    value={"$500.000"}
                                />
                            </div>
                            <div className="col-md-12 col-md-12 col-lg-4 ">

                                <SocialMediaCard1
                                    title={"Total Revenue"}
                                    iconLink={"Assets/home-house-price-arrow-up.png"}
                                    graphLink={"Assets/Grafik.png"}
                                    percentage={11}
                                    value={"$500.000"}
                                />
                            </div>
                            <div className="col-12  col-md-12  col-lg-4">
                                <SocialMediaCard1
                                    title={"Bad Feedback"}
                                    iconLink={"Assets/home-house-chart-graph.png"}
                                    graphLink={"Assets/Grafik (1).png"}
                                    percentage={11}
                                    value={"500"}
                                />
                            </div>
                        </div>

                        <div className='row overflow-auto mt-3'>
                            <div className='col-12 '>
                                <StatCardA />
                            </div>
                        </div>

                        <div className="row overflow-auto">
                            <div className="col-12 col-md-6 col-lg-4">
                                <SocialMediaCardBt/>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <SocialMediaCardBt/>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <SocialMediaCardBt/>
                            </div>
                        </div>


                    </div>
                    <div className="col-12  col-lg-4">
                        <StatCardD />
                        <StatCardD />
                    </div>
                </div>

            </div>

        </>
    )
}

export default SocialMediaPage