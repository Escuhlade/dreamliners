import React from 'react'
import Navbar from '../components/Navbar'
import FooterComp from '../components/FooterComp'

const About = () => {
  return (
    <>
      <Navbar />
      <div className='flex flex-col pt-28 pr-24 pl-24 text-white gap-10'>
        <p>
          Welcome to Dreamliners, where we specialize in giving your vehicle the star treatment with our custom starlight headliners, reminiscent of the luxurious Rolls Royce style. Our mission is to transform your daily drives into extraordinary experiences.
        </p><p>
          At Dreamliners, we take pride in our craftsmanship and attention to detail. Our team of dedicated artisans is passionate about creating unique starlight headliners that reflect your individual style. We understand that your vehicle is more than just transportation; it's an expression of your personality, and we're here to make it shine.
        </p><p>
          What sets Dreamliners apart is our commitment to a personalized touch in every project.
        </p><p>
          From strategically placing each fiber optic strand to crafting a design tailored to your preferences, we ensure that your Dreamliner stands out in the most elegant way possible.
        </p><p>
          Whether you're looking for a touch of sophistication or a customized constellation that holds sentimental value, Dreamliners is dedicated to making your automotive dreams a reality. Our commitment to excellence extends throughout the entire process, ensuring transparency, smooth collaboration, and a final product that exceeds expectations.
        </p><p>
          Dreamliners invites you to experience the allure of the night sky on every drive. Let us bring that celestial magic into your vehicle, creating a driving experience that is both extraordinary and uniquely yours. Welcome to Dreamliners – where we turn your automotive dreams into a starlit reality.
        </p>
      </div>
      <FooterComp />
    </>
  )
}

export default About
