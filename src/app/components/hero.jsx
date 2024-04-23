'use client'
import React , { useState , useEffect } from 'react'
import { motion } from 'framer-motion'
import LeftSide from './left'
import RightSide from './right'

export default function Hero() {

    const [ showNav , setShowNav ] = useState(false)
    const [ showProject , setShowProject ] = useState(false)
    const [ showXp , setShowXp ] = useState(false)

    const handleNavScroll = ()=>{
        if(window.scrollY > 606){
            setShowNav(true)
        }
        else if(window.scrollY >606 && window.scrollY <= 997){
            setShowXp(true)
        }
        else if(window.scrollY >1312 && window.scrollY <= 1774){
            setShowXp(false)
            setShowProject(true)
        }
        else if(window.scrollY < 606){
            setShowNav(false)
            setShowXp(false)
            setShowProject(true)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll' , handleNavScroll)

        return ()=>{
            window.addEventListener('scroll' , handleNavScroll)
        }
    })

    const NavBar = ()=>(
        <div className = 'fixed w-full md:hidden h-[70px] bg-zinc-700/40 backdrop-blur-sm flex flex-col justify-center px-4'>
           {showProject == true && <h1 className = 'font-semibold text-[14px] text-slate-300'>PROJECTS</h1>}
           {showXp == true && <h1 className = 'font-semibold text-[14px] text-slate-300'>EXPERIENCES</h1>}
        </div>
    )
  return (
    <motion.main initial = {{opacity : 0}} animate = {{opacity : 1}} transition={{ duration : 3}}  className = 'md:flex md:justify-between relative'>
        { showNav && <NavBar/>}
        <motion.div className = 'py-8 md:py-20'>
            <LeftSide/>
        </motion.div>
        <motion.div initial = {{ y:20 }} animate = {{ y:0 }} transition = {{ delay : 1.5 , duration : 1}}  className='py-8 md:py-20'>
            <RightSide/>     
        </motion.div>
    </motion.main>
  )
}