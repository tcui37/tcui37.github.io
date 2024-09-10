import React from 'react';
import WeblabPhoto from '../imgs/weblab.jpg'
import Tent from '../imgs/tent.jpg'

const teachings = [
    {
        "title": 'Teaching Assistant',
        "organization": 'MIT 6.100A/B Introduction to Computer Science Programming',
        "date": 'Sep. 2024 - Present',
        "description": "I am currently a teaching assistant for MIT 6.100A/B Introduction to Computer Science. I hold weekly recitations, develope problem sets, create course notes, and hold office hours.",
    },
    {
        "title": 'Co-Academic Chair & Instructor',
        "organization": 'MIT 6.9620 Web Lab Web Programming Competition',
        "date": 'Jan 2023',
        "description": <>
            <p>
            I was the co-academic chair and one of the instructors for the <a href='https://weblab.mit.edu/'>MIT Web Lab Web Programming Competition </a> in January 2023. Our team of 13 taught over 300 students how to build and deploy a full-stack web application. My Co-Academic Chair (Abby) and I organized and structured half a semester's worth of academic material, coordinated 32 hours of lecture across 13 instructures, and set learning objectives for our class. I also developed (with Abby, Andy, and Andrew) lecture material for Vector Similarity Search, Retrieval Augmented Generation (RAG), ReactJs, the client server model, Promises, Asynchronous Javascript, and version control with Git.
            </p>
            <p>
                Our lecture material caught the attention of various institutions, and have been used at <a href="https://langara.ca/programs-and-courses/courses/CPSC/2650.html" > Langara College's CPSC 2650</a>, Canada and <a href="https://www.itb.ac.id/"> Institut Teknologi Bandung (ITB)</a>, Indonesia
            </p>
            </>,
        "img": WeblabPhoto,
        "link": "https://weblab.mit.edu/",
        "rating": "7.0/7.0 median"
    },
    {
        "title": "Instructor & Cirriculum Developer",
        "organization": "MIT Global Teaching Labs: Israel & Siraj Digital Tent",
        "date": "Jan 2022",
        "description": "Our team of 5 pioneered the first iteration of GTL Israel's Digital Tent program, a 4-week program that introduces a class of 20 high school sophomores across 7 villages in the Negev to computer science. We utilized the principle of backwards design to develope 4 weeks of computer science cirriculum, including python fundamentals, hardware and circuitry, and web development. We had developed lesson plans, test cases, homework assignments, and projects of varying difficulty from scratch, and had lots of fun teaching and mentoring the kids! ❤️ ",
        "img": Tent,
        "link": "https://misti.mit.edu/mit-israel",
    },
]

const workshops = [
    {
        "title": "Beginner Hack Workshop Co-Lead",
        "organization": "HackMIT 2024",
        "date": "Sep 2024",
        "description": "",
        "img": null,
    },
    {
        "title": "Beginner Hack Workshop Co-Lead",
        "organization": "HackMIT 2022",
        "date": "Sep 2022",
        "description": "Amanda and I lead the beginner hack workshop for HackMIT 2022, where we taught basic web development and version control.",
        "img": null,
        "link": "https://comet-bathroom-74b.notion.site/Beginner-Hack-ecbd1f393bba44428b4f7b0c47a39167",
    },
]


const Teachings: React.FC = () => {
    return (
        <div>
            <h1>Teaching</h1>
            <h2>Courses</h2>
            {teachings.map((teaching) => (
                <>
                    <h3>{teaching.organization}</h3>
                    <p>                    <i>{teaching.title}</i> |                    {teaching.date} | <a href={teaching.link}> link </a></p>
                    <p>{teaching.rating ? "Instructor Rating: " + teaching.rating + " on MIT Course Evaluations": ''}</p>
                    {teaching.img && <img src={teaching.img} className='img'></img>}
                    <p>{teaching.description}</p>
                </>
            ))}
            <h2>Workshops</h2>
            {workshops.map((workshop) => (
                <>
                    <h3>{workshop.organization}</h3>
                    <p>                    <i>{workshop.title}</i> |                    {workshop.date} | <a href={workshop.link}> link </a></p>
                    {/* <p>{workshop.rating ? "Instructor Rating: " + workshop.rating + " on MIT Course Evaluations": ''}</p> */}
                    {workshop.img && <img src={workshop.img} className='img'></img>}
                    <p>{workshop.description}</p>
                </>
            ))}
        </div>
    );
};

export default Teachings;