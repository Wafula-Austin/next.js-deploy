'use client'
import React , {useState , useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub , FaLinkedin , FaInstagram , FaFacebookSquare } from "react-icons/fa"
import { GoDash } from "react-icons/go"
import Link from 'next/link'

export default function LeftSide(){

    const [ aboutActive , setAboutActive ] = useState(true)
    const [ xpActive , setXpActive ] = useState(false)
    const [ projectsActive , setProjectsActive ] = useState(false)

    const checkScroll = ()=>{
        if(window.scrollY > 0 && window.scrollY <= 650){
            setAboutActive(true)
            setXpActive(false)
            setProjectsActive(false)
        }
        else if(window.scrollY >651 && window.scrollY <= 1414){
            setXpActive(true)
            setProjectsActive(false)
            setAboutActive(false)
        }
        else if(window.scrollY > 1414){
            setXpActive(false)
            setProjectsActive(true)
            setAboutActive(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll' , checkScroll)
        return()=>{
            window.addEventListener('scroll' , checkScroll)
        }
    })

    const LinkedInLink = ()=>(
        <div>
            <a href = 'https://linkedIn.com/in/austinwafula254' target="_blank" rel="noopener noreferrer">
                <FaLinkedin size = {25} className = {`text-slate-400 hover:text-slate-700 cursor-pointer`}/>
            </a>
        </div>
    )

    const GitHubLink = ()=>(
        <div>
            <a href = 'https://github.com/Wafula-Austin?tab=repositories' target="_blank" rel="noopener noreferrer">
                <FaGithub size = {25} className = {`text-slate-400 hover:text-slate-700 cursor-pointer`}/>
            </a>
        </div>
    )

    return(
        <motion.div initial = {{ x : 0}} animate = {{ x : 0}} transition = {{ delay : 1 , duration : 1}} className = 'flex-col justify-start md:fixed px-4 md:px-[70px]'>
            <div className = 'mb-8 md:mb-12'>
                <h1 className = 'text-slate-200 font-semibold text-4xl md:text-6xl mb-2 md:mb-4'>Austin Wafula.</h1>
                <h1 className = 'font-semibold text-md md:text-xl text-slate-200 mb-4 md:mb-6'>Frontend Developer</h1>
                <h1 className = 'text-lg font-semibold text-slate-400 md:max-w-[300px]'>I build pixel perfect , engaging and interactive user interfaces.</h1>
            </div>
            <div className = 'hidden lg:block md:mb-12'>
                <motion.h1 initial = {{x : 0}} animate = {{x : aboutActive ? 1 : 0}} transition={{duration : 2}} className = {`flex items-center font-semibold gap-x-2 hover:scale-120 cursor-pointer text-slate-700 ${aboutActive && `text-teal-500`}`}><GoDash size = {aboutActive ? 40 : 15}/> ABOUT</motion.h1>
                <motion.h1 initial = {{x : 0}} animate = {{x : xpActive && 1}} transition={{duration : 2}}  className = {`flex items-center font-semibold gap-x-2 hover:scale-120 cursor-pointer text-slate-700 ${xpActive && ` text-teal-500`}`}><GoDash size = {xpActive ? 40 : 15}/> EXPERIENCES</motion.h1>
                <motion.h1 initial = {{x : 0}} animate = {{x : projectsActive && 1}} transition={{duration : 2}}  className = {`flex items-center font-semibold gap-x-2 hover:scale-120 cursor-pointer text-slate-700 ${projectsActive && ` text-teal-500`}`}><GoDash size = {projectsActive ? 40 : 15}/> PROJECTS</motion.h1>
            </div>
            <div className = 'flex items-center gap-x-4 md:gap-x-6'>
                <LinkedInLink/>
                <GitHubLink />
            </div>    
        </motion.div>
    )
}