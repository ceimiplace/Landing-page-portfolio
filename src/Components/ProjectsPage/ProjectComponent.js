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
    <div className="card-container ">
      <div className="image-container">
        <img src={`${src}`} className=" " />
      </div>
      <div className="description-container ">{description}</div>
      {note && <div className="text-xs text-default">*{note}</div>}
      <div className="links-container">
        <a
          href={github}
          target="_blank"
          className="bg-gray-100 rounded border-black border-2 "
        >
          View code on Github
        </a>

        <a
          href={to}
          target="_blank"
          className="bg-gray-100 rounded border-black border-2"
        >
          Click here to load project
        </a>
      </div>
    </div>
  );
}
