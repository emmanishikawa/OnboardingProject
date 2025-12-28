import { useEffect, useState } from 'react';

type Experience = {
        company: String,
        title: String,
        location: String,
        start_date: Date,
        end_date?: Date,
        description: String
    };

export default function ExperienceComponent() {

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
        <>
            {experiences.map((experience, index) => (
                <div key={index}>
                    <p>
                        {experience.company},&nbsp;
                        {experience.location}
                    </p>
                    <p>{experience.title}</p>
                    <p>
                    {experience.start_date.toISOString().split('T', 1)}
                    &nbsp;&mdash;&nbsp;
                    {(experience.end_date != null) ? 
                        (experience.end_date.toISOString().split('T', 1)) :
                        "Present"}
                    </p>
                    <p>{experience.description}</p>
                    
                </div>
            ))}
        </>
    )

}