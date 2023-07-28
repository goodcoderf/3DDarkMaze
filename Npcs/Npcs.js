/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Npcs extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Hitbox", "./Npcs/costumes/Hitbox.png", { x: 4, y: 4 })
    ];

    this.sounds = [new Sound("pop", "./Npcs/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Entity Tick" },
        this.whenIReceiveEntityTick
      )
    ];

    this.vars.vx = -19.70565181825666;
    this.vars.vy = -47.75206893669972;
  }

  *whenGreenFlagClicked() {
    this.effects.ghost = 100;
    this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
    this.size = 225;
    this.goto(-33, 37);
  }

  *whenIReceiveEntityTick() {
    this.vars.vx = this.x - this.sprites["Plr"].x;
    this.vars.vy = this.y - this.sprites["Plr"].y;
    yield* this.rotateView(this.vars.vx, this.vars.vy);
  }

  *rotateView(x, y) {
    this.vars.vx =
      this.toNumber(x) *
        Math.cos(this.degToRad(this.toNumber(this.stage.vars.cameraDir))) -
      this.toNumber(y) *
        Math.sin(this.degToRad(this.toNumber(this.stage.vars.cameraDir)));
    this.vars.vy =
      this.toNumber(x) *
        Math.sin(this.degToRad(this.toNumber(this.stage.vars.cameraDir))) +
      this.toNumber(y) *
        Math.cos(this.degToRad(this.toNumber(this.stage.vars.cameraDir)));
  }
}
