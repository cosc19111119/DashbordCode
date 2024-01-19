import React from 'react'

const SocialMediaCard1 = ({
    title,
    iconLink,
    percentage,
    value,
    graphLink
}) => {
    return (
        <div className="card cartborder111 padings "  >
            <div className="card-body  ">
                <div className=' dashbdCard'>
                    <div>
                        <div className='Cardcircl222'>
                            <img src={iconLink} alt="" />
                        </div>
                        <p className='carttext'>{title}</p>
                        <p className='cartprice'>{value}</p>

                    </div>
                    <div className='graph2222'>
                        <img src={graphLink} alt="" />
                    </div>

                </div>
                <div className='carttextdec carttext'> <span>{percentage}%</span> <span>vs. previous month</span></div>

            </div>
        </div>
    )
}

export default SocialMediaCard1