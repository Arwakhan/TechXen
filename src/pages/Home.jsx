import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import About from '../components/About'
import Services from '../components/Services'
import Solution from '../components/Solution'
import Project from '../components/Project'
import Pricing from '../components/Pricing'
import Testimonals from '../components/Testimonals'
import Blogs from '../components/Blogs'
import Innovation from '../components/Innovation'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Stats/>
        <About/>
        <Services/>
        <Solution/>
        <Project/>
        <Pricing/>
        <Testimonals/>
        <Blogs/>
        <Innovation/>
        <Footer/>
    </div>
  )
}

export default Home