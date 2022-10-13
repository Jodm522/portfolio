import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import "./smashboys.css";
import { BGSprite } from "./backgroundClass";
import { Sprite } from "./characterClass";
// import BackgroundImage from "./Images/Arena-1-redux.png";
function SmashBoys() {

  const player1Char = {
    name : "Jimmy",
    sprites:{ 
      rIdle:{ 
      imageSrc: `./smashBoys/players/jimmy/Jimmyidle.png`,
      framesMax: 2
    },
    lIdle:{ 
      imageSrc: `./smashBoys/players/jimmy/JimmyidleReverse.png`,
      framesMax: 2
    },
    rWalk:{ 
      imageSrc: `./smashBoys/players/jimmy/JimmyRightWalk.png`,
      framesMax: 8
    },
    lWalk:{ 
      imageSrc: `./smashBoys/players/jimmy/JimmyLeftWalk.png`,
      framesMax: 8
    },
    lHit:{
      imageSrc:"./smashBoys/players/jimmy/JimmyHitLeft.png",
      framesMax: 2
    },
    rHit:{
      imageSrc:"./smashBoys/players/jimmy/JimmyHitRight.png",
      framesMax: 2
    }
  }
  }

  const player2Char = {
    name : "Jimmy",
    sprites:{ rIdle:{ 
      imageSrc: `./smashBoys/players/jimmy/Jimmyidle.png`,
      framesMax: 2
    },
    lIdle:{ 
      imageSrc: `./smashBoys/players/jimmy/JimmyidleReverse.png`,
      framesMax: 2
    },
    rWalk:{ 
      imageSrc: `./smashBoys/players/jimmy/JimmyRightWalk.png`,
      framesMax: 8
    },
    lWalk:{ 
      imageSrc: `./smashBoys/players/jimmy/JimmyLeftWalk.png`,
      framesMax: 8
    },
    lHit:{
      imageSrc:"./smashBoys/players/jimmy/JimmyHitLeft.png",
      framesMax: 2
    },
    rHit:{
      imageSrc:"./smashBoys/players/jimmy/JimmyHitRight.png",
      framesMax: 2
    }
  
  
  }
  }


  const canvas = useRef(null);

  useEffect(() => {
    const ctx = canvas.current.getContext("2d");
   
    const background = new BGSprite({
      position: { x: 0, y: 0 },
      imageSrc: `./smashBoys/backgrounds/Arena-1-redux.png`,
      ctx
    });

    ///REnder Players
    const player1 = new Sprite({
      position: {
        x: 0,
        y: 0,
      },
      velocity: { x: 0, y: 0 },
      facing: "right",
      character : player1Char,
      ctx
    });

    const player2 = new Sprite({
      position: {
        x: 400,
        y: 100,
      },
      velocity: { x: 0, y: 0 },
      facing: "left",
      character:player2Char,
      ctx
    });


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

      background.update();

      player1.update();
      player2.update();

      //Stop player movement in Y if they're grounded
      if (player1.position.y + player1.height + player1.velocity.y >= 556)
        player1.velocity.x = 0;
      if (player2.position.y + player2.height + player2.velocity.y >= 556)
        player2.velocity.x = 0;

      //P1 Movement
      if(!player1.stunned){
      if (keys.a.pressed && player1.lastkey === "a") {
        player1.velocity.x = -5;
        player1.facing = "left";
        player1.spriteChange("walk")
        
      } else if (keys.d.pressed && player1.lastkey === "d") {
        player1.velocity.x = 5;
        player1.facing = "right";
        player1.spriteChange("walk")
      }
      if (
        keys.w.pressed &&
        player1.position.y + player1.height + player1.velocity.y >= 556
      ) {
        player1.velocity.y = -10;
      }
      }
     
      //P2 Movement
      if(!player2.stunned){
      if (keys.lArrow.pressed) {
        player2.velocity.x = -5;
        player2.facing = "left";
        player2.spriteChange("walk")
        // player2.img.src = player2.character.sprites.lWalk.imageSrc
      } else if (keys.rArrow.pressed) {
        player2.velocity.x = 5;
        player2.facing = "right";
        player2.spriteChange("walk")
      }
      if (
        keys.uArrow.pressed &&
        player2.position.y + player2.height + player2.velocity.y >= 556
      ) {
        player2.velocity.y = -10;
      }



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
        player2.takeHit(player1.facing)
      }
      // P2 attacks
      if (
        player2.attackBox.position.x + player2.attackBox.width >=
          player1.position.x &&
        player2.attackBox.position.x + player2.attackBox.width <=
          player1.position.x + player1.width &&
        player2.attackBox.position.y + player2.attackBox.height >=
          player1.position.y &&
        player2.attackBox.position.y <= player1.position.y + player1.height &&
        player2.isAttacking
      ) {
        player1.takeHit(player2.facing)
      }
      //   console.log(player2.attackBox.offset);
    }

    animate();

    window.addEventListener("keydown", (e) => {
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
          player1.spriteChange("idle")
          break;
        case "a":
          keys.a.pressed = false;
          player1.spriteChange("idle")
          break;
        case "w":
          keys.w.pressed = false;
          break;

        //player2
        case "ArrowLeft":
          keys.lArrow.pressed = false;
          player2.spriteChange("idle")
          break;
        case "ArrowRight":
          keys.rArrow.pressed = false;
          player2.spriteChange("idle")
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
