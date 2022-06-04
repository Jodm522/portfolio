import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import "./smashboys.css";
import BackgroundImage from "./Images/Arena-1-redux.png";
function SmashBoys() {
  const canvas = useRef(null);

  useEffect(() => {
    //Setup canvas background
    const ctx = canvas.current.getContext("2d");

    const gravity = 0.2;

    // Sprite constructor
    class Sprite {
      constructor({ position, velocity, color, facing }) {
        this.position = position;
        this.velocity = velocity;
        this.height = 150;
        this.width = 50;
        this.lastkey = null;
        this.color = color;
        this.isAttacking = false;
        this.facing = facing;
        this.attackBox = {
          position: {
            x: this.position.x,
            y: this.position.y,
          },
          offset: facing === "right" ? { x: 0, y: 0 } : { x: -50, y: 0 },

          width: 100,
          height: 50,
        };
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

        //AttackBox
        if (this.isAttacking) {
          ctx.fillStyle = "yellow";
          ctx.fillRect(
            this.attackBox.position.x,
            this.attackBox.position.y,
            this.attackBox.width,
            this.attackBox.height
          );
        }
      }

      update() {
        this.draw();
        this.attackBox.position.x =
          this.position.x + (this.facing === "right" ? 0 : -50);
        this.attackBox.position.y = this.position.y;
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if (this.position.y + this.height + this.velocity.y >= 576) {
          this.velocity.y = 0;
        } else this.velocity.y += gravity;

        if (this.position.x + this.width + this.velocity.x <= 0) {
          this.velocity.x = 0;
        }
      }
      attack() {
        this.isAttacking = true;
        setTimeout(() => {
          this.isAttacking = false;
        }, 100);
      }
    }
    //RENDER OTHER SPRITES
    class BGSprite {
      constructor({ position, imageSrc }) {
        this.position = position;
        this.height = 1040;
        this.width = 576;
        this.img = new Image();
        this.img.src = imageSrc;
      }

      draw() {
        // ctx.drawImage(this.image, this.position.x, this.position.y);
        var canvas = ctx.canvas;
        var hRatio = canvas.width / this.img.width;
        var vRatio = canvas.height / this.img.height;
        var ratio = Math.min(hRatio, vRatio);
        var centerShift_x = (canvas.width - this.img.width * ratio) / 2;
        var centerShift_y = (canvas.height - this.img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
          this.img,
          0,
          0,
          this.img.width,
          this.img.height,
          centerShift_x,
          centerShift_y,
          this.img.width * ratio,
          this.img.height * ratio
        );
      }
      update() {
        this.draw();
      }
    }
    const background = new BGSprite({
      position: { x: 0, y: 0 },
      imageSrc: BackgroundImage,
    });

    ///REnder Players
    const player1 = new Sprite({
      position: {
        x: 0,
        y: 0,
      },
      velocity: { x: 0, y: 0 },
      color: "blue",
      //   offset: { x: 0, y: 0 },
      facing: "right",
    });

    const player2 = new Sprite({
      position: {
        x: 400,
        y: 100,
      },
      velocity: { x: 0, y: 0 },
      color: "red",
      //   offset: { x: -50, y: 0 },
      facing: "left",
    });

    const renderCanvas = () => {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, 1024, 576);
    };

    renderCanvas();

    const keys = {
      a: {
        pressed: false,
      },
      d: {
        pressed: false,
      },
      w: {
        pressed: false,
      },
      lArrow: {
        pressed: false,
      },
      rArrow: {
        pressed: false,
      },
      uArrow: {
        pressed: false,
      },
    };
    function animate() {
      window.requestAnimationFrame(animate);

      renderCanvas();
      background.update();
      player1.update();
      player2.update();

      //Stop player movement in X if they're grounded
      if (player1.position.y + player1.height + player1.velocity.y >= 576)
        player1.velocity.x = 0;
      if (player2.position.y + player2.height + player2.velocity.y >= 576)
        player2.velocity.x = 0;

      //P1 Movement
      if (keys.a.pressed && player1.lastkey === "a") {
        player1.velocity.x = -5;
        player1.facing = "left";
      } else if (keys.d.pressed && player1.lastkey === "d") {
        player1.velocity.x = 5;
        player1.facing = "right";
      }
      if (
        keys.w.pressed &&
        player1.position.y + player1.height + player1.velocity.y >= 576
      ) {
        player1.velocity.y = -10;
      }
      //P2 Movement

      if (keys.lArrow.pressed) {
        player2.velocity.x = -5;
        player2.facing = "left";
      } else if (keys.rArrow.pressed) {
        player2.velocity.x = 5;
        player2.facing = "right";
      }
      if (
        keys.uArrow.pressed &&
        player2.position.y + player2.height + player2.velocity.y >= 576
      ) {
        player2.velocity.y = -10;
      }
      //Detect Collisions
      //P1 attacks
      if (
        player1.attackBox.position.x + player1.attackBox.width >=
          player2.position.x &&
        player1.attackBox.position.x + player1.attackBox.width <=
          player2.position.x + player2.width &&
        player1.attackBox.position.y + player1.attackBox.height >=
          player2.position.y &&
        player1.attackBox.position.y <= player2.position.y + player2.height &&
        player1.isAttacking
      ) {
        player1.isAttacking = false;
      }
      if (
        player2.attackBox.position.x + player2.attackBox.width >=
          player1.position.x &&
        player2.attackBox.position.x + player2.attackBox.width <=
          player1.position.x + player2.width &&
        player2.attackBox.position.y + player2.attackBox.height >=
          player1.position.y &&
        player2.attackBox.position.y <= player1.position.y + player1.height &&
        player2.isAttacking
      ) {
        player2.isAttacking = false;
      }
      //   console.log(player2.attackBox.offset);
    }

    animate();

    window.addEventListener("keydown", (e) => {
      console.log(e);
      switch (e.key) {
        //player1
        case "d":
          keys.d.pressed = true;
          player1.lastkey = "d";

          break;
        case "a":
          keys.a.pressed = true;
          player1.lastkey = "a";
          break;
        case "w":
          keys.w.pressed = true;
          break;
        case "q":
          player1.attack();
          break;

        //player2
        case "ArrowLeft":
          keys.lArrow.pressed = true;
          player2.lastkey = "lArrow";
          break;
        case "ArrowRight":
          keys.rArrow.pressed = true;
          player2.lastkey = "rArrow";
          break;
        case "ArrowUp":
          keys.uArrow.pressed = true;
          break;
        case "/":
          player2.attack();
          break;
      }
    });
    window.addEventListener("keyup", (e) => {
      switch (e.key) {
        case "d":
          keys.d.pressed = false;
          break;
        case "a":
          keys.a.pressed = false;
          break;
        case "w":
          keys.w.pressed = false;
          break;

        //player2
        case "ArrowLeft":
          keys.lArrow.pressed = false;

          break;
        case "ArrowRight":
          keys.rArrow.pressed = false;

          break;
        case "ArrowUp":
          keys.uArrow.pressed = false;
          break;
      }
    });
  }, [canvas]);

  return (
    <div className="canvasDiv">
      <canvas ref={canvas} width={1024} height={576} />
    </div>
  );
}
export default SmashBoys;
