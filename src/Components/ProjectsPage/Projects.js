import Section from "./Section";
import React from "react";
import ProjectComponent from "./ProjectComponent";

export default function Projects() {
  return (
    <div className=" grow px-4" id="projects">
      <Section title={"Projects made with Tailwind and React.js"}>
        <ProjectComponent
          src={"/images/ElearnPage.png"}
          to="https://elearn-page.netlify.app/"
          description={"Responsive mobile-first WebPage"}
          github={`https://github.com/ceimiplace/elearning-page`}
        />
        <ProjectComponent
          src={"/images/UnsplashAPI.jpg"}
          to="https://search-img-unsplash.netlify.app/"
          description={
            "Application that fetches images from Unsplash API based on user input and renders the results in mosonry layout."
          }
          github={`https://github.com/ceimiplace/Search-app-Unsplash.com`}
        />
        <ProjectComponent
          src={"/images/ROBOPOSTS.png"}
          to="https://blogs-posts.netlify.app/"
          description={
            "Single page application made with React.js,React Router v6 and Tailwind.Connected to the backend to Firebase ."
          }
          github={`https://github.com/ceimiplace/Blog-website`}
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

        <ProjectComponent
          src={"/images/CatchGame.png"}
          to="https://click-catch-game.netlify.app//"
          description={"A click-catch game with 3 speeds and 2 control buttons"}
          github={`https://github.com/ceimiplace/Dad-jokes-api`}
        />
        <ProjectComponent
          src={"/images/Clock.png"}
          to="https://analog-clock-css-js.netlify.app/"
          description={"Analog clock with added sounds effects."}
          github={`https://github.com/ceimiplace/clock`}
        />
        <ProjectComponent
          src={"/images/TodoList.png"}
          to="https://to-do-list-storage.netlify.app/"
          description={"To-Do list application with local storage"}
          github={`https://github.com/ceimiplace/Todo-list-with-Local-storage`}
        />
        <ProjectComponent
          src={"/images/FlexboxProj.png"}
          to="https://flexbox-project-page.netlify.app/"
          description={"Responsive Website Page"}
          github={`https://github.com/ceimiplace/website-proj-with-flexbox`}
        />
        <ProjectComponent
          src={"/images/Key-concert.png"}
          to="https://key-concert.netlify.app/"
          description={"Interactive Key Concert Webpage"}
          github={`https://github.com/ceimiplace/Drum-kit`}
        />
      </Section>
      <Section title={"Components"}>
        <ProjectComponent
          src={"/images/perfume.jpg"}
          to="https://card-component-fronten-mentor.netlify.app/"
          description={"Responsive card component made with <picture> tag"}
          github={`https://github.com/ceimiplace/FrontEndMentor-Card-component`}
        />
        <ProjectComponent
          src={"/images/SplitscreenFlexbox.png"}
          to="https://split-screen-proj.netlify.app/"
          description={"Split screen presentation"}
          github={`https://github.com/ceimiplace/Split-page-proj`}
        />
        <ProjectComponent
          src={"/images/expanding-cards.png"}
          to="https://expands-cards.netlify.app/"
          description={"Expanding cards"}
          github={`https://github.com/ceimiplace/Expanding-Cards`}
        />
        <ProjectComponent
          src={"/images/Form-signup.png"}
          to="https://form-componennt.netlify.app/"
          description={"Sign-up form component with JS validation"}
          github={`https://github.com/ceimiplace/Form-component-vanilla-JS`}
        />
        <ProjectComponent
          src={"/images/Chameleon-ui.png"}
          to="https://chameleons-ui.netlify.app/"
          description={"Webpage component created for a friend"}
          github={`https://github.com/ceimiplace/Interactive-Ui-Chameleon-Upwork`}
        />
      </Section>
    </div>
  );
}
