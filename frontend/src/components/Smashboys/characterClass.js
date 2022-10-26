

export class Sprite {
    constructor({ position, velocity, facing, character, ctx}) {
    this.ctx = ctx;
    //? Player specific setups
        //! Position  
        this.position = position;
        this.velocity = velocity;
        //! Size
        this.height = 75;
        this.width = 50;
        this.meleeDamage = character.meleeDamage;
        this.hp = character.hp
        this.healthBarImage = character.healthBarImage;
        //! Canvas image setup
        this.img = new Image();
        this.character = character
        this.currentImage = facing === "right"? character.sprites.rIdle:character.sprites.lIdle //! necessary to keep from re-rendering the first frame when keys are held
    //? Setup for player rendering and movement
        //! Setup player default display
        this.facing = facing; //* facing has a value of "left" or "right" and is used to change the character sprite appropriately
        this.img.src = facing === "right"? character.sprites.rIdle.imageSrc:character.sprites.lIdle.imageSrc ;
        this.framesMax = facing === "right"? character.sprites.rIdle.framesMax:character.sprites.lIdle.framesMax;
        this.numProjectiles = 0
        //! Default states
        this.isAttacking = false; //* Is attacking is used to change the sprite and create a hitbox  
        this.lastkey = null; //* Lastkey is used to help change and determine facing
        this.stunned = false;

    //? Setup frame counters
        this.framesCurrent = 1  //* Used to determine which sprite on a sheet to show
        this.framesElapsed = 0  //* Counts frames to reset loop through spritesheet frames
        this.framesHold = 10    //* adjusts how many frames between sprite change

    //? Attack Box creation 
      this.attackBox = {
        position: {
          x: this.position.x,
          y: this.position.y,
        },
        offset: this.facing === "right" ? { x: 0, y: 0 } : { x: -50, y: 0 },
        width: 75,
        height: 75,
      };
      
      
    }

    draw() {
      if (this.isAttacking) {
        
      }
    }



    animateFrames() {
      this.framesElapsed++
      if (this.framesElapsed % this.framesHold === 0) {
        if (this.framesCurrent < this.framesMax - 1) {
          this.framesCurrent++
        } else {
          this.framesCurrent = 0
        }
      }
    }
  
    update() 
    {
      // console.log(this.healthBarImage)
      this.ctx.drawImage(
        this.img,
        this.framesCurrent * (this.img.width / this.framesMax),
        0,
        this.img.width/ this.framesMax,
        this.img.height,
        this.position.x + this.currentImage.offset,
        this.position.y,
        this.img.width/this.framesMax,
        this.img.height
      );
      
      
      this.draw();
      this.animateFrames();


      this.attackBox.position.x =
        this.position.x + (this.facing === "right" ? 0 : -50);
      this.attackBox.position.y = this.position.y;
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      if (this.position.y + this.height + this.velocity.y >= 556) {
        this.velocity.y = 0;
      } else this.velocity.y += 0.2;

      if (this.position.x + this.width + this.velocity.x <= 0) {
        this.velocity.x = 0;
      }
      if (this.position.x <=0){
        this.velocity.x = 0
        this.velocity.x = 25
      }
      if (this.position.x >=1000){
        this.velocity.x = 0
        this.velocity.x = -25
      }
    }

    



    attack(type) {
      switch(type){
        case "melee":
          this.spriteChange("attack")
        this.isAttacking = true;
      setTimeout(() => {
        this.isAttacking = false;
        this.spriteChange("idle")
      }, 250)
      break
      case "range":
          this.spriteChange("range")
         
      setTimeout(() => {
        this.isAttacking = false;
        this.spriteChange("idle")
      }, 250)


      }
      
    }

facingChange(facing){
this.facing = facing
}
takeHit(direction, damage){
  if(!this.stunned){
    this.hp -= damage
this.spriteChange("hit")
this.stunned = true
console.log(this.hp);
switch(direction){
  case "left":
   this.velocity.x = -10;
   this.velocity.y=-2 
   break  
   case "right":
   this.velocity.x = 10;
   this.velocity.y=-2 
   break  
  }
setTimeout(function(){this.stunned = false; this.spriteChange("idle")}.bind(this), 500)
};

 
}
spriteChange(sprite){   
if(this.facing === "left"){
    switch(sprite){
            

        case"idle":
        if( this.currentImage !== this.character.sprites.lIdle){
            this.currentImage = this.character.sprites.lIdle
            this.img.src = this.character.sprites.lIdle.imageSrc
            this.framesMax= this.character.sprites.lIdle.framesMax
            this.framesCurrent = 0 
        }
        break

        case"walk":
        if(this.currentImage !== this.character.sprites.lWalk){
            this.currentImage = this.character.sprites.lWalk
            this.img.src = this.character.sprites.lWalk.imageSrc
            this.framesMax= this.character.sprites.lWalk.framesMax
            this.framesCurrent = 0
        }
        break
        case"hit":
        if(this.currentImage !== this.character.sprites.lHit){
            this.currentImage = this.character.sprites.lHit
            this.img.src = this.character.sprites.lHit.imageSrc
            this.framesMax= this.character.sprites.lHit.framesMax
            this.framesCurrent = 0
        }
        break
        case "attack":
              if(this.currentImage !== this.character.sprites.lAttack){
                this.currentImage = this.character.sprites.lAttack
                this.img.src =this.character.sprites.lAttack.imageSrc
                this.framesMax =this.character.sprites.lAttack.framesMax
                this.framesCurrent = 0
              } 
              break 
        case"range":
        if(this.currentImage !== this.character.sprites.lRange){
          this.currentImage = this.character.sprites.lRange
          this.img.src =this.character.sprites.lRange.imageSrc
          this.framesMax =this.character.sprites.lRange.framesMax
          this.framesCurrent = 0
        } 
        break 

    
    }
    }
    if(this.facing === "right"){
        switch(sprite){
                
    
            case"idle":
            if( this.currentImage !== this.character.sprites.rIdle){
                this.currentImage = this.character.sprites.rIdle
                this.img.src = this.character.sprites.rIdle.imageSrc
                this.framesMax= this.character.sprites.rIdle.framesMax
                this.framesCurrent = 0 
            }
            break
    
            case"walk":
            if(this.currentImage !== this.character.sprites.rWalk){
                this.currentImage = this.character.sprites.rWalk
                this.img.src = this.character.sprites.rWalk.imageSrc
                this.framesMax= this.character.sprites.rWalk.framesMax
                this.framesCurrent = 0
            }
            break   
        
            case"hit":
            if(this.currentImage !== this.character.sprites.rHit){
                this.currentImage = this.character.sprites.rHit
                this.img.src = this.character.sprites.rHit.imageSrc
                this.framesMax= this.character.sprites.rHit.framesMax
                this.framesCurrent = 0
            }
            break 
            case "attack":
              if(this.currentImage !== this.character.sprites.rAttack){
                this.currentImage = this.character.sprites.rAttack
                this.img.src =this.character.sprites.rAttack.imageSrc
                this.framesMax =this.character.sprites.rAttack.framesMax
                this.framesCurrent = 0
              } 
              break       
              case"range":
        if(this.currentImage !== this.character.sprites.rRange){
          this.currentImage = this.character.sprites.rRange
          this.img.src =this.character.sprites.rRange.imageSrc
          this.framesMax =this.character.sprites.rRange.framesMax
          this.framesCurrent = 0
        } 
        break 
        }
        }


    }

  }