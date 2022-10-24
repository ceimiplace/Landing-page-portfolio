import "./Section.css";
export default function Section({ title, children }) {
  return (
    <div className=" px-20 py-10 ">
      <p className="text-3xl text-[#DAA520] mb-4 ">{title}</p>
      <div className="section-container">{children}</div>
    </div>
  );
}
