/* Globals:  Phaser */

goog.provide('shapeshift.Tutorial');

shapeshift.Tutorial = function(game) {
  this.box_ = this._addBox(game);
  this.sprite_ = this._addShape(game);
};

shapeshift.Tutorial.prototype._addShape = function(game) {
  var square = game.add.bitmapData(32, 32);
  square.ctx.rect(0, 0, 32, 32);
  square.ctx.fillStyle = "#0f0";
  square.ctx.fill();

  var sprite = game.add.sprite(
    shapeshift.Globals.LEFT.CENTER.x, shapeshift.Globals.LEFT.CENTER.y, square);
  game.physics.arcade.enable(sprite);
  sprite.anchor.set(0.5);
  sprite.body.collideWorldBounds = true;
  return sprite;
};

shapeshift.Tutorial.prototype._addBox = function(game) {
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


shapeshift.Tutorial.prototype.update = function(cursors) {
  shapeshift.Globals.game.physics.arcade.collide(this.sprite_, this.box_);

  this.sprite_.body.velocity.x = 0;
  this.sprite_.body.velocity.y = 0;

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
