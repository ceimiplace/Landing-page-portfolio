import { Children } from "react";
import "./ElearnLanding.css";
export default function ElearnLanding() {
  return (
    <div className="grow">
      <div className="elearn-container ">
        <Section>
          <p className="header-s">skilled</p>
          <Button
            className={"dark-color-background white-color-text  bodyS"}
            text={"Get Started"}
          />
        </Section>
        <div className="cover-container">
          <div className="cover-text-container">
            <p className="header-l dark-color-text my-4 ">
              Maximize skill, minimize budget
            </p>
            <p className="bodyM grey-color my-4">
              Our modern courses across a range of in-demand skills will give
              you the knowledge you need to live the life you want.
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
        <MainElan>
          <p className="white-color-text pink-linear-gradient header-s  unique-card">
            Check out our most popular courses!
          </p>
          <CardComponent
            svgSrc="./images/elearning-landing-page/icon-animation.svg"
            title={"Animation"}
            body={
              "Learn the latest animation techniques to create stunning motion design and captivate your audience."
            }
          />
          <CardComponent
            svgSrc="./images/elearning-landing-page/icon-design.svg"
            title={"Design"}
            body={
              "Create beautiful, usable interfaces to help shape the future of how the web looks."
            }
          />
          <CardComponent
            svgSrc="./images/elearning-landing-page/icon-photography.svg"
            title={"Photography"}
            body={
              "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos."
            }
          />
          <CardComponent
            svgSrc="./images/elearning-landing-page/icon-crypto.svg"
            title={"Crypto"}
            body={
              "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course."
            }
          />
          <CardComponent
            svgSrc="./images/elearning-landing-page/icon-crypto.svg"
            title={"Business"}
            body={
              "A step-by-step playbook to help you start, scale, and sustain your business without outside investment."
            }
          />
        </MainElan>
      </div>
      <Section classes={"dark-color-background footer-elan"}>
        <p className="header-s white-color-text">skilled</p>
        <Button
          className={"pink-linear-gradient white-color-text  bodyS"}
          text={"Get Started"}
        />
      </Section>
    </div>
  );
}
function Button({ className, text }) {
  return (
    <button className={`${className} p-4 rounded-full w-40`}>{text}</button>
  );
}
function CardComponent({ svgSrc, title, body }) {
  return (
    <div className="card-component-elearn">
      <img src={`${svgSrc}`} />
      <p className="header-s">{title}</p>
      <p className="bodyM grey-color">{body}</p>
      <a href="#" className="text-xl font-bold intense-pink-color">
        Get Started{" "}
      </a>
    </div>
  );
}
function MainElan({ children }) {
  return <main className="main-container-elan">{children}</main>;
}
function Section({ classes, children }) {
  return (
    <div className={`flex justify-between items-baseline ${classes}`}>
      {children}
    </div>
  );
}
