import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import HeroSlider from '../components/HeroSlider/HeroSlider'
import Ideas from '../components/Ideas/Ideas'
import MessageBox from '../components/MessageBox/MessageBox'
import Services from '../components/Servic/Services'
import Testimonials from '../components/Testimonials/Testimonials'
import WebSticker from '../components/WebSticker/WebSticker'

const Home = () => {
  return (
    <>
     <Header/> 
     <HeroSlider/>
     <MessageBox/>
     <WebSticker/>
     <Ideas/>
     <Services/>
     <Testimonials/>
     <Footer/>
    </>
  )
}

export default Home
