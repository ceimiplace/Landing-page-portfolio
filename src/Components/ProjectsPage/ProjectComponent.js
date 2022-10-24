import { Link } from "react-router-dom";
import "./ProjectComponent.css";
import LinkComponent from "./LinkComponent";
import AtagComponent from "./AtagComponent";
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
      <div className="description-container  text-[#DAA520]">{description}</div>
      {note && <div className="text-xs text-medium">*{note}</div>}
      <div className="links-container">
        <a
          href={github}
          target="_blank"
          className="bg-white text-black rounded border-black border-2 "
        >
          View code on Github
        </a>
        {type === "Link" ? (
          <LinkComponent to={to} />
        ) : (
          <AtagComponent to={to} />
        )}
      </div>
    </div>
  );
}
