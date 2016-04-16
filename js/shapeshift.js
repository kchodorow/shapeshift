goog.require('shapeshift.Globals.game');

goog.require('shapeshift.Tutorial');


var preload = function() {
  shapeshift.Globals.game = game;
};

var create = function() {
  shapeshift.Globals.cursors = game.input.keyboard.createCursorKeys();
  shapeshift.Globals.level1 = new shapeshift.Tutorial(game);
};

var update = function() {
  shapeshift.Globals.level1.update(shapeshift.Globals.cursors);
};

var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-thing',
  {preload: preload, create: create, update: update});
