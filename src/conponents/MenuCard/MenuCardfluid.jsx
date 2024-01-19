import React from 'react'

function MenuCardfluid() {
    return (
        <>
            <div className="card  cardf" style={{
                 width: '100%', 
                height: '270px',
                position: 'relative',
                
                border: '0px',
                borderRadius: '10px',
                boxShadow: 'rgba(0, 0, 0, 0.06) 24px 24px 64px 0',
            }}>
                <div className="circle   " style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: 'rgba(196, 196, 196, 1)',
                    borderRadius: '50%',
                    position: 'absolute',
                    top: '-35px',
                    left: '23px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                     <img src="Assets/Vector3.png" alt="" />
                </div>
              <div style={{ textAlign: 'start', marginTop: '90px', paddingLeft: '24px' }}>
                <h5 className='Font16and600'>Spicy Seafood </h5>
                <h5 className='Font16and600'>Noodles</h5>
                <div className='my-4'><span className='Font16and400 '> 10 Available</span><img className='mx-2 ' src="Assets/Frame 427319752.png" alt="" /></div>
                <h4 className='Font18and600'>
                    $644
                </h4>
                </div>
            </div>

        </>
    )
}

export default MenuCardfluid