'use client'

import ExperienceComponent from "@/components/Experience/experiences_component"

export default function Experiences() {
    return (
        <>
            <div className='flex flex-col h-screen w-screen justify-center items-center mt-32'>
                <div className='flex flex-col
                                h-full w-full md:w-[800px] 
                                p-5 md: md:rounded-md'>
                <ExperienceComponent />  
                </div>
            </div>
        </>
    )
}