'use client'

import ProjectsComponent from "@/components/Project/projects_component"

export default function Projects() {
    return (
        <>
            <div className='flex flex-col h-screen w-screen justify-center items-center mt-32'>
                <div className='flex flex-col
                                h-full w-full md:w-[800px] 
                                p-5 md: md:rounded-md'>
                    <ProjectsComponent />  
                </div>
            </div>
        </>
    )
}