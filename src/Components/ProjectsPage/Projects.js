import Section from "./Section";
import React from "react";
import ProjectComponent from "./ProjectComponent";

export default function Projects() {
  return (
    <div className="bg-slate-200 grow px-4">
      <Section title={"Projects made with Tailwind and React.js"}>
        <ProjectComponent
          src={"/images/perfume.jpg"}
          to="https://card-component-fronten-mentor.netlify.app/"
          description={
            "Responsive card component taken as a challenge from FrontMentor.com"
          }
          github={`https://github.com/ceimiplace/FrontEndMentor-Card-component`}
        />
        <ProjectComponent
          src={"/images/UnsplashAPI.jpg"}
          to="https://search-img-unsplash.netlify.app/"
          description={
            "Application that fetches images from Unsplash API based on user input and renders the results in mosonry layout."
          }
          github={`https://github.com/ceimiplace/Search-app-Unsplash.com`}
        />
      </Section>
      <Section title={"Projects made with CSS and Vanilla JavaScript"}>
        <ProjectComponent
          src={"/images/randomJoke.jpg"}
          to="https://dadjokeys.netlify.app/"
          description={
            "Application that fetches random dad jokes either as text,image or by specific user input and renders them."
          }
          github={`https://github.com/ceimiplace/Dad-jokes-api`}
        />
      </Section>
    </div>
  );
}
