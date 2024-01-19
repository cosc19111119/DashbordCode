import React from 'react'

const tableDataArray = [
    {
        imageSRC: 'Assets/solar_gallery-bold.png',
        foodName: 'Food 1',
        foodType: 'Category 1',
        status: 'Online',
        price: 100
    },
    {
        imageSRC: 'Assets/solar_gallery-bold.png',
        foodName: 'Food 2',
        foodType: 'Category 2',
        status: 'Online',
        price: 190
    },
    {
        imageSRC: 'Assets/solar_gallery-bold.png',
        foodName: 'Food 3',
        foodType: 'Category 3',
        status: 'Offline',
        price: 109
    },
    {
        imageSRC: 'Assets/solar_gallery-bold.png',
        foodName: 'Food 4',
        foodType: 'Category 4',
        status: 'Online',
        price: 100
    }
];

function StatCardB() {

    return (
        <>


            <table className="table overflow-auto min-width-200  tabledec bg-white"  >
                <thead className='theaddec' >
                    <tr  >

                        <th scope="col">Food Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Status</th>
                        <th scope="col">Price</th>

                    </tr>
                </thead>
                <tbody>

                    {
                        tableDataArray.map((fooood) => {

                            return <tr>
                                <td className='tabrowtext '>
                                    <div className='d-flex'>
                                        <div className='statcardimage '>
                                            <img className=''
                                                src={fooood.imageSRC}
                                                alt="Image"


                                            />
                                        </div>
                                        <span className='tabrowtext1 tabrowtext'>{fooood.foodName}</span>
                                    </div>
                                </td>
                                <td className='tabrowtext'>{fooood.foodType}</td>
                                <td className='tabrowtext'>{fooood.status}</td>
                                <td className='tabrowtext'>${fooood.price}</td>
                            </tr>
                        })
                    }

                   
                    
                   


                </tbody>
            </table>


        </>
    )
}

export default StatCardB