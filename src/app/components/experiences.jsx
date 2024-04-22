'use client'
import React from 'react'
import { MdArrowOutward } from "react-icons/md"

export default function Experiences() {

    const experiences = [
        {
            id : 1,
            start_date : 'APRIL 2021',
            end_date : 'AUGUST 2021',
            title : 'Web Developer Intern',
            location : 'Tech Solutions Ltd., Nairobi, Kenya Nairobi',
            description : ['Designed and developed user interfaces using HTML5, CSS3, and JavaScript','Implemented responsive design principles for cross-browser compatibility','Collaborated with back-end developers to integrate front-end components.','Assisted in the deployment and maintenance of web applications on various hosting platforms.'],
            tech_used : ['JavaScript','HTML','CSS']
        },
        {
            id : 2,
            start_date : 'APRIL 2023',
            end_date : 'AUGUST 2023',
            title : 'Front-End Developer Intern',
            location : 'Web Teck Ltd., Nairobi, Kenya Nairobi',
            description : ['Designed and developed user interfaces using HTML5, CSS3, and JavaScript','Implemented responsive design principles for cross-browser compatibility','Collaborated with back-end developers to integrate front-end components.','Assisted in the deployment and maintenance of web applications on various hosting platforms.'],
            tech_used : ['JavaScript','Tailwind CSS','React.js','Node.js','Figma']
        }
    ]
  return (
    <div className = 'my-4 md:my-6 flex flex-col gap-y-3 md:gap-y-6 justify-start'>
        {
            experiences.map(
                (xp)=>{
                    return(
                        <div className = 'group justify-start gap-y-2 md:flex md:gap-x-4 mb-4 cursor-pointer hover:bg-zinc-600/20 p-4 rounded-xl ' key = {xp.id}>
                            <h1 className = 'font-semibold text-slate-600 text-md'>{xp.start_date} - {xp.end_date}</h1>
                            <div className = 'md:mx-2 flex flex-col gap-y-2'>
                                <h1 className = 'group-hover:text-teal-500 font-semibold text-md md:text-lg text-slate-200'>{xp.title}.</h1>
                                <ul className = 'text-slate-500 font-semibold flex flex-col gap-y-1 w-[500px] text-md'>{xp.description.map((des)=>(<li className='group-hover:text-slate-400 text-sm'>{des}</li>))}</ul>
                                <div className = 'flex items-center gap-x-1 md:gap-x-2'>{xp.tech_used.map((tu)=>(<h1 className = 'text-teal-400 px-2 py-1 rounded-2xl text-center bg-teal-900/40 font-semibold text-sm subpixel-antialiased'>{tu}</h1>))}</div>
                            </div>
                        </div>
                    )
                }
            )
        } 
        <h1 className = 'font-semibold text-md md:text-lg text-zinc-300 cursor-pointer hover:ml-4 transition-all hover:text-teal-300 flex items-center gap-x-1'>View Full Resume <MdArrowOutward/></h1>
    </div>
  )
}