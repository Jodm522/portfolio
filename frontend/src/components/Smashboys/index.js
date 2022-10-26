import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import "./smashboys.css";
import { BGSprite } from "./backgroundClass";
import { Sprite} from "./characterClass";
import Ranged from "./rangedClass";
import detectHits from "./detectHits";
import HealthBar from "./healthBarClass";
import { SuperAttack } from "./superClass";
// import BackgroundImage from "./Images/Arena-1-redux.png";
function SmashBoys() {

  const standin2 = {
    name : "Drew",
    healthBarImage:"./smashBoys/players/andrew/DrewHealthbarPic.png",
    hp:1000,
    meleeDamage: 20,
    superFunctionality:{
      damage:52,
      startingPos:{ x:"player", y:530},
      velocity: {x:0, y:0},
      size: {width:30, height:50},
      sprites:{ initial:
        {imageSrc:"./smashBoys/players/andrew/MonkeyFish.png",
        framesMax:1,
        offset: 0},

        onChange:{imageSrc:"./smashBoys/players/andrew/MonkeyAttack.png",
        framesMax:4,
        offset: 0,
        height: 75,
      width: 30},
        
      },
      destroyFunc: (ctx)=>{return (ctx.position.x > 1000)},
      onCollide:(thisSuper, otherPlayer)=>{
        // console.log(thisSuper.damage)
        otherPlayer.takeHit("right", thisSuper.damage)
        thisSuper.position = otherPlayer.position
        thisSuper.img.src= thisSuper.sprites.onChange.imageSrc
        thisSuper.framesMax= thisSuper.sprites.onChange.framesMax
        thisSuper.offset= thisSuper.sprites.onChange.offset
        thisSuper = null
      }
    },
    projectileFunctionality:{
      damage:10,
      stayTime:750,
      size:{x:30,y:10},
      velocity:15,
      projectileSprites:{
        
        lProjectile:{
          imageSrc:"./smashBoys/players/andrew/DrewProjectileLeft.png",
          framesMax:2,
          offset:0
        },
        rProjectile:{
          imageSrc:"./smashBoys/players/andrew/DrewProjectileRight.png",
          framesMax:2,
          offset:0
        }
  
      },
    },
    sprites:{ 
      rIdle:{ 
      imageSrc: `./smashBoys/players/andrew/DrewIdleRight.png`,
      framesMax: 2, 
      offset: 0
    },
    lIdle:{ 
      imageSrc: `./smashBoys/players/andrew/DrewIdleLeft.png`,
      framesMax: 2,
      offset: 0
    },
    rWalk:{ 
      imageSrc: `./smashBoys/players/andrew/DrewRightWalk.png`,
      framesMax: 8,
      offset: 0
    },
    lWalk:{ 
      imageSrc: `../smashBoys/players/andrew/DrewLeftWalk.png`,
      framesMax: 8,
      offset: 0
    },
    lHit:{
      imageSrc:"./smashBoys/players/andrew/DrewHitLeft.png",
      framesMax: 2,
      offset: 0
    },
    rHit:{
      imageSrc:"./smashBoys/players/andrew/DrewHitRight.png",
      framesMax: 2,
      offset: 0
    },
    lAttack:{
      imageSrc:"./smashBoys/players/andrew/DrewLeftAttack.png",
      framesMax:3,
      offset: -18
    },
    rAttack:{
      imageSrc:"./smashBoys/players/andrew/DrewRightAttack.png",
      framesMax:3,
      offset: 0
    },
    lRange: {
      imageSrc:"./smashBoys/players/andrew/DrewRangeLeft.png",
      framesMax:2,
      offset: 0
    },
    rRange: {
      imageSrc:"./smashBoys/players/andrew/DrewRangeRight.png",
      framesMax:2,
      offset: 0
    },
    lSuper:{
      imageSrc:"./smashBoys/players/jimmy/jimmySuperInit.png",
      framesMax:2,
      offset: 0
    },
    rSuper:{
      imageSrc:"./smashBoys/players/jimmy/jimmySuperInit.png",
      framesMax:2,
      offset: 0
    },
    
  }
  }
  const standin1 = {
    name : "Jimmy",
    healthBarImage:"./smashBoys/players/jimmy/JimHealthbarPic.png",
    meleeDamage: 15,
    hp:1000,
    superFunctionality:{
      damage:200,
      startingPos:{x:20, y:420},
      velocity: {x:20, y:0},
      size: {width:450, height:150},
      sprites:{
        initial:{
          imageSrc:"./smashBoys/players/jimmy/jimmySuperSprite.png",
          framesMax:2,
          offset: 0
        },
        
      },
      

      destroyFunc: (ctx)=>{return (ctx.position.x > 1000)},
      onCollide:(thisSuper, otherPlayer)=>{
        otherPlayer.takeHit("right", thisSuper.damage)

      }
    },
    projectileFunctionality:{
      damage:20,
      velocity:10,
      stayTime:500,
      size:{x:25,y:25},
      projectileSprites:{
        lProjectile:{
          imageSrc:"./smashBoys/players/jimmy/JimmyProjectileLeft.png",
          framesMax:2,
          offset:0
        },
        rProjectile:{
          imageSrc:"./smashBoys/players/jimmy/JimmyProjectileRight.png",
          framesMax:2,
          offset:0
        }
      },

    },

    sprites:{ 
      rIdle:{ 
      imageSrc: `./smashBoys/players/jimmy/Jimmyidle.png`,
      framesMax: 2, 
      offset: 0
    },
    lIdle:{ 
      imageSrc: `./smashBoys/players/jimmy/JimmyidleReverse.png`,
      framesMax: 2,
      offset: 0
    },
    rWalk:{ 
      imageSrc: `./smashBoys/players/jimmy/JimmyRightWalk.png`,
      framesMax: 8,
      offset: 0
    },
    lWalk:{ 
      imageSrc: `./smashBoys/players/jimmy/JimmyLeftWalk.png`,
      framesMax: 8,
      offset: 0
    },
    lHit:{
      imageSrc:"./smashBoys/players/jimmy/JimmyHitLeft.png",
      framesMax: 2,
      offset: 0
    },
    rHit:{
      imageSrc:"./smashBoys/players/jimmy/JimmyHitRight.png",
      framesMax: 2,
      offset: 0
    },
    lAttack:{
      imageSrc:"./smashBoys/players/jimmy/JimmyAttackLeft.png",
      framesMax:3,
      offset: -18
    },
    rAttack:{
      imageSrc:"./smashBoys/players/jimmy/JimmyAttackRight.png",
      framesMax:3,
      offset: 0
    },
    lRange: {
      imageSrc:"./smashBoys/players/jimmy/JimmyRangeL.png",
      framesMax:3,
      offset: 0
    },
    rRange: {
      imageSrc:"./smashBoys/players/jimmy/JimmyRangeR.png",
      framesMax:3,
      offset: 0
    },
    lSuper:{
      imageSrc:"./smashBoys/players/jimmy/jimmySuperInit.png",
      framesMax:2,
      offset: 0
    },
    rSuper:{
      imageSrc:"./smashBoys/players/jimmy/jimmySuperInit.png",
      framesMax:2,
      offset: 0
    },
    
   
  }
  }

  const player2Char = standin2
  const player1Char = standin1
  let player1Projectile = null
  let player2Projectile = null
  let player1Super = null
  let player2Super = null
  const canvas = useRef(null);

  useEffect(() => {
    const ctx = canvas.current.getContext("2d");
    
    const background = new BGSprite({
      position: { x: 0, y: 0 },
      imageSrc: `./smashBoys/backgrounds/Arena-1-redux.png`,
      ctx
    });

    ///Rnder Players
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
    let player1healthBar = new HealthBar({src: "./smashBoys/player1HealthBar.png", ctx, position:{x:4,y:10}, healthBarImage:player1.healthBarImage,healthBarImagePosition:{x:12,y:21}})
    let player2healthBar = new HealthBar({src: "./smashBoys/player2HealthBar.png", ctx, position:{x:570,y:10},healthBarImage:player2.healthBarImage,healthBarImagePosition:{x:914,y:21}})

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
      player1healthBar.update()
      player2healthBar.update()
      if(player1Projectile){
        player1Projectile.update();
      }
      if(player2Projectile){
        player2Projectile.update();
      }
      if(player1Super){
        player1Super.update();
        if(player1Super.destroyMe){
        player1Super.position.x = 0
        player1Super = null
      }}
      if(player2Super){
        player2Super.update();
        if(player2Super.destroyMe){
        player2Super.position.x = 0
        player2Super = null
      }}
      //Stop player movement in Y if they're grounded
      if (player1.position.y + player1.height + player1.velocity.y >= 556)
        player1.velocity.x = 0;
      if (player2.position.y + player2.height + player2.velocity.y >= 556)
        player2.velocity.x = 0;

      //P1 Movement
      if(!player1.stunned){
      if (keys.a.pressed && player1.lastkey === "a" && player1.position.x > 0) {
        player1.velocity.x = -5;
        player1.facing = "left";
        player1.spriteChange("walk")
        
      } else if (keys.d.pressed && player1.lastkey === "d" && player1.position.x < 1000) {
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
      if (keys.lArrow.pressed&& player2.position.x > 0) {
        player2.velocity.x = -5;
        player2.facing = "left";
        player2.spriteChange("walk")
        // player2.img.src = player2.character.sprites.lWalk.imageSrc
      } else if (keys.rArrow.pressed && player2.position.x < 1000) {
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

      
      
      detectHits(player1, player2, player1Projectile, player2Projectile,player1Super,player2Super)
    }

    animate();
    
    function makePlayer1Projectile(position,facing,functionality,ctx){
      player1Projectile = new Ranged({position,facing,functionality,ctx})

      setTimeout(()=>{ player1Projectile = null}, functionality.stayTime)
    
      
     }


     function makePlayer1Super(stats){
      let {startingPos, velocity,size,sprites,destroyFunc,onCollide, damage} = stats  
      let whereToStart = {...startingPos}
      let playerPos = {...player1.position}
      whereToStart.x === "player"? whereToStart.x = playerPos.x: whereToStart.x=whereToStart.x
      whereToStart.y === "player"? whereToStart.y = playerPos.y:whereToStart.x=whereToStart.x
      console.log(startingPos)
      player1Super = new SuperAttack(whereToStart, velocity,size,sprites,destroyFunc,onCollide, damage, ctx)
      
    }


     function makePlayer2Projectile(position,facing,functionality,ctx){
      player2Projectile = new Ranged({position,facing,functionality,ctx})

      setTimeout(()=>{ player2Projectile = null}, functionality.stayTime)
    
      
     }
 function makePlayer2Super(stats){
      let {startingPos, velocity,size,sprites,destroyFunc,onCollide, damage} = stats  
      let whereToStart = {...startingPos}
      let playerPos = {...player2.position}
      whereToStart.x === "player"? whereToStart.x = playerPos.x: whereToStart.x=whereToStart.x
      whereToStart.y === "player"? whereToStart.y = playerPos.y:whereToStart.x=whereToStart.x
      console.log(startingPos)
      player2Super = new SuperAttack(whereToStart, velocity,size,sprites,destroyFunc,onCollide,damage, ctx)

    }
    // window.addEventListener("gamepadconnected", (e) => {
    //   console.log(e.gamepad)
    // })
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
          player1.attack("melee");
          break;
        case "e":
          if(!player1Projectile){
            player1.attack("range");
          let position = {...player1.position}
          let functionality = {...player1.character.projectileFunctionality}
            makePlayer1Projectile(position, player1.facing, functionality, ctx)
          }
        break
        case "s":
          let player1SuperStats = {...player1.character.superFunctionality}
        makePlayer1Super(player1SuperStats)
        break
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
          case "ArrowDown":
            let player2SuperStats = {...player2.character.superFunctionality}
            makePlayer2Super(player2SuperStats)
            break;
        case "/":
          player2.attack("melee");
          break;
        case ".":
          if(!player2Projectile){
            player2.attack("range");
          let position = {...player2.position}
          let functionality = {...player2.character.projectileFunctionality}
            makePlayer2Projectile(position, player2.facing, functionality, ctx)
          }
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
