import React from 'react'
import PickMeals from '../assets/pick-meals-image.png'
import ChooseMeals from '../assets/choose-image.png'
import DeliveryMeals from '../assets/delivery-image.png'

const Work = () => {
    const workInfoData = [ //array of object with details 
        {
            image: PickMeals,
            title: "Pick Meals",
            text: "djvowdb w vwe vw vvw vwrvwrgytbgfn yn bwe gethy tndf brg n thnfd b"
        },
        {
            image: ChooseMeals,
            title: "Choose How Often",
            text: "djvowdb w vwe vw vvw vwrvwrgytbgfn yn bwe gethy tndf brg n thnfd b"
        },
        {
            image: DeliveryMeals,
            title: "Fast Deliveries",
            text: "djvowdb w vwe vw vvw vwrvwrgytbgfn yn bwe gethy tndf brg n thnfd b"
        },
    ]
    return (
        <div className='work-section-wrapper'>
            <div className='work-section-top'>
                <p className='primary-subheading'>Work</p>
                <h1 className='primary-subheading'>How it works</h1>
                <p className='primary-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>

            <div className='work-section-bottom'>
                {
                    workInfoData.map((data, i) => {
                        return (
                            <div className='work-section-info'>
                                <div className='info-boxes-img-container'>
                                    <img src={data.image} alt={`${data.title}-Image`} />
                                </div>
                                <h2>{data.title}</h2>
                                <p>{data.text}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Work 