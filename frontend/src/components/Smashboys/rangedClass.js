export default class Ranged {
    constructor({position, facing, functionality, ctx,}){
      this.ctx = ctx
      this.position=position
      this.velocity= facing === "right"?{x:functionality.velocity}: {x:(functionality.velocity*-1)}
      this.facing = facing
      this.sprites = functionality.projectileSprites
      this.exists = true
      this.height = 25;
      this.width = 25;
      this.damage = functionality.damage;
      this.img = new Image();
      this.img.src = facing === "right"? this.sprites.rProjectile.imageSrc:this.sprites.lProjectile.imageSrc
      this.framesMax = facing === "right"?this.sprites.rProjectile.framesMax:this.sprites.lProjectile.framesMax
      this.offset = this.sprites.offset
      this.framesCurrent = 1  //* Used to determine which sprite on a sheet to show
      this.framesElapsed = 0  //* Counts frames to reset loop through spritesheet frames
      this.framesHold = 10    //* adjusts how many frames between sprite change

      this.attackBox = {
        position: {
          x: this.position.x,
          y: this.position.y,
        },  
        width: functionality.size.x, 
        height: functionality.size.y,
      };

      
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


    update() {
      
        this.ctx.drawImage(
          this.img,
          this.framesCurrent * (this.img.width / this.framesMax),
          0,
          this.img.width/ this.framesMax,
          this.img.height,
          this.position.x,
          this.position.y + 20,
          this.img.width/this.framesMax,
          this.img.height
        );
        
        
        this.animateFrames();
        this.attackBox.position.x =
          this.position.x
        this.attackBox.position.y = this.position.y;
        this.position.x += this.velocity.x;
      

    

      }
      
   
}