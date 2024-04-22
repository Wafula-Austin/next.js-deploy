'use client'
import React , {useState , useEffect} from 'react'
import {motion} from 'framer-motion'
import About from './about'
import Experiences from './experiences'
import Projects from './projects'

export default function RightSide(){ 
    return(
        <motion.div initial = {{ y:20 }} animate = {{ y:4 }} transition = {{ delay : 1.5 , duration : 1}} className = 'scrollbar-hide my-4 md:my-0 overflow-y-scroll overflow-x-scroll flex flex-col justify-start md:items-center'>
            <About/>
            <Experiences/>
            <Projects/>
        </motion.div>
    )
}