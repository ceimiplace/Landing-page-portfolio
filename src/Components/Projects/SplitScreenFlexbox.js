import "./SplitScreenFlexbox.css";
let play = document.querySelector(".play");
let xbox = document.querySelector(".xbox");
let aray = [play, xbox];
function remover() {
  aray.forEach((item) => {
    item.classList.remove("active");
  });
}
aray.forEach((item) => {
  item.addEventListener("mouseover", () => {
    remover();
    item.classList.add("active");
  });
});
aray.forEach((item) => {
  item.addEventListener("mouseout", () => {
    remover();
  });
});
export default function SplitScreenFlexbox() {
  return (
    <div className="split-screen-container">
      <div class="play cover">
        <h3>Playstation 5</h3>
        <p>Buy now</p>
        <div class="silly"></div>
      </div>
      <div class="xbox cover">
        <h3>Xbox Series X</h3>
        <p>Buy now</p>
        <div class="silly"></div>
      </div>
    </div>
  );
}
