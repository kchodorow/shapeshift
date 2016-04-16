goog.provide('shapeshift.Globals.game');

shapeshift.Globals.STYLE = {font: "50px Arial", fill: "#ffffff", align: "center"};

shapeshift.Globals.WIDTH = 800;
shapeshift.Globals.HEIGHT = 600;

shapeshift.Globals.LEFT = {
  WIDTH : shapeshift.Globals.WIDTH/2,
  UL : {x : 0, y : 0},
  UR : {x : shapeshift.Globals.WIDTH/2, y : 0},
  LL : {x : 0, y : shapeshift.Globals.HEIGHT},
  LR : {x : shapeshift.Globals.WIDTH/2, y : shapeshift.Globals.HEIGHT},
  CENTER : {x : shapeshift.Globals.WIDTH/4, y : shapeshift.Globals.HEIGHT/2}
};

shapeshift.Globals.RIGHT = {
  WIDTH : shapeshift.Globals.WIDTH/2,
  CENTER : {
    x : (shapeshift.Globals.WIDTH / 4) * 3,
    y : shapeshift.Globals.HEIGHT/2
  }
};
