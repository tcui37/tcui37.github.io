import React from 'react';

const projects = {
    "projects": [
        {
            "title": "Survey of Proximity Graph Algorithms for Efficient Approximate Nearest Neighbor Search",
            "date": "May 2024",
            "context": "Geometric Computing Final Project",
            "description": "Scalable algorithms for k-approximate nearest neighbor search (k-ANNS) have been a fundamental problem across countless applications from recommendation systems to pattern recognition and computer vision. Building high-performing and scalable ANNS data structures has been proven challenging across domains that demand millions of data points over hundreds of dimensions. In recent years, proximity graphs have been the dominant state-of-the-art technique for the k-ANNS problem, surpassing even locality-sensitive hashing and tree structures. This paper serves as a survey that overviews the development, advantages, and performance of state-of-the-art Proximity Graph algorithms in the last decade, such as HNSW, NSG, and Vamana from DiskANN, as well as recent strides in improving the size and query time indices.",
            "link": "https://www.dropbox.com/scl/fi/i6i4kmgs9v1ie1acqrq3o/Survey_of_Graph_Algorithms_for_Approximate_Nearest_Neighbors_Search.pdf?rlkey=3vozo1ph4aorgr76sg8x1mc9c&st=j360wl9h&dl=0"
        },
        {
            "title": "Using a Synthetic Intermediary for Handwritten Mathematical Expression Recognition",
            "date": "May 2023",
            "context": "Computer Vision Final Project",
            "description": "Deep learning techniques have been proven incredibly effective in sequential natural language processing tasks. However, due to the nested nature of handwritten mathematical expressions, the challenge of Handwritten Mathematical Expression Recognition (HMER) has been an open problem. Advancements in the field to approach this challenge have led to new applications of transformer models, as well as the re-introduction of grammar trees. We propose a new approach involving an intermediary step of deterministically creating a well-structured image, which may show promise in improving state-of-the-art solutions.",
            "link": "https://www.dropbox.com/scl/fi/6str289z2iklcv90rdk0q/Using_a_Synthetic_Intermediary_for_Handwritten_Mathematical_Expression_Recognition.pdf?rlkey=kcqhxol2rv0hqhzi4dl71t6sw&st=25fqle5l&dl=0"
        },
        {
            "title": "Using Multitask Learning to Generate Poetry",
            "date": "Dec 2022",
            "context": "Natural Language Processing Final Project ",
            "description": "Poetry generation is an active area of research in Natural Language Processing due to the challenge of generating poetry with accurate structure and compelling content. Many previous works produce models that experience trade-offs between structure and content or rely on human input during generation. To build upon these works, we fine-tune GPT-2 and additionally incorporate phonetic and text information to better capture rhyme and meter through a process called multitask training. We evaluate this model by comparing its performance in rhyme, meter, and human readability to a plain text model, a purely phonetic model, and state-of-the-art models in sonnet generation. Our results show that multitask training has the capability to simultaneously increase both form and content scores without relying on human input.",
            "link": "https://www.dropbox.com/scl/fi/91mezo1xqgum83mdnej76/Using_Multitask_Learning_to_Generate_Realistic_Poetry.pdf?rlkey=5lqi2p73otfj2ut2kv75s97wt&st=gdxj47t2&dl=0"
        },
        {
            "title": "Campfire",
            "date": "Jan 2021",
            "context": "MIT Web Programming Competition",
            "description": "Campfire is a live-updating interactive multiplayer game that allows users to create and join game rooms to create a real-time story. Users can take turns adding to the story, and the game will automatically update for all users in the room. The game was built using React.js, Node.js, Express, and Socket.io. for the MIT Web Programming Competition, winning Staff Favorite in 2021.",
            "link": null,
        },

        {
            "title": "Covid Text Update",
            "date": "Mar 2020",
            "context": "LA Hacks 2020",
            "description": "Twilio Covid Text update is an interactive web application built on Flask to retrieve live data on the COVID-19 outbreak, then uses Twilio API to send text updates of coronavirus cases by state directly to user mobile devices.",
            "link": null
        },
    ]

}
const MyComponent: React.FC = () => {
    return (
        <div>
            <h1>Projects</h1>
            {projects.projects.map((project) => (
                <>
                    <h3>{project.title}</h3>
                    <p>                    <i>{project.context}</i> |                    {project.date} {project.link && <a href={project.link}>| Link</a>}</p>
                    <p>{project.description}</p>
                    
                </>
            ))}
        </div>
    );
};

export default MyComponent;