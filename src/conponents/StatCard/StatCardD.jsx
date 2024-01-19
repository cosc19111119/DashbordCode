import React from 'react'

function StatCardD() {
  return (
    <>
     <div class="card min-width-200 overflow-auto cardborderset" >
                <div class="card-body">
                    <div className=' cardheader1 '>
                        <div className='headerText'>Suggestions</div>
                        {/* <div class="d-flex flex-column align-items-center">
                            <span class="dot"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                        </div> */}
                    </div>

                    <table className="table  tabledec1 bg-white"  >
                        {/* <thead className='theaddec1' >
                            <tr  >
                                <th scope="col">Add these post to gain Engagement</th>
                                <th scope="col">Type</th>
                            </tr>
                        </thead> */}
                        <div className='CardDheadText'>Add these post to gain Engagement</div>
                        <tbody>

                            <tr>
                                <td className='tabrowtext '>
                                    <div className='d-flex align-items-center'>
                                        <div className='statcardimage1 '>
                                            <img className=''
                                                src="Assets/solar_gallery-bold.png"
                                                alt="Image"
                                            />
                                        </div>
                                        <span className='tabrowtext1 tabrowtext custom-line-height'>American<br /> Caesar Salad</span>

                                    </div>
                                </td>
                                <td > <div className='cardDbox'>Post</div></td>
                            </tr>
                            <tr>
                                <td className='tabrowtext '>
                                    <div className='d-flex align-items-center'>
                                        <div className='statcardimage1 '>
                                            <img className=''
                                                src="Assets/solar_gallery-bold.png"
                                                alt="Image"
                                            />
                                        </div>
                                        <span className='tabrowtext1 tabrowtext custom-line-height'>American<br /> Caesar Salad</span>
                                    </div>
                                </td>
                                <td > <div className='cardDbox'>Post</div></td>
                            </tr>
                            <tr>
                                <td className='tabrowtext '>
                                    <div className='d-flex align-items-center'>
                                        <div className='statcardimage1 '>
                                            <img className=''
                                                src="Assets/solar_gallery-bold.png"
                                                alt="Image"
                                            />
                                        </div>
                                        <span className='tabrowtext1 tabrowtext custom-line-height'>American<br /> Caesar Salad</span>

                                    </div>
                                </td>
                                <td > <div className='cardDbox'>Post</div></td>
                            </tr>
                            <tr>
                                <td className='tabrowtext '>
                                    <div className='d-flex align-items-center'>
                                        <div className='statcardimage1 '>
                                            <img className=''
                                                src="Assets/solar_gallery-bold.png"
                                                alt="Image"
                                            />
                                        </div>
                                        <span className='tabrowtext1 tabrowtext custom-line-height'>American<br /> Caesar Salad</span>
                                    </div>
                                </td>
                                <td > <div className='cardDbox'>Post</div></td>
                            </tr>
                        </tbody>

                    </table>
                 
                </div>
            </div>
    
    </>
  )
}

export default StatCardD