'use client'
import React , {useState , useEffect} from 'react'
import { motion } from 'framer-motion'

export default function AllProjects(){
    return(
        <motion.main className = 'w-full h-screen bg-teal-400' initial = {{x : -50 , opacity : 0}} animate = {{x : 0 , opacity : 1}} transition = {{ delay : 0.1 , duration : 0.4}}>Projects</motion.main>
    )
}