import { useEffect, useState } from 'react';
import ProjectComponent from './project_component';

type Project = {
        _id: string,
        project_name: string,
        start_date: Date,
        end_date: Date,
        description: string,
        deployment_link: string,
        github_link: string
    };

export default function ProjectsComponent() {

    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('/api/project');
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }
                const result: Project[] = await response.json();
           
                const parsed = result.map((result: any) => ({
                    ...result,
                    start_date: new Date(result.start_date),
                    end_date: result.end_date ? new Date(result.end_date) : null
                }));

                setProjects(parsed);
                
            } catch (error) {
                console.error("error");
            } 
        };

        fetchProjects();
    }, []);
    
    return (
        <div>
            {projects.map(project => (
                    <ProjectComponent key={project._id} project={project} />
            ))}
        </div>
    )

}