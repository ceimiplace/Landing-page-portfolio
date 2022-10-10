import "./Home.css";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="grow  bg-blue-300 px-2">
      <div className="home-container">
        <img
          src="/images/profile-picture.jpg"
          className="profile-image-container"
        />
        <div className="introduction font-medium">
          <h2 className="font-bold text-xl">Hello there,</h2>
          <p>My name is Denis Azamfire and i'm a FrontEnd Developer.</p>
          <p>
            I starting my journey learning HTML,CSS and Vanilla Javascript.
            After creating a number of projects with these tehnologies,i added
            Tailwind and React.js under my belt.
            <p>You can find these projects in the Projects Section.</p>
          </p>
          <p>
            I created this portolio website as Single Page Application with
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
