import { useEffect, useState } from 'react';
import ExperienceComponent from './experience_component';

type Experience = {
        _id: string,
        company: string,
        title: string,
        location: string,
        start_date: Date,
        end_date?: Date,
        description: string
    };

export default function ExperiencesComponent() {

    const [experiences, setExperiences] = useState<Experience[]>([]);

    useEffect(() => {
        const fetchExperiences = async () => {
            try {
                const response = await fetch('/api/experience');
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }
                const result: Experience[] = await response.json();
           
                const parsed = result.map((result: any) => ({
                    ...result,
                    start_date: new Date(result.start_date),
                    end_date: result.end_date ? new Date(result.end_date) : null
                }));

                setExperiences(parsed);
                
            } catch (error) {
                console.error("error");
            } 
        };

        fetchExperiences();
    }, []);
    
    return (
        <div>
            {experiences.map(experience => (
                    <ExperienceComponent key={experience._id} experience={experience} />
            ))}
        </div>
    )

}