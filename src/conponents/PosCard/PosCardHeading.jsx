import React from 'react'

function PosCardHeading(
  {
    Title1,
    Title2,
    Title3,
    Title4,
    className
  }
) {
  return (
  
    <>
    {/* <div className='Font24and600 text-start '>Memu List</div> */}
            <ul  className={`d-flex Uldec1  list-unstyled mb-0  ${className}`}>
            <li>{Title1}</li>
            <li>{Title2}</li>
            <li>{Title3}</li>
            <li>{Title4}</li>
                
            </ul>
    
    </>
  )
}

export default PosCardHeading