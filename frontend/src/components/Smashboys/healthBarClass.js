export default class HealthBar {
    constructor({src, ctx, position, healthBarImage,healthBarImagePosition}){
      this.ctx = ctx
      this.position=position
      this.img = new Image();
      this.img.src = src
      this.healthBarImage = new Image()
      this.healthBarImage.src = healthBarImage
      this.healthBarImagePosition = healthBarImagePosition
    //   this.attackBox = {
    //     position: {
    //       x: this.position.x,
    //       y: this.position.y,
    //     },  
    //     width: functionality.size.x, 
    //     height: functionality.size.y,
    //   };

      
    }


    update() {
        // console.log(this.healthBarImage)
        this.ctx.drawImage(
        this.img,
          this.position.x,
          this.position.y,
          450,
          150,
        );
        this.ctx.drawImage(
            this.healthBarImage,
              this.healthBarImagePosition.x,
              this.healthBarImagePosition.y,
              98,
              128,
            );
        
      }
      
   
}