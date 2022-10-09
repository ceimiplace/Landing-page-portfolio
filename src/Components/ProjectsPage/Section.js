import "./Section.css";
export default function Section({ title, children }) {
  return (
    <div className=" my-10 ">
      <p className="text-3xl text-gray-500 mb-4 ">{title}</p>
      <div className="section-container">{children}</div>
    </div>
  );
}
