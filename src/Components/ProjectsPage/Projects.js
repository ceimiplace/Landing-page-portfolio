import Section from "./Section";
import React from "react";
import ProjectComponent from "./ProjectComponent";

export default function Projects() {
  return (
    <div className="bg-slate-200 grow">
      <Section title={"Projects made with Tailwind and React.js"}>
        <ProjectComponent
          src={"/perfume.jpg"}
          to="/"
          description={
            "Responsive card component taken as a challenge from FrontMentor.com"
          }
          github={`https://github.com/ceimiplace/FrontEndMentor-Card-component`}
        />
      </Section>
      <Section
        title={"Projects made with CSS and Vanilla JavaScript"}
      ></Section>
    </div>
  );
}
