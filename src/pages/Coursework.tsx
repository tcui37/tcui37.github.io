import React from 'react';

// const coursework = {
//     'Spring 2024': [
//         '6.8200 - Sensorimotor Learning (G)',
//         '6.5320 - Gepmetric Computing (G)',
//         '6.UR - Undergraduate Research,'
//     ],
//     'Fall 2023': [
//         '6.5940 - TinyML and Efficient Deep Computing (G)',
//         '18.404 - Theory of Computation',
//         '11.129 - Education Theory & Practice I',
//     ],
//     'Spring 2023': [
//         '6.8300 - Advanced Topics in Computer Vision (G)',
//         '6.1800 - Computer Systems Engineering',
//         '21G.902 Chinese II (Streamlined)',
//         '21G.108 - Korean II',
//         ],
//     'Fall 2022': [
//         '6.8611 - Natural Language Processing',
//         '6.1200 - Mathematics for Computer Science',
//         '18.C06 - Linear Algebra & Optimization',
//         '18.600 - Probability and Random Variables',
//     ],
// }
const coursework = {
    'Machine Learning': [
        '6.7960: Deep Learning (G)',
        '6.8200 - Sensorimotor Learning (G)',
        '6.8300 - Advanced Topics in Computer Vision (G)',
        '6.5940 - TinyML and Efficient Deep Computing (G)',
        '6.8611 - Natural Language Processing',
    ],
    'Theoretical CS': [
        '18.408 - Algorithmic Toolkit (G)',
        '6.5320 - Geometric Computing (G)',
        '18.404 - Theory of Computation',
        '6.1220 - Design and Analysis of Algorithms'
    ],
    'Mathematics': [
        '18.C06 - Linear Algebra & Optimization',
        '18.600 - Probability and Random Variables',
        '6.1200 - Mathematics for Computer Science'
    ],
    'Computer Systems and Programming': [
        '6.1800 - Computer Systems Engineering',
        '6.031 - Elements of Software Construction',
        '6.148 - Web Lab: Web Development Course and Competition',
    ],
    'Education': [
        '11.129 - Education Theory & Practice I',
        '11.125 - Evalating Education',
        'CMS.590 - Games for Education',
    ],
    'For Funsies': [
        '21G.902 - Chinese II (Streamlined)',
        '21G.108 - Korean II',
        '21M.600 - Intro to Acting',
    ],
}


const Coursework: React.FC = () => {
    return (
        <div>
            <h1>Coursework</h1>
            {Object.entries(coursework).map(([category, courses]) => (
                <>
                    <h2>{category}</h2>
                    {courses.map((course) => (
                        <p>{course}</p>
                    ))}
                </>
            ))}
        </div>
    );
};

export default Coursework;