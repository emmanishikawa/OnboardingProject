import React from "react";

type Experience = {
    company: string,
    title: string,
    location: string,
    start_date: Date,
    end_date?: Date,
    description: string
};

type ExperienceProps = {
    experience: Experience;
};

export default function ExperienceComponent({ experience } : ExperienceProps) {

    return (
        <>
            <div className='mb-8'>
                <p>
                    <span className='font-bold'>{experience.company}</span>,&nbsp;
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
        </>
    )
}