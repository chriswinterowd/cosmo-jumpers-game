function Bird(astronaut) {
  this.y = height / 3;
  this.x = width / 3;

  this.gravity = 1;
  this.lift = -25;
  this.velocity = 0;
  this.score = 0;
  this.show = function () {
    var _color = color(255, 255, 255, 0);
    fill(_color);

    rect(this.x + 2.5, this.y - 10, 60, 85);
    circle(this.x + 40, this.y - 14, 43);
    image(astronaut, this.x - 30, this.y - 40);
  };

  this.up = function () {
    this.velocity += this.lift;
  };
  this.update = function () {
    this.velocity += this.gravity;

    this.velocity *= 0.9;

    this.y += this.velocity;
    if (bird.y < -80) {
      bird.y = -80;
    }
  };

  this.fall = function () {
    this.y += 1.45;
    if (this.y > height + 80) {
      this.y = height + 80;
    }
  };
}