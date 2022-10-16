import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="sticky top-0 flex flex-col justify-between items-center px-10 bg-sky-800 sm:flex-row">
      <img
        src="/Logo.png"
        style={{ width: "80px", height: "80px" }}
        alt="logo"
      ></img>

      <div className="my-4 text-md  flex gap-4">
        <Link className="px-2 text-white" to="/">
          Home
        </Link>
        <Link className="px-2 text-white" to="/projects">
          Projects
        </Link>
      </div>
    </nav>
  );
}
