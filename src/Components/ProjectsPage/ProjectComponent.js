import { Link } from "react-router-dom";
import "./ProjectComponent.css";
export default function ProjectComponent({
  src,
  description,
  note,
  to,
  github,
}) {
  return (
    <div to={to} className="card-container ">
      <div className="image-container">
        <img src={`${src}`} className=" " />
      </div>
      <div className="description-container">{description}</div>
      <div className="links-container">
        <a href={github} target="_blank">
          View code on Github
        </a>

        <Link to={to}>Click here to load project</Link>
      </div>
      {note && <div>*{note}</div>}
    </div>
  );
}
