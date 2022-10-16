import "./Home.css";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="grow  bg-blue-100 px-2">
      <div className="home-container">
        <img
          src="/images/profile-picture.jpg"
          className="profile-image-container"
        />
        <div className="introduction font-medium">
          <h2 className="font-bold text-2xl text-center">Hello There,</h2>
          <p className="py-2">
            My name is Denis Azamfire and I'm a Software Developer.
          </p>
          <p className="py-2">
            I started my journey by learning HTML,CSS and Vanilla Javascript.
            After creating a number of projects with these tehnologies,i added
            Tailwind and React.js under my belt.
          </p>
          <p className="py-2">
            You can find these projects in the Projects Section.
          </p>
          <p className="py-2">
            I created this portfolio website as a Single Page Application with
            React.js and React Router v6 and a mix of Tailwind and CSS.
          </p>
        </div>

        <div className="projects-link-container">
          <Link to="/projects" className="projects-link first-link">
            TO MY PROJECTS
          </Link>
          <Link to="/projects" className="projects-link second-link">
            MORE ABOUT ME
          </Link>
        </div>
      </div>
    </div>
  );
}
