window.addEventListener("load", () => {
  const slimeCanvas = document.getElementById("portalGunCanvas");
  const ctx2 = slimeCanvas.getContext("2d");
  slimeCanvas.height = window.innerHeight;
  slimeCanvas.width = window.innerWidth;

  const colors = ["#6BDD4B", "#B0E343", "#36D17D"]; //0A8643

  class SlimeParticle {
    constructor(slimeEffect, color) {
      this.effect = slimeEffect;
      this.radius = Math.random() * 60 + 20;
      this.x =
        this.radius * 2 + Math.random() * (this.effect.width - this.radius * 2);
      this.y = -4 * this.radius;
      this.speedX = (Math.random() - 0.5) * 0.1;
      this.speedY = Math.random() * 1.5;
      this.gravity = Math.random() * 0.0001;
      this.vy = 0;
      this.color = color;
    }
    draw(context) {
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      context.fillStyle = this.color;
      context.fill();
    }
    update() {
      if (this.x < this.radius || this.x > this.effect.width - this.radius)
        this.speedX *= -1;
      if (this.y > this.effect.height + this.radius) {
        this.y = -2 * this.radius;
        this.vy = 0;
        this.speedY = (Math.random() * this.radius) / 9;
      }
      if (this.y > this.radius * 2) {
        this.vy += this.gravity;
        this.speedY += this.vy;
      }
      this.x += this.speedX;
      this.y += this.speedY;
    }
    reset() {
      this.x = this.effect.width * 0.5;
      this.y = this.effect.height * 0.5;
    }
  }

  class SlimeEffect {
    constructor(width, height, colors) {
      this.width = width;
      this.height = height;
      this.slimeArray = [];
      this.colors = colors;
    }
    init(numberOfSlimes) {
      for (let i = 0; i < numberOfSlimes; i++) {
        let colorIndex = Math.floor(Math.random() * 3.9);
        this.slimeArray.push(new SlimeParticle(this, this.colors[colorIndex]));
      }
    }
    update() {
      this.slimeArray.forEach((slime) => slime.update());
    }
    draw(context) {
      this.slimeArray.forEach((slime) => slime.draw(context));
    }
    reset(newWidth, newHeight) {
      this.width = newWidth;
      this.height = newHeight;
      this.slimeArray.forEach((slime) => slime.reset());
    }
  }

  const effect = new SlimeEffect(slimeCanvas.width, slimeCanvas.height, colors);
  effect.init(120);

  function animatePortal() {
    ctx2.clearRect(0, 0, slimeCanvas.width, slimeCanvas.height);
    effect.update();
    effect.draw(ctx2);
    requestAnimationFrame(animatePortal);
  }
  animatePortal();

  window.addEventListener("resize", () => {
    slimeCanvas.width = window.innerWidth;
    slimeCanvas.height = window.innerHeight;
    ctx2.fillStyle = "#A0B48D";
    effect.reset(slimeCanvas.width, slimeCanvas.height);
  });
});
