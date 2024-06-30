import React from 'react';

const experiences = {
    "work": [
        {
            "title": "Software Engineer",
            "company": "Cadence Design Systems",
            "date": "May 2024-Present",
            "description": "I am a software engineering intern at Cadence Design Systems."
        },
        {
            "title": "Research Assistant",
            "company": "MIT Computational Design & Fabrication",
            "date": "February 2023-Present",
            "description": "I conducted research at the MIT Computational Design & Fabrication group, working on reinforcement learning methods for black box optimization."
        },
        {
            "title": "Software Engineer",
            "company": "Microsoft Cloud & AI",
            "date": "May 2023-August 2023",
            "description": "I was a software engineering intern at Microsoft."
        },
        {
            "title": "Software Engineer",
            "company": "Microsoft E & D",
            "date": "May 2022-August 2022",
            "description": "I was a software engineering intern at Microsoft."
        },
        {
            "title": "Research Assistant",
            "company": "MIT Game Lab",
            "date": "January 2021- Feburary 2021",
            "description": "I worked on learning simulations for kids."
        },
    ],
    "education": [
        {
            "degree": "B.S. Computer Science",
            "school": "Massachusetts Institute of Technology",
            "date": "2020-2024"
        },
        {
            "degree": "M.Eng Computer Science",
            "school": "Massachusetts Institute of Technology",
            "date": "2024-Present"
        }
    ]
}
const Resume: React.FC = () => {
    return (
        <div>
            <h1>Resume</h1>
            <h2>Education</h2>
                {experiences.education.map((education) => (
                    <>
                        <h3>{education.school}</h3>
                        <i>{education.degree}</i>
                        <p>{education.date}</p>
                    </>
                ))}
            <h2>Experience</h2>
                {experiences.work.map((work) => (
                    <>
                        <h3>{work.company}</h3>
                        <i>{work.title}</i>
                        <p>{work.date}</p>
                        <p>{work.description}</p>
                    </>
                ))}

                <h2>Projects & Teachings </h2>
                See on the following pages.
                <br></br>
                <br></br>
        </div>
    ); 
};

export default Resume;