import { Link } from "react-router-dom";
export default function ProjectComponent({
  src,
  description,
  note,
  to,
  github,
}) {
  return (
    <div
      to={to}
      className=" w-80 h-80 text-center border-2 border-slate-300 flex flex-col inline border-2 border-black"
    >
      <div className="p-2">
        <img src={`${src}`} className="w-80 h-40" />
      </div>
      <div className="">{description}</div>
      <div>
        <a href={github} target="_blank">
          View code on Github
        </a>
        <br />
        <Link to={to}>Click here to load project</Link>
      </div>
      {note && <div>*{note}</div>}
    </div>
  );
}
