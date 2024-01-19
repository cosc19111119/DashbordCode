import React from 'react';

function AnalisisCard() {
    return (
        <>
            <div class="card cardborderset">
                <div class="card-body">
                    <div className=' cardheader1 '>
                        <div className='headerText'>Competitors List</div>
                    </div>

                    <table className="table tabledec1 bg-white">
                        <thead className='theaddec1'>
                            <tr>
                                <th scope="col">Restaurant</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: 5 }, (_, index) => (
                                <tr key={index}>
                                    <td className='tabrowtext '>
                                        <div className='d-flex align-items-center'>
                                            <div className='statcardimage1 '>
                                                <img
                                                    className=''
                                                    src="Assets/solar_gallery-bold.png"
                                                    alt="Image"
                                                />
                                            </div>
                                            <span className='tabrowtext1 tabrowtext custom-line-height'>
                                                Doodles
                                            </span>
                                        </div>
                                    </td>
                                    <td className='tabrowtext11'><a className='text-decoration-underline' href="#">View</a></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default AnalisisCard;
