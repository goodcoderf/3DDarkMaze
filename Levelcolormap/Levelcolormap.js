/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Levelcolormap extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Levelcolormap/costumes/costume1.svg", {
        x: 260.51501501501497,
        y: 185.042785
      })
    ];

    this.sounds = [new Sound("pop", "./Levelcolormap/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.moveAhead();
    this.goto(0, 0);
    this.effects.ghost = 100;
  }
}
