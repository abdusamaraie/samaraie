// create a project context to store project details, name, description, image, link, etc.

import { createContext } from "react";

// initiale state
const initialState = {
  projects: [
    {
      id: 1,
      name: "Cacher",
      describtion: "University at Buffalo - CSE 442 Chat App",
      paragraph_1_title: "EXPERIENCE HIGHLIGHT",
      paragraph_1_content:
        "During my last semester at UB, I spearheaded the development of an innovative iOS application designed to facilitate seamless communication among students within a specific GPS location on campus. This project not only showcased my technical prowess but also demonstrated a keen understanding of user-centric solutions.",
      paragraph_2_title: "TECHNICAL IMPLEMENTATION",
      paragraph_2_content:
        "To bring this vision to life, I implemented robust Back-end REST APIs using Flask, ensuring a smooth and efficient communication infrastructure. The integration of the Google Map API was a pivotal aspect, enabling precise GPS location sharing within the app.",
      paragraph_3_title: "SOFTWARE ENGINEERING ",
      paragraph_3_content:
        "Adhering to best practices, I applied essential Software Engineering concepts throughout the development process. Embracing Agile Development methodologies, we maintained an adaptive and iterative approach, fostering rapid and responsive project evolution. Version Control played a crucial role, ensuring seamless collaboration and project integrity. Rigorous Unit Testing was employed to guarantee the reliability and functionality of our application, reflecting a commitment to delivering a high-quality product. This experience not only sharpened my technical skills but also honed my ability to translate conceptual ideas into tangible, user-friendly solutions. Through this project, I demonstrated a holistic grasp of software development, combining technical acumen with a user-centered approach.",

      image: require("../assets/images/Project1.png"),
      overlyStyle: "cacher-overlay",
      link: "/projects/1",
    },
    {
      id: 2,
      name: "AlCaptain",
      describtion: "Fitness App Marketplace",
      image: require("../assets/images/Project2.png"),
      overlyStyle: "alcaptain-overlay",
      link: "/projects/2",
    },
    {
      id: 3,
      name: "InstaCart",
      describtion: "Data Science Project, Instacart Market Basket Analysis",
      image: require("../assets/images/Project3.png"),
      overlyStyle: "instacart-overlay",
      link: "/projects/3",
    },
  ],
};

// create project context

export const ProjectContext = createContext(initialState);
