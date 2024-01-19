import React from 'react';
import PosCardHeading from '../conponents/PosCard/PosCardHeading';
import FeedBackCard from '../conponents/FeedBack/FeedBackCard';
import FeedBkCard from '../conponents/FeedBack/FeedBkCard';


const feedbackData = [
    {
      orderNumber: '1',
      feedbackTitle: 'Feedback ',
      feedbackImage: 'Assets/Vector3.png',
      feedbackImage1: 'Assets/Frame 427319752.png',
      feedbackText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      orderNumber: '2',
      feedbackTitle: 'Feedback',
      feedbackImage: 'Assets/Vector3.png',
      feedbackImage1: 'Assets/Frame 427319752.png',
      feedbackText: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        orderNumber: '3',
        feedbackTitle: 'Feedback',
        feedbackImage: 'Assets/Vector3.png',
        feedbackImage1: 'Assets/Frame 427319752.png',
        feedbackText: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      
     
    // Add more feedback items as needed
  ];

function FeedBacks() {
  return (
  <>

<div className="container-fluid pdD " style={{backgroundColor:'rgba(255, 255, 255, 1)'}}>
   <div className="row pdD1 pdD2">
    <div className="col-12 menuPageHeading ">
        <div className='Font24and600'>Feedback</div>
    </div>
   </div>
   <div className="row">
   <div className="col-12 col-lg-8 ">
        <div className="row pdD1 pdD2">
            <div className="col-12 ">
            <PosCardHeading 
            Title1={"Reviews"}
            Title2={"Good Reviews"}
            Title3={"Bad Reviews"}
            Title4={"Suggestions"}
            className="paddingsfor1"
/>            
            </div>
        </div>
        {/* <div className="row ">
           <div className='col-12'>
         <FeedBkCard/>
            </div> 


          
        </div> */}
        <div className="row">
            <div className="col-12">
        {feedbackData.map((feedbackItem, index) => (
        <FeedBkCard
          key={index}
          orderNumber={feedbackItem.orderNumber}
          feedbackTitle={feedbackItem.feedbackTitle}
          feedbackImage={feedbackItem.feedbackImage}
          feedbackImage1={feedbackItem.feedbackImage1}
          feedbackText={feedbackItem.feedbackText}
        />
      ))}
      </div>
        </div>
       


    </div>
    <div className="container-fluid col-lg-4 mt-4 mt-lg-0 ">
        <FeedBackCard/>
    </div>
    
   </div>
   </div>

  </>
  )
}

export default FeedBacks