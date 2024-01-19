import React from 'react'


// const feedbackData = [
//     {
//       orderNumber: '001',
//       feedbackTitle: 'Feedback Title 1',
//       feedbackImage: 'Assets/Frame 427319752.png',
//       feedbackText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     },
//     {
//       orderNumber: '002',
//       feedbackTitle: 'Feedback Title 2',
//       feedbackImage: 'Assets/Frame 427319752.png',
//       feedbackText: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//     },
//     // Add more feedback items as needed
//   ];
  function FeedBkCard({ orderNumber, feedbackTitle, feedbackImage,feedbackImage1, feedbackText }) {
    return (
      <div className="container pt-5">
        <div className="card rounded-4" style={{ position: "relative", borderRadius: "20px" }}>
          <div className="circle" style={{
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
            <img src={feedbackImage} alt="" />
          </div>
  
          <div className="d-flex justify-content-between align-items-center" style={{ backgroundColor: "transparent" }}>
            <div />
            <h5 className="mt-2 mx-4">{`Order No. ${orderNumber}`}</h5>
          </div>
  
          <div className="card-body">
            <div className="row mt-4">
              <div className="col-md-6">
                <div className="d-flex justify-content-start">
                  <div className='Font18and600'>{feedbackTitle}</div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex justify-content-end">
                  <img src={feedbackImage1} alt="" />
                </div>
              </div>
            </div>
            <p className='text-start'>
              {feedbackText}
            </p>
          </div>
        </div>
      </div>
    );
  }

export default FeedBkCard