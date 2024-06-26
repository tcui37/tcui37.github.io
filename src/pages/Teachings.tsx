import React from 'react';
import WeblabPhoto from '../imgs/weblab.jpg'
import Tent from '../imgs/tent.jpg'

const teachings = [
    {
        "title": 'Co-Academic Chair & Instructor',
        "organization": 'MIT Web Lab Web Programming Competition',
        "date": 'Jan 2023',
        "description": <p>I was the co-academic chair and one of the instructors for the <a href='https://weblab.mit.edu/'>MIT Web Lab Web Programming Competition </a> in January 2023. Our team of 13 taught over 300 students how to build and deploy a full-stack web application. My Co-Academic Chair (Abby) and I organized and structured half a semester's worth of academic material, coordinated 32 hours of lecture across 13 instructures, and set learning objectives for our class. I also developed (with Abby, Andy, and Andrew) lecture material for Vector Similarity Search, Retrieval Augmented Generation (RAG), ReactJs, the client server model, Promises, Asynchronous Javascript, and version control with Git.</p>,
        "img": WeblabPhoto,
        "link": "https://weblab.mit.edu/"
    },
    {
        "title": "Instructor & Cirriculum Developer",
        "organization": "MIT Global Teaching Labs: Israel & Siraj Digital Tent",
        "date": "Jan 2022",
        "description": "Our team of 5 pioneered the first iteration of GTL Israel's Digital Tent program, a 4-week program that introduces a class of 20 high school sophomores across 7 villages in the Negev to computer science. We utilized the principle of backwards design to develope 4 weeks of computer science cirriculum, including python fundamentals, hardware and circuitry, and web development. We had developed lesson plans, test cases, homework assignments, and projects of varying difficulty from scratch, and had lots of fun teaching and mentoring the kids! ❤️ ",
        "img": Tent,
        "link": "https://misti.mit.edu/mit-israel",
    },
    {
        "title": "Beginner Hack Workshop Co-Lead",
        "organization": "HackMIT 2022",
        "date": "Sep 2022",
        "description": "Amanda and I lead the beginner hack workshop for HackMIT 2022, where we taught basic web development and version control.",
        "img": null,
        "link": "https://comet-bathroom-74b.notion.site/Beginner-Hack-ecbd1f393bba44428b4f7b0c47a39167",
    },
    // {
    //     "title": 'Teaching Assistant',
    //     "organization": 'MIT 6.100A/B Introduction Introduction to Computational Thinking and Data Science',
    //     "date": 'September 2024 - Present',
    //     "description": "I will be teaching assistant for MIT 6.100A/B Introduction to Computational Thinking and Data Science"
    // },
]


const Teachings: React.FC = () => {
    return (
        <div>
            <h1>Teaching</h1>
            {teachings.map((teaching) => (
                <>
                    <h3>{teaching.organization}</h3>
                    <p>                    <i>{teaching.title}</i> |                    {teaching.date} | <a href={teaching.link}> link </a></p>
                    {teaching.img && <img src={teaching.img} className='img'></img>}
                    <p>{teaching.description}</p>
                    
                </>
            ))}
        </div>
    );
};

export default Teachings;