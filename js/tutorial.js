/* Globals:  Phaser */

goog.provide('shapeshift.Tutorial');

goog.require('goog.math');

shapeshift.Tutorial = function(game) {
  // Left side.
  this.goal_ = this._addGoal(game);

  // Center.
  this.divider_ = this._addDivider(game);

  // Right side.
  this.sprite_ = this._addShape(
    game,
    shapeshift.Globals.RIGHT.CENTER.x,
    shapeshift.Globals.RIGHT.CENTER.y);

  // Add instructions.
  // You're trying to get the computer to match your arragement, but the only
  // instruction you can give is a "yes, you're doing something right" marker.
};

shapeshift.Tutorial.prototype._addShape = function(game, x, y) {
  var square = game.add.bitmapData(32, 32);
  square.ctx.rect(0, 0, 32, 32);
  square.ctx.fillStyle = "#0f0";
  square.ctx.fill();

  var sprite = game.add.sprite(x, y, square);
  game.physics.arcade.enable(sprite);
  sprite.anchor.set(0.5);
  sprite.body.collideWorldBounds = true;
  return sprite;
};

shapeshift.Tutorial.prototype._addDivider = function(game) {
  var square = game.add.bitmapData(10, shapeshift.Globals.HEIGHT);
  square.ctx.rect(
    0, 0, shapeshift.Globals.WIDTH/2 + 5, shapeshift.Globals.HEIGHT);
  square.ctx.fillStyle = "#fff";
  square.ctx.fill();

  var sprite = game.add.sprite(game.world.centerX, game.world.centerY, square);
  game.physics.arcade.enable(sprite);
  sprite.body.immovable = true;
  sprite.anchor.set(0.5);
  sprite.body.collideWorldBounds = true;
  return sprite;
};

shapeshift.Tutorial.prototype._addGoal = function(game) {
  var x = goog.math.randomInt(shapeshift.Globals.LEFT.WIDTH);
  var y = goog.math.randomInt(shapeshift.Globals.HEIGHT);
  return this._addShape(game, x, y);
};

shapeshift.Tutorial.prototype.update = function(cursors) {
  shapeshift.Globals.game.physics.arcade.collide(this.sprite_, this.divider_);

  this.sprite_.body.velocity.x = 0;
  this.sprite_.body.velocity.y = 0;

  if (this._done()) {
    return;
  }

  if (cursors.left.isDown) {
    this.sprite_.body.velocity.x = -150;
  }
  if (cursors.right.isDown) {
    this.sprite_.body.velocity.x = 150;
  }
  if (cursors.up.isDown) {
    this.sprite_.body.velocity.y = -150;
  }
  if (cursors.down.isDown) {
    this.sprite_.body.velocity.y = 150;
  }
};

shapeshift.Tutorial.prototype._done = function() {
  if (this.isDone_) {
    return true;
  }

  var distX = Math.abs(
    this.goal_.x - (this.sprite_.x - shapeshift.Globals.WIDTH/2));
  var distY = Math.abs(this.goal_.y - this.sprite_.y);
  if (distX < 20 && distY < 20) {
    this.isDone_ = true;
    var style = {
      font : "bold 32px Arial",
      fill : "#fff",
      boundsAlignH: "center",
      boundsAlignV: "middle"
    };

    var text = shapeshift.Globals.game.add.text(0, 0, "Good job!", style);
    text.setTextBounds(0, 100, shapeshift.Globals.WIDTH, 100);
    return true;
  }
  return false;
};
