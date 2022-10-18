import "./ElearnLanding.css";
export default function ElearnLanding() {
  return (
    <div className="elearn-container">
      <div className="">
        <p className="">skilled</p>
        <Button className={"dark-color"} text={"Get Started"}></Button>
      </div>
    </div>
  );
}
function Button({ className, text }) {
  return <button className={className}>{text}</button>;
}
