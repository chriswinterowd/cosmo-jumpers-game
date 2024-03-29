function Pipe(x, y, asteroid) {
  this.x = x;
  this.y = y;
  this.w = 20;
  this.rotateX = 0;
  this.highlight = false;
  this.playerScored;
  this.hits = function (bird) {
    let hit = collideRectCircle(bird.x + 2.5, bird.y - 10, 60, 85, this.x, this.y, 95);
    let hit2 = collideCircleCircle(bird.x + 40, bird.y - 14, 43, this.x, this.y, 95);

    if (hit) {
      this.highlight = true;
      return true;
    }

    if (hit2) {
      this.highlight = true;
      return true;
    }
    if (bird.y > height + 80) {
      bird.y = height + 80;

      return true;
    }
    if (!hit && !hit2) {
      this.highlight = false;
      return false;
    }
  };
  this.scored = function (bird) {
    if (!this.playerScored && bird.x > this.x) {
      bird.score += 1;
      this.playerScored = true;
      return true;
    }
  };
  this.show = function () {
    fill(255);
    if (this.highlight) {
      fill(255, 0, 0);
    }
    var _color = color(255, 255, 255, 0);
    fill(_color);
    circle(this.x, this.y, 95);

    image(asteroid, this.x - 50, this.y - 50);
  };
  this.update = function (speed) {
    //console.log(this.one);
    //console.log(this.firstX);
    //console.log(this.three);
    this.x -= speed * deltaTime;
  };

  this.offscreen = function () {
    if (this.x < -100) {
      return true;
    } else {
      return false;
    }
  };
}
