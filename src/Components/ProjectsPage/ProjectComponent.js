import { Link } from "react-router-dom";
import "./ProjectComponent.css";

export default function ProjectComponent({
  src,
  description,
  note,
  to,
  github,
  type,
  alt,
}) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={`${src}`} className=" " alt="picture of project" />
      </div>
      <div className="description-container text-white  ">{description}</div>
      {note && <div className="text-xs text-medium">*{note}</div>}
      <div className="links-container">
        <a
          href={github}
          target="_blank"
          className="bg-white text-black rounded border-black border-2 "
        >
          View code on Github <i class="fa-brands fa-github"></i>
        </a>
        <a href={to} target="_blank" className="">
          Click here to load project
        </a>
      </div>
    </div>
  );
}
