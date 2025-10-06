import React from "react";
import Title from "../layouts/Title";
import {
  texastream,
  flybirdie,
  movieland,
  ogavisa,
  pneumalife,
  prekem,
  theawards,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className=" justify-center m-auto py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="My Projects"
          des="A collection of work that showcases my passion for creating meaningful digital experiences"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="First Ever Tech Personality Award For Africans in Europe"
          des="A regonition platform celebrating African tech talents in Europe, featuring nomination systems and award ceremony"
          src={theawards}
          githubLink="https://github.com/Michealmata2003?tab=repositories"
          liveLink="https://mata-micheal-003.netlify.app"
        />
        <ProjectsCard
          title="Interactive Game System"
          des="  A web game built with engaging animations and interactive elements, perfect for holiday entertainment."
          src={flybirdie}
          githubLink="https://github.com/Michealmata2003"
          liveLink="https://www.flybirdie.io/"
        />
        <ProjectsCard
          title="Neflix--Style Streaming Platform"
          des=" A responsive streaming platform with user aunthentication, video playback, and personalised recommendations."
          src={texastream}
          githubLink="https://github.com/Michealmata2003/real-project-folder"
          liveLink="https://mata-project.netlify.app"
        />
        <ProjectsCard
          title="Visa Application Simplifier"
          des=" A streamlined application that simplifies the visa application process with step-by-step guidance and documentation managament"
          src={ogavisa}
          githubLink="https://github.com/Michealmata2003?tab=repositories"
          liveLink="https://ogavisa.co/visa-application"
        />
        <ProjectsCard
          title="Analytics Dashboard"
          des="A comprehensive data visualization dashboard with real-time metrics, interactive charts, and customizable reports"
          src={pneumalife}
          githubLink="https://github.com/Michealmata2003/pneuma-life-dashboard"
          liveLink="https://netlify-thinks-michealmata2003-is-great.netlify.app"
        />
        <ProjectsCard
          title=" Furniture Ecommerce Platform "
          des=" A modern furniture ecommerce platform where buyers can sign up, order furniture and interact with the seller."
          src={prekem}
          githubLink="https://github.com/Michealmata2003/E-comerce"
          liveLink="https://prekem.netlify.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
