/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Plr extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("PlrIcon2D", "./Plr/costumes/PlrIcon2D.svg", {
        x: 8.501702058642962,
        y: 5.9475900000000195
      }),
      new Costume("Hitbox", "./Plr/costumes/Hitbox.png", { x: 4, y: 4 })
    ];

    this.sounds = [new Sound("pop", "./Plr/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.fov = 70;
    this.stage.vars.res = 8;
    this.size = 150;
    this.effects.ghost = 100;
    this.goto(0, 0);
    this.rotationStyle = Sprite.RotationStyle.ALL_AROUND;
    this.direction = 45;
    this.costume = "PlrIcon2D";
    while (true) {
      yield* this.playerTick();
      yield* this.initialize();
      this.broadcast("Raycast");
      this.broadcast("Entity Tick");
      this.broadcast("Paint");
      yield;
    }
  }

  *move2(stepquantity) {
    this.costume = "Hitbox";
    this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
    this.move(this.toNumber(stepquantity));
    if (this.touching(this.sprites["Level"].andClones())) {
      this.move(0 - this.toNumber(stepquantity));
    }
    this.costume = "PlrIcon2D";
    this.rotationStyle = Sprite.RotationStyle.ALL_AROUND;
  }

  *playerTick() {
    if (this.keyPressed("left arrow")) {
      this.direction -= 3;
    }
    if (this.keyPressed("right arrow")) {
      this.direction += 3;
    }
    if (this.keyPressed("up arrow") || this.keyPressed("w")) {
      this.warp(this.move2)(2);
    }
    if (this.keyPressed("down arrow") || this.keyPressed("s")) {
      this.warp(this.move2)(-2);
    }
    if (this.keyPressed("a")) {
      this.direction -= 90;
      this.warp(this.move2)(2);
      this.direction += 90;
    }
    if (this.keyPressed("d")) {
      this.direction += 90;
      this.warp(this.move2)(2);
      this.direction -= 90;
    }
  }

  *initialize() {
    this.stage.vars.cameraDir = this.direction;
    this.stage.vars.dv =
      240 / this.scratchTan(this.toNumber(this.stage.vars.fov) / 2);
  }
}
