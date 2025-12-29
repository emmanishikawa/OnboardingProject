import React from "react";

type Project = {
    project_name: string,
    start_date: Date,
    end_date: Date,
    description: string,
    deployment_link: string,
    github_link: string
};

type ProjectProps = {
    project: Project;
};

export default function ProjectComponent({ project } : ProjectProps) {

    return (
        <>
            <div className='mb-8'>
                <p>
                    <span className='font-bold'>{project.project_name}</span>
                </p>
                <p>
                    {project.start_date.toISOString().split('T', 1)}
                    &nbsp;&mdash;&nbsp;
                    {(project.end_date != null) ? 
                        (project.end_date.toISOString().split('T', 1)) :
                        "Present"}
                </p>

                <p>{project.description}</p>

                <a href={project.deployment_link} 
                    className='text-[#5cad50] hover:bg-[#adbaab]/50'>deploy</a>
                    &ensp;|&ensp;
                <a href={project.github_link}
                    className='text-[#5cad50] hover:bg-[#adbaab]/50'>github</a>
            </div>
        </>
    )
}