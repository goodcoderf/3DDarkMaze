/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Pen extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("test1", "./Pen/costumes/test1.svg", {
        x: 99.99999999999997,
        y: 100
      })
    ];

    this.sounds = [new Sound("pop", "./Pen/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Paint" }, this.whenIReceivePaint)
    ];

    this.vars.distance = -47.75206893669972;
    this.vars.height = -71.77815103199363;
  }

  *whenIReceivePaint() {
    this.vars.distance = this.sprites["Npcs"].vars.vy;
    this.vars.height =
      10 *
      (this.toNumber(this.stage.vars.dv) / this.toNumber(this.vars.distance));
    this.size = this.toNumber(this.vars.height);
    this.goto(
      this.toNumber(this.sprites["Npcs"].vars.vx) *
        (this.toNumber(this.stage.vars.dv) / this.toNumber(this.vars.distance)),
      0
    );
  }
}
