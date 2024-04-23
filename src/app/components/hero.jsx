'use client'
import React , { useState , useEffect } from 'react'
import { motion } from 'framer-motion'
import LeftSide from './left'
import RightSide from './right'

export default function Hero() {
  return (
    <motion.main initial = {{opacity : 0}} animate = {{opacity : 1}} transition={{ duration : 3}}  className = 'md:flex md:justify-between relative'>
        <motion.div className = 'py-8 md:py-20'>
            <LeftSide/>
        </motion.div>
        <motion.div initial = {{ y:20 }} animate = {{ y:0 }} transition = {{ delay : 1.5 , duration : 1}}  className='py-8 md:py-20'>
            <RightSide/>     
        </motion.div>
    </motion.main>
  )
}