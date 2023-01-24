var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["26418ebb-4f3e-47f2-89cc-b6f8c04ce1c2","db1d010e-3e77-4e4c-b2b2-c24bea3fc56d"],"propsByKey":{"26418ebb-4f3e-47f2-89cc-b6f8c04ce1c2":{"name":"Impostor","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"AoKp9p.heKKjiTqsNJ_v.1Kr9uTNgaI5","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/26418ebb-4f3e-47f2-89cc-b6f8c04ce1c2.png"},"db1d010e-3e77-4e4c-b2b2-c24bea3fc56d":{"name":"Inocente","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"jTcXYT7FPD1zxPPJgJzFyrm9FSBUVb96","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/db1d010e-3e77-4e4c-b2b2-c24bea3fc56d.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var Mortes = 0;
var Vitorias = 0;
var inocente = createSprite(50,350,15,15);
inocente.setAnimation("Inocente");
inocente.scale=0.7;
var impostor1 = createSprite(50,230,20,20);
impostor1.setAnimation("Impostor");
impostor1.scale=0.7;
var impostor2 = createSprite(350,120,20,20);
impostor2.setAnimation("Impostor");
impostor2.scale=0.7;
var topo = createSprite(200,5,200,20);
topo.shapeColor = "red";
impostor1.velocityX=20;
impostor2.velocityX=-20;
function draw() {
  background("gray");
  textSize(15);
  stroke ("red")
  fill ("black")
  text("Mortes: " + Mortes,320,20);
  text("Vitiórias: " + Vitorias,10,20)
 
  createEdgeSprites();
  impostor1.bounceOff(edges);
  impostor2.bounceOff(edges);
  
  if (keyDown(UP_ARROW)){
    inocente.y=inocente.y-3;
  }
  if (keyDown(DOWN_ARROW)){
    inocente.y=inocente.y+3;
  }
  if (keyDown(RIGHT_ARROW)){
    inocente.x=inocente.x+3;
  }
  if (keyDown(LEFT_ARROW)){
    inocente.x=inocente.x-3;
  }
  if (inocente.isTouching(impostor1) || inocente.isTouching(impostor2)){
    playSound("assets/category_poof/puzzle_game_click_fire_poof_03.mp3");
    inocente.x=50;
    inocente.y=350;
    Mortes = Mortes+1;
  }
  if (inocente.isTouching(topo)){
    playSound("assets/category_bell/bells_win_low.mp3");
    inocente.x=50;
    inocente.y=350;
    Vitorias = Vitorias=1
  }
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
