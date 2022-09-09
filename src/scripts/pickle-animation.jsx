window.addEventListener("load", () => {
  const pickleImg = document.getElementById("pickleImg");
  const container = document.getElementById("pickleAnimation");
  const pickleCanvas = document.querySelector(".pickleRickCanvas");
  const ctx4 = pickleCanvas.getContext("2d");

  pickleCanvas.width = window.innerWidth;
  pickleCanvas.height = window.innerHeight * 3 ;

  class ObjectBG {
    constructor({ image, x, y, speedX = 0, speedY = 0, scale }) {
      this.x = x + image.width / 2;
      this.y = y + image.height / 2;
      this.initX = x;
      this.initY = y;
      this.image = image;
      this.scale = scale;
      this.width = image.width * this.scale;
      this.height = image.height * this.scale;
      this.size = image.width * this.scale;
      this.density = this.size;
      this.movement = {
        speedX: (speedX * this.size) / 10,
        speedY: (speedY * this.size) / 10,
      };
    }
    draw() {
      ctx4.drawImage(
        this.image,
        this.x - this.image.width / 2.5,
        this.y - this.image.height / 2.5,
        this.width,
        this.height
      );
    }
    update() {
      this.x += this.movement.speedX;
      this.y += this.movement.speedY;
      this.draw();
      if (this.x > pickleCanvas.width * 1.5) {
        this.y = this.initY + pickleCanvas.width / 2;
        this.x = this.initX - pickleCanvas.width / 2;
      }
    }
  }
  let pickles = [];
  const maxPickles = 90;

  for (let i = 0; i < maxPickles; i++) {
    let posX = (Math.random() - 0.5) * pickleCanvas.width;
    let posY = Math.random() * pickleCanvas.height * 2.5;
    let speedX = 0.5;
    let speedY = -0.5;
    let scale = Math.random() / 2;
    pickles.push(
      new ObjectBG({
        image: pickleImg,
        x: posX,
        y: posY,
        speedX: speedX,
        speedY: speedY,
        scale: scale
      })
    );
  }

  function animate4() {

    ctx4.fillRect(0, 0, pickleCanvas.width, pickleCanvas.height);
    pickles.forEach((pickle) => {
      pickle.update();
    });
    requestAnimationFrame(animate4);
  }

  window.addEventListener("resize", () => {
    pickleCanvas.width = container.offsetWidth;
    pickleCanvas.height = container.offsetHeight;
  });
  console.log(pickles)
  animate4();
});
