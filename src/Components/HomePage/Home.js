import "./Home.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    let puncteOne = document.querySelector(".puncte-one");
    let puncteTwo = document.querySelector(".puncte-two");
    let puncteThree = document.querySelector(".puncte-three");
    function animateWriting() {
      new Promise((resolve) => {
        puncteOne.classList.add("blink");
        puncteOne.addEventListener("animationend", () => {
          puncteOne.classList.remove("blink");
          resolve();
        });
      })
        .then(() => {
          return new Promise((resolve) => {
            puncteTwo.classList.add("blink");
            puncteTwo.addEventListener("animationend", () => {
              puncteTwo.classList.remove("blink");
              resolve();
            });
          });
        })
        .then(() => {
          puncteThree.classList.add("blink");
          puncteThree.addEventListener("animationend", () => {
            puncteThree.classList.remove("blink");
          });
        });
    }
    animateWriting();
    setInterval(animateWriting, 2100);
  }, []);
  return (
    <div className="home-container" id="home">
      <p className="text-hero">
        <span className="text-hero-code">&lt;Code</span>
        <span className="animation-writing">
          <span className="puncte puncte-one">.</span>
          <span className="puncte puncte-two">.</span>
          <span className="puncte puncte-three">.</span>
        </span>
        <span className="text-hero-code">/&gt;</span>
      </p>
    </div>
  );
}
