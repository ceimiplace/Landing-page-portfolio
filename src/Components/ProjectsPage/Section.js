import "./Section.css";
export default function Section({ title, children }) {
  return (
    <div className=" px-2 py-10 ">
      <p className="text-3xl text-white mb-4 ">{title}</p>
      <div className="section-container">{children}</div>
    </div>
  );
}
