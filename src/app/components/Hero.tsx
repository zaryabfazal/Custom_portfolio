import React from 'react'
import Navbar from './Navbar'
import'../styles/hero.css';
const Hero = () => {
  return (
    <div id="hero" className='hero-container'
    style={{backgroundSize:"20%", backgroundPosition:"left 100px top 100px" }}
    >
      <Navbar />
      <div className='hero-content'>
        <div className='hidden lg:block'></div>
       
          <div className='hero-text'>
            <div className='hero-main'>
            <p data-aos="zoom-in-up">I&apos;m</p>
            <p  data-aos="zoom-in-up">Zaryab</p>
            <p  data-aos="zoom-in-up">Fazal Hussain</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
