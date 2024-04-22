'use client'
import React , { useState } from 'react'
import Image from 'next/image'
import calc from '../images/calc.png'
import nclone from '../images/netflix.png'
import tmanager from '../images/tasks.png'
import weatherdash from '../images/weatherdash.png'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Projects() {

  const projects = [
    {
      id: 1,
      title : 'JavaScript Calculator.',
      description : 'A modern calculator built with Next.js and JavaScript for the logic.',
      image : calc,
      tech_used : ['Next.js','React Icons']
    },
    {
      id: 2,
      title : 'Netflix Clone.',
      description : 'A copy of the famous movies and TV streaming platform.',
      image : nclone,
      tech_used : ['Next.js','React Icons','TMDB API','Firebase']
    },
    {
      id: 3,
      title : 'Task Manager.',
      description : 'A todo-list application , built with Next.js and Tailwind CSS , that uses Firebase to manage users and their tasks.',
      image : tmanager,
      tech_used : ['Next.js','React Icons','Firebase']
    },
    {
      id: 4,
      title : 'Weather Dashboard.',
      description : 'A weather dashboard that uses an API to retrieve realtime weather data for a particular location.',
      image : weatherdash,
      tech_used : ['Next.js','React Icons','Open Weather API']
    }
  ]
  return (
    <div className = 'flex flex-col justify-start gap-y-2 md:gap-y-4'>
      {
        projects.map(
          (project)=>(
            <div key = {project.id} className = 'md:flex group md:gap-x-4 p-3 md:px-8 md:py-5 hover:bg-zinc-600/30 rounded-xl cursor-pointer hover:shadow-md shadow-zinc-300 overflow-scroll scrollbar-hide' key = {project.id}>
              <div className = 'my-2 md:my-0 w-[170px] h-[100px] relative border border-zinc-700 group-hover:border-slate-200 rounded-xl'>
                <Image src = {project.image} alt = '' fill objectFit = 'contain'/>
              </div>

              <div className = 'flex flex-col my-2 md:my-0 gap-y-2 md:gap-y-3'>
                <h1 className = 'text-slate-200 font-semibold text-lg group-hover:text-teal-300'>{project.title}</h1>
                <p className = 'w-[500px] text-slate-500'>{project.description}</p>
                <div className = 'flex items-center gap-x-3'>
                  {project.tech_used.map((tech)=>(<p key = {tech} className = 'text-teal-200 border-b-2 border-teal-600 py-[2px]'>{tech}</p>))}
                </div>
              </div>

            </div>
          )
        )
      }
      <Link href = '/pages/projects' className = 'text-slate-200 font-semibold text-lg hover:ml-2 cursor-pointer hover:text-teal-300'>View Full Project Archive</Link>
    </div>
  )
}