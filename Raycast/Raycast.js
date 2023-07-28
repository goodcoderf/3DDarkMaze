/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Raycast extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Hitbox", "./Raycast/costumes/Hitbox.png", { x: 4, y: 4 })
    ];

    this.sounds = [new Sound("pop", "./Raycast/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Raycast" },
        this.whenIReceiveRaycast
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];

    this.vars.x = 244;
    this.vars.distance = 50.2422121419999;
    this.vars.height = 68.22062704049101;
    this.vars.scanlines = 60;
  }

  *whenGreenFlagClicked() {
    this.costume = "Hitbox";
    this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
  }

  *singleRay() {
    this.goto(this.sprites["Plr"].x, this.sprites["Plr"].y);
    while (!this.touching(this.sprites["Level"].andClones())) {
      this.move(4);
    }
    while (!!this.touching(this.sprites["Level"].andClones())) {
      this.move(-1);
    }
    if (this.touching(this.sprites["Levelcolormap"].andClones())) {
      this.penColor.h = 58;
    } else {
      this.penColor.h = 53;
    }
    this.vars.distance = Math.hypot(
      this.sprites["Plr"].x - this.x,
      this.sprites["Plr"].y - this.y
    );
    this.vars.distance =
      this.toNumber(this.vars.distance) *
      Math.cos(
        this.degToRad(this.direction - this.toNumber(this.stage.vars.cameraDir))
      );
    this.penColor.v = 120 - this.toNumber(this.vars.distance) / 1.5;
    this.vars.height =
      10 *
      (this.toNumber(this.stage.vars.dv) / this.toNumber(this.vars.distance));
    this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.height));
    this.penDown = true;
    this.y = 0 - this.toNumber(this.vars.height);
    this.penDown = false;
  }

  *whenIReceiveRaycast() {
    this.clearPen();
    this.penSize = this.toNumber(this.stage.vars.res);
    this.penColor.h = 53;
    yield* this.raycast();
  }

  *raycast() {
    this.vars.x = this.toNumber(this.stage.vars.res) / 2 - 240;
    this.vars.scanlines = 480 / this.toNumber(this.stage.vars.res);
    for (let i = 0; i < this.toNumber(this.vars.scanlines); i++) {
      this.direction =
        this.toNumber(this.stage.vars.cameraDir) +
        this.radToDeg(
          Math.atan(
            this.toNumber(this.vars.x) / this.toNumber(this.stage.vars.dv)
          )
        );
      this.warp(this.singleRay)();
      this.vars.x += this.toNumber(this.stage.vars.res);
    }
  }

  *whenGreenFlagClicked2() {
    this.effects.ghost = 100;
  }
}
