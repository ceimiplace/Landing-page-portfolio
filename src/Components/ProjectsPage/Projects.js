import Section from "./Section";
import React from "react";
import ProjectComponent from "./ProjectComponent";

export default function Projects() {
  return (
    <div className=" grow px-4" id="projects">
      <Section title={"Projects made with React.js"}>
        <ProjectComponent
          src={"/images/Github_User.png"}
          to="https://github-usearch.netlify.app/"
          description={"Github user finder"}
          github={`https://github.com/ceimiplace/github-user-finder`}
        />
        <ProjectComponent
          src={"/images/ElearnPage.png"}
          to="https://elearn-page.netlify.app/"
          description={"Responsive mobile-first WebPage"}
          github={`https://github.com/ceimiplace/elearning-page`}
        />
        <ProjectComponent
          src={"/images/Responsive-react-webpage.png"}
          to="https://responsive-react-webpage.netlify.app/"
          description={"Responsive mobile-first WebPage"}
          github={`https://github.com/ceimiplace/single-page-portofolio-frontendmentor-challenge`}
        />
        <ProjectComponent
          src={"/images/RandomAdviceGenerator.png"}
          to="https://reapers-lipstick.netlify.app/"
          description={"Random Advice Generator "}
          github={`https://github.com/ceimiplace/random-advice-generator`}
        />
        <ProjectComponent
          src={"/images/UnsplashAPI.jpg"}
          to="https://search-img-unsplash.netlify.app/"
          description={"Image gallery from Unsplash API  in mosonry layout ."}
          github={`https://github.com/ceimiplace/Search-app-Unsplash.com`}
        />
      </Section>
      <Section title={"Projects made with CSS and Vanilla JavaScript"}>
        <ProjectComponent
          src={"images/ipadress.png"}
          to={"https://ipadresstracker94.netlify.app/"}
          description={"Ip Adress tracker with geolocation"}
          github={"https://github.com/ceimiplace/ip-adress"}
        />
        <ProjectComponent
          src={"/images/randomJoke.jpg"}
          to="https://dadjokeys.netlify.app/"
          description={"Random Dad Joke Generator connected to a public API"}
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
