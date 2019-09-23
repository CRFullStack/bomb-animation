import printMe from "./print";
const confetti = require("canvas-confetti");
import "./style.css";
import "./img/momb.svg";
import "./img/background.svg";

// Initializing a class
function Cannon() {
  this.dropSpeed = "3s";
  this.vaporSpeed = "1.5s";
  this.snowFallSpeed = 3;
  this.play = document.getElementById("play");
  this.reset = document.getElementById("reset");
  this.bomb = document.getElementById("bomb");
  this.bg = document.getElementById("bg");
  this.oval = document.getElementById("oval");
  this.area = document.getElementById("area");
  this.myCanvas = document.createElement("canvas");
  this.shootConfetti = () => {
    console.log("shot confetti");
    this.myCanvas.id = "canvas";
    this.area.insertBefore(this.myCanvas, this.area.firstChild);

    var myConfetti = confetti.create(this.myCanvas, { resize: true });
    myConfetti({
      particleCount: 400,
      spread: 130,
      startVelocity: 70,
      ticks: 350,
      origin: {
        y: 0.9
      }
    });
    window.setTimeout(() => this.snow(myConfetti), 2000);
  };
  // Adding a method to the constructor
  this.clearBomb = () => {
    this.bomb.style.display = "none";
    this.oval.style.display = "none";
    this.bgAction();
    this.shootConfetti();
  };

  this.bgAction = () => {
    this.bg.style.animation = `vapor ${this.vaporSpeed}`;
    this.bg.style.animationFillMode = "forwards";
  };

  this.bombAction = () => {
    this.bomb.style.animation = `fall ${this.dropSpeed}`;
    this.bomb.style.animationFillMode = "forwards";
    this.oval.style.animation = `shadow ${this.dropSpeed}`;
    this.oval.style.animationFillMode = "forwards";
  };

  this.resetBomb = () => {
    this.bomb.style.animation = "";
    this.bomb.style.display = "block";
    this.bg.style.animation = "";
    this.oval.style.animation = "";
    this.oval.style.display = "block";
    console.log("reset the drop");
  };
  this.snow = myConfetti => {
    let end = Date.now() + this.snowFallSpeed * 1000;

    (function frame() {
      myConfetti({
        particleCount: 1,
        startVelocity: 0,
        ticks: 300,
        origin: {
          x: Math.random(),
          // since they fall down, start a bit higher than random
          y: Math.random() - 0.2
        },
        shapes: ["circle"]
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
    console.log("shot snow");
  };
}

const x = new Cannon();
x.play.onclick = function() {
  x.bombAction();
};
x.bomb.addEventListener("animationend", function() {
  x.clearBomb();
});

x.reset.onclick = function() {
  x.resetBomb();
};

/**
 *
 */
