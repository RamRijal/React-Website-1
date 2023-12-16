import React from 'react'
import Navbar from './navbar.js'
import BannerBg from '../assets/home-banner-bg.png' //Background image 
import BannerImage from '../assets/home-banner-image.png' //Image used above background as content
import { FiArrowRight } from 'react-icons/fi' //React icons library already installed

const Home = () => {
  return (
    <div>
      <div className='home-container'>
        <Navbar />
        <div className='home-banner-container'>
          <div className='home-bannerImage-container'>
            <img src={BannerBg} alt="" />
          </div>

          <div className='home-text-section'>
            <h1 className='primary-heading'>
              Welcome to the world of
              <span style={{ color: '#FE9E0D' }}> Innovaton </span
              >and
              <span style={{ color: '#FE9E0D' }}> Coding! </span>
            </h1>
            <p className='primary-text'>
              Discover the power of technology and its ability to transform ideas into reality. Explore my website for insightful articles, resources, and exciting projects.
            </p>
            <button className='secondary-button'>
              Explore Now<FiArrowRight />
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home