import React from 'react';
import PosCardHeading from '../../conponents/PosCard/PosCardHeading';
import AnalisisCard from '../../conponents/Analysis/AnalisisCard';
import StatCardA from '../../conponents/StatCard/StatCardA';

function AnalysisPage() {
    return (
        <>

            <div className="container-fluid pdD  " style={{ backgroundColor: 'rgba(255, 255, 255, 1)' }}>
                <div className="row pdD1 pdD2">
                    <div className="col-12 menuPageHeading ">
                        <div className='Font24and600'>Analysis</div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-8 ">
                        <div className="row">
                            <div className="col-12 pdD1 pdD2 ">
                                <PosCardHeading
                                    Title1={"Reviews"}
                                    Title2={"Income"}
                                    Title3={"Sales"}

                                    className="paddingsfor12"
                                />
                            </div>
                        </div>

                            <div className='row mt-3 overflow-auto'>
                                <div className='col-12 '>
                                    <StatCardA />
                                </div>
                            </div>

                            <div className='row overflow-auto '>
                                <div className='col-12 '>
                                    <StatCardA />
                                </div>
                            </div>



                    </div>
                    <div className=" col-lg-4">
                        <AnalisisCard />
                    </div>

                </div>
            </div>

        </>
    )
}

export default AnalysisPage