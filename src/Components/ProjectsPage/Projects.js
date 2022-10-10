import Section from "./Section";
import React from "react";
import ProjectComponent from "./ProjectComponent";

export default function Projects() {
  return (
    <div className="bg-slate-200 grow px-4">
      <Section title={"Projects made with Tailwind and React.js"}>
        <ProjectComponent
          src={"/images/perfume.jpg"}
          to="perfume"
          description={
            "Responsive card component taken as a challenge from FrontMentor.com"
          }
          github={`https://github.com/ceimiplace/FrontEndMentor-Card-component`}
        />
        <ProjectComponent
          src={"/images/UnsplashAPI.jpg"}
          to="UnsplashAPI"
          description={
            "Application that fetches images from Unsplash API based on user input and renders the results in mosonry layout."
          }
          github={`https://github.com/ceimiplace/FrontEndMentor-Card-component`}
          note={
            "On github the project is with class components,but on this website i refractored it with functional components"
          }
        />
      </Section>
      <Section
        title={"Projects made with CSS and Vanilla JavaScript"}
      ></Section>
    </div>
  );
}
