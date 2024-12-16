import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa"
import { About } from './About'
import { HeroSection } from '../components/UI/HeroSection'

export const Home = () => {
  return (
    <main>
      <HeroSection />
      <div>
        <About />
      </div>
    </main>
  )
}
