import "./ElearnLanding.css";
export default function ElearnLanding() {
  return (
    <div className="elearn-container my-4">
      <div className="flex justify-between items-baseline">
        <p className="header-s">skilled</p>
        <Button
          className={"dark-color-background white-color-text   bodyS"}
          text={"Get Started"}
        />
      </div>
      <div className="cover-container">
        <div className="cover-text-container">
          <p className="header-l dark-color-text my-4 ">
            Maximize skill, minimize budget
          </p>
          <p className="bodyS font-light grey-color my-4">
            Our modern courses across a range of in-demand skills will give you
            the knowledge you need to live the life you want.
          </p>
          <Button
            className={`white-color-text pink-linear-gradient my-4`}
            text={"Get Started"}
          />
        </div>
        <div className="hero-image">
          <picture>
            <source
              srcSet="./images/elearning-landing-page/image-hero-tablet.png"
              media="(min-width:768px)"
            />
            <srouce
              srcSet="./images/elearning-landing-page/image-hero-desktop.png"
              media="(min-width:1440px)"
            />
            <img src="./images/elearning-landing-page/image-hero-mobile.png" />
          </picture>
        </div>
      </div>
    </div>
  );
}
function Button({ className, text }) {
  return (
    <button className={`${className} p-4 rounded-full w-40`}>{text}</button>
  );
}
