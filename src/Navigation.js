export default function Navigation() {
  return (
    <nav className="fixed w-full top-0 left-0 flex flex-col justify-between items-center px-10 bg-[#0D111C] sm:flex-row">
      <img
        src="/Logo.png"
        style={{ width: "80px", height: "80px" }}
        alt="logo"
      ></img>

      <div className="my-4 text-md  flex gap-4">
        <a className="px-2 text-white" href="#home">
          Home
        </a>
        <a href="#projects" className="px-2 text-white" to="/projects">
          Projects
        </a>
      </div>
    </nav>
  );
}
