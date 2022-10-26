export class SuperAttack {
    constructor(position,velocity,size,sprites, destroyFunc,onCollide,damage, ctx){
      this.ctx = ctx
      this.position= position
      this.velocity= velocity
      this.sprites = sprites
      this.exists = true
      this.height = size.height;
      this.width = size.width;
      this.destroyMe= false
      this.destroyFunc = destroyFunc
      this.onCollide = onCollide
      this.img = new Image();
      this.img.src = this.sprites.initial.imageSrc
      this.framesMax = this.sprites.initial.framesMax
      this.offset = this.sprites.initial.offset
      this.damage = damage
      this.framesCurrent = 1  //* Used to determine which sprite on a sheet to show
      this.framesElapsed = 0  //* Counts frames to reset loop through spritesheet frames
      this.framesHold = 10    //* adjusts how many frames between sprite change

      this.attackBox = {
        position: {
          x: this.position.x,
          y: this.position.y,
        },  
        width: this.width,
        height: this.height,
      };

      
    }
    tryDestroy(){
    this.destroyMe= this.destroyFunc(this)   
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
        this.tryDestroy()
        this.ctx.drawImage(
          this.img,
          this.framesCurrent * (this.img.width / this.framesMax),
          0,
          this.img.width/ this.framesMax,
          this.img.height,
          this.position.x,
          this.position.y,
          this.img.width/this.framesMax,
          this.img.height
        );
        
        
        this.animateFrames();
        this.attackBox.position.x =
          this.position.x
        this.attackBox.position.y = this.position.y;
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
      
    

      }
      
   
}