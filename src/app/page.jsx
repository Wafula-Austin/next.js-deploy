'use client'
import { useState , useEffect} from 'react'
import { motion } from 'framer-motion'
import Hero from './components/hero'

export default function MainPage(){

  const [ showSide , setShowSide] = useState(true)
  const [ showTop , setShowTop ] = useState(true)
  const [ colorChange , setColor ] = useState(false)
  const [ shifter , setShifter ] = useState(true)
  
  return(
    <motion.main className = 'w-full bg-gradient-to-b from-[#12203F] to-[#0E182F]'>
      <Hero/>
    </motion.main>
  )
}