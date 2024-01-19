import React from 'react'

function StartCardC() {
    return (
        <>
            <div class="card   cardborderset 
              min-width-200 overflow-auto" >
                <div class="card-body ">
                    <div className=' cardheader1 min-max-content '>
                        <div className='headerText'>Favourite Menu</div>
                        <div class="d-flex flex-column align-items-center">
                            <span class="dot"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                        </div>
                    </div>

                    <table className="table  tabledec1 bg-white "  >
                        <thead className='theaddec1' >
                            <tr  >
                                <th scope="col">Food Name</th>
                                <th scope="col">Type</th>
                            </tr>
                        </thead>
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
                                <td className='tabrowtext11'>fgddf</td>
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
                                <td className='tabrowtext11'>fgddf</td>
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
                                <td className='tabrowtext11'>fgddf</td>
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
                                <td className='tabrowtext11'>fgddf</td>
                            </tr>
                        </tbody>

                    </table>
                    <a className='tableA' href="">see all</a>
                </div>
            </div>
        </>
    )
}

export default StartCardC