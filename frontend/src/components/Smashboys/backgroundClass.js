export class BGSprite {
    constructor({ position, imageSrc, ctx }) {
      this.position = position;
      this.height = 1040;
      this.width = 556;
      this.img = new Image();
      this.img.src = imageSrc;
      this.ctx = ctx
    }

    draw() {
      // ctx.drawImage(this.image, this.position.x, this.position.y);
      var canvas = this.ctx.canvas;
      var hRatio = canvas.width / this.img.width;
      var vRatio = canvas.height / this.img.height;
      var ratio = Math.min(hRatio, vRatio);
      var centerShift_x = (canvas.width - this.img.width * ratio) / 2;
      var centerShift_y = (canvas.height - this.img.height * ratio) / 2;
      this.ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.ctx.drawImage(
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