/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Level extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Level/costumes/costume1.svg", {
        x: 259.0135135135135,
        y: 185.04279279279274
      })
    ];

    this.sounds = [new Sound("pop", "./Level/sounds/pop.wav")];

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
