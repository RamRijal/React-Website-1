import React from 'react'
import AboutBg from '../assets/about-background.png'
import AboutBgImage from '../assets/about-background-image.png'
import { BsFillPlayCircleFill } from 'react-icons/bs'

const About = () => {
    return (
        <div className='about-section-container'>

            <div className='about-background-image container'>
                <img src={AboutBg} alt="" />
            </div>

            <div className='about-section-image-container'>
                <img src={AboutBgImage} alt='' />
            </div>

            <div className='about-section-text-container'>
                <p className='primary-subheading'>About</p>
                <h1 className='primary-heading'>
                    Explore my website for insightful articles, resources, and exciting projects.
                </h1>
                <p className='primary-text'>
                    Explore my website for insightful articles, resources, and exciting projects.Explore my website for insightful articles, resources, and exciting projects.
                </p>
                <p className='primary-text'>
                    Explore my website for insightful articles, resources, and exciting projects.
                </p>
                <div className='about-buttons-container'>
                    <button className='secondary-button'>
                        Learn more
                    </button>
                    <button className=''>
                        <BsFillPlayCircleFill/>
                        Watch video
                    </button>
                    
                </div>
            </div>
        </div>
    )
}

export default About